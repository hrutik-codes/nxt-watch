import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
  }
`

export const WebsiteLogo = styled.img`
  width: 100px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#4f46e5')};
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#4f46e5')};
  border-radius: 4px;
  padding: 6px 16px;
  cursor: pointer;
`

export const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  font-size: 22px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 12px;
  padding: 32px 48px;
  gap: 24px;
`

export const PopupMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  text-align: center;
  margin: 0;
`

export const PopupButtonsRow = styled.div`
  display: flex;
  gap: 16px;
`

export const CancelButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#cccccc' : '#64748b')};
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#cccccc' : '#64748b')};
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
`
