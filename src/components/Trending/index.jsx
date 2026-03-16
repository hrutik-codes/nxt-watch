import {useState, useEffect, useContext, useCallback} from 'react'
import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingContainer,
  TrendingContent,
  PageHeaderContainer,
  PageIconWrapper,
  PageTitle,
  VideosList,
  VideoItem,
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

const Trending = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videosList, setVideosList] = useState([])

  const fetchTrendingVideos = useCallback(async () => {
    setApiStatus(apiStatusConstants.loading)

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        const formattedVideos = data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
          publishedAt: video.published_at,
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
        }))

        setVideosList(formattedVideos)
        setApiStatus(apiStatusConstants.success)
      } else {
        setApiStatus(apiStatusConstants.failure)
      }
    } catch {
      setApiStatus(apiStatusConstants.failure)
    }
  }, [])

  useEffect(() => {
    fetchTrendingVideos()
  }, [fetchTrendingVideos])

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
        <RetryButton type="button" onClick={fetchTrendingVideos}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  const renderVideosView = () => (
    <VideosList>
      {videosList.map(video => (
        <VideoItem key={video.id}>
          <TrendingVideoCard videoData={video} />
        </VideoItem>
      ))}
    </VideosList>
  )

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return renderLoader()
      case apiStatusConstants.success:
        return renderVideosView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <TrendingContainer data-testid="trending" isDark={isDarkTheme}>
        <Sidebar />
        <TrendingContent>
          <PageHeaderContainer isDark={isDarkTheme}>
            <PageIconWrapper isDark={isDarkTheme}>
              <HiFire />
            </PageIconWrapper>
            <PageTitle isDark={isDarkTheme}>Trending</PageTitle>
          </PageHeaderContainer>
          {renderContent()}
        </TrendingContent>
      </TrendingContainer>
    </>
  )
}

export default Trending
