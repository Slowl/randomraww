import React from 'react'
import styled from 'styled-components'

const CustomVideo = styled.video`
  max-width: 100%;
  max-height: 60vh;
`

const Video = ({ width, height, src }) => {
  return (
    <div>
      <CustomVideo
        key={src}
        width={width}
        height={height}
        controls
        preload="true"
        autoPlay="autoplay"
        loop="loop">
       <source src={src} type="video/mp4" />
      </CustomVideo>
    </div>
  )
}

export default Video
