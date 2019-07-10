import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  max-width: 60%;
  margin: .5em auto 1em;
  padding: 0.7em;
  background-color: #222222;
  border-radius: 50px;
  font-size: 1.4em;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;

  ::first-letter {
    text-transform: uppercase;
  }
`

const Title = ({ title }) => {
  return (
    <span>
      {title && <TitleContainer>{title}</TitleContainer>}
    </span>
  )
}

export default Title
