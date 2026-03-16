import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [savedVideosList, setSavedVideosList] = useState([])
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  const addVideo = videoData => {
    const isAlreadySaved = savedVideosList.some(
      video => video.id === videoData.id,
    )
    if (!isAlreadySaved) {
      setSavedVideosList(prev => [...prev, videoData])
    }
  }

  const removeVideo = videoId => {
    setSavedVideosList(prev => prev.filter(video => video.id !== videoId))
  }

  const closeBanner = () => {
    setIsBannerVisible(false)
  }

  return (
    <NxtWatchContext.Provider
      value={{
        isDarkTheme,
        savedVideosList,
        isBannerVisible,
        toggleTheme,
        addVideo,
        removeVideo,
        closeBanner,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute
          exact
          path="/videos/:id"
          component={VideoItemDetails}
        />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </NxtWatchContext.Provider>
  )
}

export default App
