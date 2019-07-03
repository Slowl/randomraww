import React from 'react'
import styled from 'styled-components'

const ViewerContainer = styled.div`
  width: 70%;
  margin: auto;
  background-color: #282828;

  img {
    width: 100%;
    height: 100%;
  }
`

const Viewer = ({ rawData }) => {

  rawData && console.log(rawData.data.url)
  // check data sendend in the props and fix gifs/vids display

  return (
    <ViewerContainer>
      <img src={rawData && rawData.data.url} alt="random reddit content" />
    </ViewerContainer>
  )
}

export default Viewer
