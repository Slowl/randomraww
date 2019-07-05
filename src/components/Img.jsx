import React from 'react'
import styled from 'styled-components'

const CustomImg = styled.img`
  max-width: 100%;
  max-height: 60vh;
`

const Img = ({ src }) => {
  return (
    <CustomImg key={src} src={src} alt="alt" />
  )
}

export default Img
