import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 12px;
`

export const VideoInfoRow = styled.div`
  display: flex;
  gap: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-top: 2px;
  flex-shrink: 0;
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 6px 0;
  line-height: 1.5;
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
