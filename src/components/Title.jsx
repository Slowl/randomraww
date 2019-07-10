import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  max-width: 60%;
  margin: 1em auto 1em;
  padding: 1em;
  background-color: #3b3b3b;
  border-radius: 50px;
  font-size: 1.4em;
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
