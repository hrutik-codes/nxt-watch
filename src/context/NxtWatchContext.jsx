import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  isBannerVisible: true,       // ← add this
  toggleTheme: () => {},
  addVideo: () => {},
  removeVideo: () => {},
  closeBanner: () => {},       // ← add this
})

export default NxtWatchContext