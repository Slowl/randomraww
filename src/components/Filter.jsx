import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  color: white;
  background-color: #2b9ce4;
  padding: .3em .8em;
  margin: 0 .2em;
  text-transform: capitalize;
  border-radius: 4px;
  cursor: pointer;

  :target {
    background-color: #5cbfff;
    color: red;
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
