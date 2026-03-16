import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);    /* ← fixed height */
  overflow: hidden;               /* ← prevent outer scroll */
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;               /* ← only this scrolls */
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: ${props =>
    props.isDark
      ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")'
      : 'url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")'};
  background-size: cover;
  background-position: center;
  padding: 28px 32px;
  min-height: 200px;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const BannerLogo = styled.img`
  width: 150px;
`

export const BannerTagline = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin: 0;
  max-width: 380px;
  line-height: 1.5;
`

export const GetItNowButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  background-color: transparent;
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  width: fit-content;
`

export const BannerCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#1e293b' : '#1e293b')};
  font-size: 20px;
  display: flex;
  align-items: center;
`

// ✅ Fixed — remove overflow hidden, use clip-path for border-radius instead
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 24px 16px 24px;
  border: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};
  border-radius: 4px;
  max-width: 600px;
  min-height: 40px;           /* ← guarantee visible height */
  flex-shrink: 0;             /* ← never shrink in flex context */

  @media screen and (min-width: 768px) {
    margin: 32px 32px 16px 32px;
  }
`

export const SearchInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  border: none;
  outline: none;
  padding: 8px 16px;
  flex: 1;

  &::placeholder {
    color: ${props => (props.isDark ? '#606060' : '#94a3b8')};
  }
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isDark ? '#383838' : '#e2e8f0')};
  border: none;
  border-left: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};
  padding: 8px 16px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#64748b')};
  font-size: 18px;
  display: flex;
  align-items: center;
`

export const VideosGrid = styled.ul`
  list-style: none;
  padding: 0 24px 24px 24px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 32px 32px 32px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const VideoItem = styled.li`
  display: flex;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  flex: 1;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 280px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 360px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 12px 0;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0 0 24px 0;
  max-width: 420px;
  line-height: 1.6;
`

export const RetryButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  cursor: pointer;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px;
  text-align: center;
`

export const NoVideosImage = styled.img`
  width: 240px;
  margin-bottom: 24px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 12px 0;
`

export const NoVideosDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0 0 24px 0;
  line-height: 1.6;
`
