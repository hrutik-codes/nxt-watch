import styled from 'styled-components'

// ✅ New
export const VideoDetailsContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  overflow: hidden;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`

export const PlayerWrapper = styled.div`
  width: 100%;
  padding: 24px 24px 0 24px;

  @media screen and (min-width: 768px) {
    padding: 32px 48px 0 48px;
  }
`

export const VideoInfoContainer = styled.div`
  padding: 16px 24px;

  @media screen and (min-width: 768px) {
    padding: 24px 48px;
  }
`

/* TC 134 fix — styled.p not styled.h1 */
export const VideoTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 12px 0;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const VideoMetaActionsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoMeta = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0;
`

export const ActionButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ActionButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;

  svg {
    font-size: 18px;
  }
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${props => (props.isDark ? '#383838' : '#e2e8f0')};
  margin: 16px 0;
`

export const ChannelInfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`

export const ChannelLogo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const ChannelTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 4px 0;
`

export const SubscriberCount = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  line-height: 1.7;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  flex: 1;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 280px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 360px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 12px 0;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0 0 24px 0;
  max-width: 420px;
  line-height: 1.6;
`

export const RetryButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  cursor: pointer;
`
