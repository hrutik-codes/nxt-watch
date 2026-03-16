import {useState, useEffect, useContext, useCallback} from 'react'
import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeContainer,
  HomeContent,
  BannerContainer,
  BannerContent,
  BannerLogo,
  BannerTagline,
  GetItNowButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosGrid,
  VideoItem,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const {isDarkTheme, isBannerVisible, closeBanner} = useContext(NxtWatchContext)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videosList, setVideosList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const fetchVideos = useCallback(async () => {
    setApiStatus(apiStatusConstants.loading)

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
  }, [searchInput])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])


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
        <RetryButton type="button" onClick={fetchVideos}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  const renderNoVideosView = () => (
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosHeading isDark={isDarkTheme}>
        No Search Results Found
      </NoVideosHeading>
      <NoVideosDescription isDark={isDarkTheme}>
        Try different key words or remove search filter
      </NoVideosDescription>
      <RetryButton type="button" onClick={fetchVideos}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  const renderVideosView = () => {
    if (videosList.length === 0) return renderNoVideosView()

    return (
      <VideosGrid>
        {videosList.map(video => (
          <VideoItem key={video.id}>
            <HomeVideoCard videoData={video} />
          </VideoItem>
        ))}
      </VideosGrid>
    )
  }

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
      <HomeContainer data-testid="home" isDark={isDarkTheme}>
        <Sidebar />
        <HomeContent>
          {/* Banner — conditional render, not display:none */}
          {isBannerVisible && (
            <BannerContainer data-testid="banner">
              <BannerContent>
                <BannerLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerTagline>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerTagline>
                <GetItNowButton type="button">GET IT NOW</GetItNowButton>
              </BannerContent>
              <BannerCloseButton
                data-testid="close"
                type="button"
                isDark={isDarkTheme}
                onClick={closeBanner}          // ← was setIsBannerVisible(false)
              >
                <AiOutlineClose />
              </BannerCloseButton>
            </BannerContainer>
          )}

          {/* Search Bar — type="search" for searchbox role */}
          <SearchContainer isDark={isDarkTheme}>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              isDark={isDarkTheme}
            />
            <SearchButton
              data-testid="searchButton"
              type="button"
              isDark={isDarkTheme}
              onClick={fetchVideos}        // ← manual trigger still works
            >
              <AiOutlineSearch />
            </SearchButton>
          </SearchContainer>

          {renderContent()}
        </HomeContent>
      </HomeContainer>
    </>
  )
}

export default Home
