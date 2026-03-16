import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = Cookies.get('jwt_token')

  return (
    <Route
      {...rest}
      render={props => {
        if (token === undefined) {
          return <Redirect to="/login" />
        }
        return <Component {...props} />
      }}
    />
  )
}

export default ProtectedRoute
