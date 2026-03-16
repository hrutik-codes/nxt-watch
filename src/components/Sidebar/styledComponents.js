import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
    width: 240px;
    min-width: 240px;
    height: calc(100vh - 60px);
    position: sticky;
    top: 60px;
    left: 0;
    flex-shrink: 0;          /* ← never shrink sidebar */
    overflow-y: auto;
    padding: 16px 0;
  }
`


export const NavLinksContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 16px;
  background-color: ${props => {
    if (props.isActive) {
      return props.isDark ? '#383838' : '#f1f5f9'
    }
    return 'transparent'
  }};
  border-left: 4px solid
    ${props => (props.isActive ? '#4f46e5' : 'transparent')};
  cursor: pointer;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`

export const NavText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: ${props => (props.isActive ? '600' : '400')};
  color: ${props => {
    if (props.isActive) return '#4f46e5'
    return props.isDark ? '#ffffff' : '#212121'
  }};
  margin: 0;
`

export const NavIcon = styled.span`
  font-size: 20px;
  color: ${props => {
    if (props.isActive) return '#4f46e5'
    return props.isDark ? '#ffffff' : '#616e7c'
  }};
  display: flex;
  align-items: center;
`

export const ContactContainer = styled.div`
  padding: 24px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 16px 0;
`

export const SocialIconsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
`

export const ContactTagline = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0;
  line-height: 1.6;
`
export const ContactName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 4px 0;
`

export const ContactEmail = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #4f46e5;
  text-decoration: none;
  display: block;
  margin-bottom: 16px;

  &:hover {
    text-decoration: underline;
  }
`

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`