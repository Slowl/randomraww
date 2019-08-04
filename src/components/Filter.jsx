import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 100%;
  padding: 1em;
  cursor: pointer;
  transition: .3s;

  :hover {
    box-shadow: inset 0px 0px 20px rgba(0,0,0,.3);
  }
`

const Filter = ({ value, onClick }) => {
  return (
    <Button onClick={onClick}>
      {value}
    </Button>
  )
}

export default Filter
