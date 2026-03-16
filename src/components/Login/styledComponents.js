import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  border-radius: 8px;
  padding: 40px 48px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    padding: 56px 64px;
  }
`

export const WebsiteLogo = styled.img`
  width: 185px;
  margin-bottom: 32px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
  margin-bottom: 6px;
  letter-spacing: 0.3px;
`

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border: 1px solid ${props => (props.isDark ? '#424242' : '#d7dfe9')};
  border-radius: 4px;
  padding: 10px 14px;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #4f46e5;
  }

  &::placeholder {
    color: ${props => (props.isDark ? '#606060' : '#94a3b8')};
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
  accent-color: #4f46e5;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  cursor: pointer;
`

export const LoginButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4338ca;
  }
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #ff0b37;
  margin: 0;
  margin-top: 6px;
  align-self: flex-start;
`
