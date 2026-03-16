import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)

  return (
    <NotFoundContainer isDark={isDarkTheme}>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
      <NotFoundHeading isDark={isDarkTheme}>Page Not Found</NotFoundHeading>
      <NotFoundDescription isDark={isDarkTheme}>
        We are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </NotFoundDescription>
    </NotFoundContainer>
  )
}

export default NotFound
