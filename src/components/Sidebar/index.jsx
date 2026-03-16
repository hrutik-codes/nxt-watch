import {useContext} from 'react'
import {useLocation} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SidebarContainer,
  NavLinksContainer,
  NavItem,
  NavLink,
  NavText,
  NavIcon,
  ContactContainer,
  ContactHeading,
  SocialIconsRow,
  SocialIcon,
  ContactTagline,
  ContactName,        // ← new
  ContactEmail,       // ← new
  SocialIconLink,     // ← new
} from './styledComponents'

const navLinks = [
  {id: 'home', label: 'Home', path: '/', Icon: AiFillHome},
  {id: 'trending', label: 'Trending', path: '/trending', Icon: HiFire},
  {id: 'gaming', label: 'Gaming', path: '/gaming', Icon: SiYoutubegaming},
  {
    id: 'saved-videos',
    label: 'Saved Videos',
    path: '/saved-videos',
    Icon: MdPlaylistAdd,
  },
]

const Sidebar = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const location = useLocation()

  return (
    <SidebarContainer isDark={isDarkTheme}>
      <NavLinksContainer>
        {navLinks.map(({id, label, path, Icon}) => {
          const isActive = location.pathname === path

          return (
            <NavItem key={id} isActive={isActive} isDark={isDarkTheme}>
              <NavLink to={path}>
                <NavIcon isActive={isActive} isDark={isDarkTheme}>
                  <Icon />
                </NavIcon>
                <NavText isActive={isActive} isDark={isDarkTheme}>
                  {label}
                </NavText>
              </NavLink>
            </NavItem>
          )
        })}
      </NavLinksContainer>

      <ContactContainer>
        <ContactHeading isDark={isDarkTheme}>CONTACT US</ContactHeading>

        {/* Personal Info */}
        <ContactName isDark={isDarkTheme}>Hrutik HJ</ContactName>
        <ContactEmail href="mailto:youremail@gmail.com">
          hrutikjagdale@gmail.com
        </ContactEmail>

        {/* Social Icons */}
        <SocialIconsRow>
          {/* GitHub replaces Facebook */}
          <SocialIconLink
            href="https://github.com/hrutik-codes"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              src={
                isDarkTheme
                  ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                  : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              }
              alt="github logo"
              style={{
                filter: isDarkTheme ? 'invert(1)' : 'none',
              }}
            />
          </SocialIconLink>

          <SocialIconLink
            href="https://x.com/HrutikJagdale"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
          </SocialIconLink>

          <SocialIconLink
            href="https://www.linkedin.com/in/hrutik-jagdale-283070221/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocialIconLink>
        </SocialIconsRow>

        <ContactTagline isDark={isDarkTheme}>
          Still here? Go follow me already! 😄 <br />
          Next project drops soon don't miss it. 🚀 <br />
          Stay tuned. 👀
        </ContactTagline>
      </ContactContainer>
    </SidebarContainer>
  )
}

export default Sidebar
