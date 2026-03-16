import {useContext} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  SavedVideosContainer,
  SavedVideosContent,
  PageHeaderContainer,
  PageIconWrapper,
  PageTitle,
  VideosList,
  VideoItem,
  VideoCardLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoTextContainer,
  VideoTitle,
  ChannelName,
  VideoMetaRow,
  VideoMeta,
  DotSeparator,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

const SavedVideoCard = ({videoData}) => {
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

const SavedVideos = () => {
  const {isDarkTheme, savedVideosList} = useContext(NxtWatchContext)

  const renderNoSavedVideosView = () => (
    <NoSavedVideosContainer>
      <NoSavedVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedVideosHeading isDark={isDarkTheme}>
        No Saved Videos Found
      </NoSavedVideosHeading>
      {/* TC 106 fix — exact text tests check for */}
      <NoSavedVideosDescription isDark={isDarkTheme}>
        You can save your videos while watching them
      </NoSavedVideosDescription>
    </NoSavedVideosContainer>
  )

  const renderSavedVideosView = () => (
    <VideosList>
      {savedVideosList.map(video => (
        <VideoItem key={video.id}>
          <SavedVideoCard videoData={video} />
        </VideoItem>
      ))}
    </VideosList>
  )

  const renderContent = () => {
    if (savedVideosList.length === 0) {
      return renderNoSavedVideosView()
    }
    return renderSavedVideosView()
  }

  return (
    <>
      <Header />
      <SavedVideosContainer data-testid="savedVideos" isDark={isDarkTheme}>
        <Sidebar />
        <SavedVideosContent>
          {savedVideosList.length > 0 && (
            <PageHeaderContainer isDark={isDarkTheme}>
              <PageIconWrapper isDark={isDarkTheme}>
                <MdPlaylistAdd />
              </PageIconWrapper>
              <PageTitle isDark={isDarkTheme}>Saved Videos</PageTitle>
            </PageHeaderContainer>
          )}
          {renderContent()}
        </SavedVideosContent>
      </SavedVideosContainer>
    </>
  )
}

export default SavedVideos
