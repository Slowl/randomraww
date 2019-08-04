import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 100%;
  padding: 1em;
`

const Filter = ({ value, onClick }) => {
  return (
    <Button onClick={onClick}>
      {value}
    </Button>
  )
}

export default Filter
