import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 32px;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 280px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin: 0 0 12px 0;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const NotFoundDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  margin: 0;
  line-height: 1.6;
  max-width: 420px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
