import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoCardLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoTextContainer,
  VideoTitle,
  ChannelName,
  VideoMetaRow,
  VideoMeta,
  DotSeparator,
} from './styledComponents'

const TrendingVideoCard = ({videoData}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData

  return (
    <VideoCardLink to={`/videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoTextContainer>
          <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
          <ChannelName isDark={isDarkTheme}>{channel.name}</ChannelName>
          <VideoMetaRow>
            <VideoMeta isDark={isDarkTheme}>{viewCount} views</VideoMeta>
            <DotSeparator isDark={isDarkTheme}>•</DotSeparator>
            <VideoMeta isDark={isDarkTheme}>{publishedAt}</VideoMeta>
          </VideoMetaRow>
        </VideoTextContainer>
      </VideoCardContainer>
    </VideoCardLink>
  )
}

export default TrendingVideoCard
