import React from 'react'
import styled from 'styled-components'
import Requestor from './Requestor'
import { FiRefreshCcw } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
  font-size: 1.15em;
  font-weight: 400;
  letter-spacing: 1px;
`

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 5%;
  max-width: 10%;
  padding: 1.2em 2em;
  background-color: #252525;
  font-size: .8em;
  border-radius: 50px;
  letter-spacing: 2px;
  background-image: -webkit-linear-gradient(160deg, #282828 50%, #383838 50%);
`

const NavRequest = ({ next, request, length, status }) => {

  const Sync = Requestor(FiRefreshCcw)
  const Next = Requestor(FiPlay)
  return (
    <NavContainer>

      <Sync onClick={request} status rotator={status} request> Sync </Sync>
      <Counter>
        <div>{length}</div>  <div>100</div>
      </Counter>
      <Next onClick={next}> Next </Next>
    </NavContainer>
  )
}

export default NavRequest
