import {useContext} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {IoMdMoon} from 'react-icons/io'
import {MdWbSunny} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavBar,
  WebsiteLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  HamburgerButton,
  PopupOverlay,
  PopupMessage,
  PopupButtonsRow,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = ({history}) => {
  const {isDarkTheme, toggleTheme} = useContext(NxtWatchContext)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const logoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  return (
    <NavBar isDark={isDarkTheme}>
      {/* Logo wrapped with Link */}
      <Link to="/">
        <WebsiteLogo src={logoUrl} alt="website logo" />
      </Link>

      <ActionsContainer>
        {/* Theme Toggle */}
        <ThemeButton
          data-testid="theme"
          isDark={isDarkTheme}
          onClick={toggleTheme}
          type="button"
        >
          {isDarkTheme ? <MdWbSunny /> : <IoMdMoon />}
        </ThemeButton>

        {/* Hamburger — Mobile only */}
        <Popup
          modal
          trigger={
            <HamburgerButton isDark={isDarkTheme} type="button">
              <GiHamburgerMenu />
            </HamburgerButton>
          }
          className="popup-content"
        >
          {close => (
            <PopupOverlay isDark={isDarkTheme}>
              <button
                type="button"
                onClick={close}
                style={{
                  alignSelf: 'flex-end',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '22px',
                  color: isDarkTheme ? '#ffffff' : '#212121',
                }}
              >
                <AiOutlineClose />
              </button>
            </PopupOverlay>
          )}
        </Popup>

        {/* Profile Image */}
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />

        {/* Logout Popup */}
        <Popup
          modal
          trigger={
            <LogoutButton isDark={isDarkTheme} type="button">
              Logout
            </LogoutButton>
          }
          className="popup-content"
        >
          {close => (
            <PopupOverlay isDark={isDarkTheme}>
              <PopupMessage isDark={isDarkTheme}>
                Are you sure, you want to logout
              </PopupMessage>
              <PopupButtonsRow>
                <CancelButton
                  isDark={isDarkTheme}
                  type="button"
                  onClick={close}
                >
                  Cancel
                </CancelButton>
                <ConfirmButton type="button" onClick={onClickLogout}>
                  Confirm
                </ConfirmButton>
              </PopupButtonsRow>
            </PopupOverlay>
          )}
        </Popup>
      </ActionsContainer>
    </NavBar>
  )
}

export default withRouter(Header)
