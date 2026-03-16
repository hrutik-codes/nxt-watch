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
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 6px 0;
  line-height: 1.5;
`

export const VideoViews = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0;
`
