import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 60%;
  padding: 2em;
  background-color: ${props => props.request ? "#874444" : "#448755"};
  text-align: center;
  margin: auto;
`

const Requestor = ({ onClick, request }) => {

  return (
    <Button request={request} onClick={onClick}>
      yes
    </Button>
  )
}

export default Requestor
