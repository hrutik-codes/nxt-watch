import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPageContainer,
  FormCard,
  WebsiteLogo,
  FormGroup,
  Label,
  Input,
  ShowPasswordContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

const Login = ({history}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)

  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }

  const onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onLoginFailure = errorMessage => {
    setErrorMsg(errorMessage)
    setShowError(true)
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      onLoginSuccess(data.jwt_token)
    } else {
      onLoginFailure(data.error_msg)
    }
  }

  return (
    <LoginPageContainer isDark={false}>
      <FormCard isDark={false}>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />

        <form style={{width: '100%'}} onSubmit={onSubmitForm}>
          <FormGroup>
            <Label htmlFor="username" isDark={false}>
              USERNAME
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              isDark={false}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password" isDark={false}>
              PASSWORD
            </Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              isDark={false}
            />
          </FormGroup>

          <ShowPasswordContainer>
            <Checkbox
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(prev => !prev)}
            />
            <CheckboxLabel htmlFor="showPassword" isDark={false}>
              Show Password
            </CheckboxLabel>
          </ShowPasswordContainer>

          <LoginButton type="submit">Login</LoginButton>

          {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </form>
      </FormCard>
    </LoginPageContainer>
  )
}

export default Login
