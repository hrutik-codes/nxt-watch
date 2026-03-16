import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  overflow: hidden;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  padding: 20px 24px;

  @media screen and (min-width: 768px) {
    padding: 24px 48px;
  }
`

export const PageIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 28px;
  color: #4f46e5;
  flex-shrink: 0;
`

export const PageTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const VideosGrid = styled.ul`
  list-style: none;
  padding: 24px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 32px 48px;
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
