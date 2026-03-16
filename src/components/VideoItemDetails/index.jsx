import {useState, useEffect, useContext, useCallback} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {ThreeDots} from 'react-loader-spinner'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsContainer,
  VideoDetailsContent,
  PlayerWrapper,
  VideoInfoContainer,
  VideoTitle,
  VideoMetaActionsRow,
  VideoMeta,
  ActionButtonsRow,
  ActionButton,
  Divider,
  ChannelInfoRow,
  ChannelLogo,
  ChannelTextContainer,
  ChannelName,
  SubscriberCount,
  VideoDescription,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const VideoItemDetails = ({match}) => {
  const {isDarkTheme, savedVideosList, addVideo, removeVideo} =
    useContext(NxtWatchContext)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videoDetails, setVideoDetails] = useState(null)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const {id} = match.params
  const isSaved = savedVideosList.some(video => video.id === id)

  const fetchVideoDetails = useCallback(async () => {
    setApiStatus(apiStatusConstants.loading)

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        const video = data.video_details

        const formattedVideo = {
          id: video.id,
          title: video.title,
          videoUrl: video.video_url,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
          publishedAt: video.published_at,
          description: video.description,
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
            subscriberCount: video.channel.subscriber_count,
          },
        }

        setVideoDetails(formattedVideo)
        setApiStatus(apiStatusConstants.success)
      } else {
        setApiStatus(apiStatusConstants.failure)
      }
    } catch {
      setApiStatus(apiStatusConstants.failure)
    }
  }, [id])

  useEffect(() => {
    fetchVideoDetails()
  }, [fetchVideoDetails])

  const onClickLike = () => {
    setIsLiked(prev => !prev)
    setIsDisliked(false)
  }

  const onClickDislike = () => {
    setIsDisliked(prev => !prev)
    setIsLiked(false)
  }

  const onClickSave = () => {
    if (isSaved) {
      removeVideo(videoDetails.id)
    } else {
      addVideo(videoDetails)
    }
  }

  const renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <ThreeDots color="#4f46e5" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  const renderFailureView = () => {
    const failureImgUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <FailureImage src={failureImgUrl} alt="failure view" />
        <FailureHeading isDark={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription isDark={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <RetryButton type="button" onClick={fetchVideoDetails}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  const renderVideoDetailsView = () => {
    const {title, videoUrl, viewCount, publishedAt, description, channel} =
      videoDetails

    return (
      <>
        <PlayerWrapper>
          <ReactPlayer url={videoUrl} width="100%" controls />
        </PlayerWrapper>

        <VideoInfoContainer>
          <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>

          <VideoMetaActionsRow>
            <VideoMeta isDark={isDarkTheme}>
              {viewCount} views • {publishedAt}
            </VideoMeta>

            <ActionButtonsRow>
              <ActionButton
                type="button"
                isActive={isLiked}
                onClick={onClickLike}
              >
                <AiOutlineLike />
                Like
              </ActionButton>

              <ActionButton
                type="button"
                isActive={isDisliked}
                onClick={onClickDislike}
              >
                <AiOutlineDislike />
                Dislike
              </ActionButton>

              <ActionButton
                type="button"
                isActive={isSaved}
                onClick={onClickSave}
              >
                {isSaved ? <MdPlaylistAddCheck /> : <MdPlaylistAdd />}
                {isSaved ? 'Saved' : 'Save'}
              </ActionButton>
            </ActionButtonsRow>
          </VideoMetaActionsRow>

          <Divider isDark={isDarkTheme} />

          <ChannelInfoRow>
            <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
            <ChannelTextContainer>
              <ChannelName isDark={isDarkTheme}>{channel.name}</ChannelName>
              <SubscriberCount isDark={isDarkTheme}>
                {channel.subscriberCount} subscribers
              </SubscriberCount>
            </ChannelTextContainer>
          </ChannelInfoRow>

          <VideoDescription isDark={isDarkTheme}>{description}</VideoDescription>
        </VideoInfoContainer>
      </>
    )
  }

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return renderLoader()
      case apiStatusConstants.success:
        return renderVideoDetailsView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <VideoDetailsContainer
        data-testid="videoItemDetails"
        isDark={isDarkTheme}
      >
        <Sidebar />
        <VideoDetailsContent>{renderContent()}</VideoDetailsContent>
      </VideoDetailsContainer>
    </>
  )
}

export default VideoItemDetails
