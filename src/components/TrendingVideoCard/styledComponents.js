import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
