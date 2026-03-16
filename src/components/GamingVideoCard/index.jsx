import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoCardLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoTitle,
  VideoViews,
} from './styledComponents'

const GamingVideoCard = ({videoData}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const {id, title, thumbnailUrl, viewCount} = videoData

  return (
    <VideoCardLink to={`/videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
        <VideoViews isDark={isDarkTheme}>
          {viewCount} Watching Worldwide
        </VideoViews>
      </VideoCardContainer>
    </VideoCardLink>
  )
}

export default GamingVideoCard
