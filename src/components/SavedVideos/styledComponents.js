import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  overflow: hidden;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosContent = styled.div`
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
  color: #ff0000;
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

export const VideosList = styled.ul`
  list-style: none;
  padding: 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    padding: 32px 48px;
  }
`

export const VideoItem = styled.li`
  display: flex;
`

export const VideoCardLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  cursor: pointer;
`

export const ThumbnailImage = styled.img`
  width: 180px;
  min-width: 180px;
  height: 110px;
  object-fit: cover;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 260px;
    min-width: 260px;
    height: 150px;
  }
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 8px 0;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0 0 4px 0;
`

export const VideoMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`

export const VideoMeta = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0;
`

export const DotSeparator = styled.span`
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  font-size: 13px;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 400px;
  padding: 32px;
  text-align: center;
`

export const NoSavedVideosImage = styled.img`
  width: 240px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 12px 0;
`

export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0;
  line-height: 1.6;
  max-width: 380px;
`
