import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoCardLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoInfoRow,
  ChannelLogo,
  VideoTextContainer,
  VideoTitle,
  ChannelName,
  VideoMetaRow,
  VideoMeta,
  DotSeparator,
} from './styledComponents'

const HomeVideoCard = ({videoData}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData

  return (
    <VideoCardLink to={`/videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfoRow>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <VideoTextContainer>
            <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
            <ChannelName isDark={isDarkTheme}>{channel.name}</ChannelName>
            <VideoMetaRow>
              <VideoMeta isDark={isDarkTheme}>{viewCount} views</VideoMeta>
              <DotSeparator isDark={isDarkTheme}>•</DotSeparator>
              <VideoMeta isDark={isDarkTheme}>{publishedAt}</VideoMeta>
            </VideoMetaRow>
          </VideoTextContainer>
        </VideoInfoRow>
      </VideoCardContainer>
    </VideoCardLink>
  )
}

export default HomeVideoCard
