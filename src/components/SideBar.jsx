import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import { FiCheck, FiX } from 'react-icons/fi'

const NavContainer = styled.div`
  background-color: #171717;
  position: absolute;
  width: 300px;
  height: 100vh;
  margin-left: ${props => props.isToggled ? '0px' : '-420px'};
  z-index: 999;
  transition: ease .5s;
`

const FilterSection = styled.div`
  margin-top: 7.5em;
  span {
    display: block;
    text-align: center;
    font-size: 1.5em;
    font-weight: 300;
    padding: 1em;
    margin-top: 2em;
  }
`

const FilterContainer = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 25px;
  background-color:#383838;
  display: flex;
  justify-content: space-around;
  text-align:center;
  font-size: .9em;
  letter-spacing: 1px;

  div {
    :first-child{
      border-radius: 25px 0 0 25px;
    }

    :last-child{
      border-radius: 0px 25px 25px 0;
    }
  }
`

const Refresh = styled.div`
  position:absolute;
  width: 100%;
  bottom: 0;
  color: #afafaf;
  background-color: #448755;
  opacity: .8;
  padding: .7em 0;
  text-align: center;
  font-size: 2.2em;
  cursor: pointer;
  transition: .4s;

  :hover {
    opacity: 1;
    color: #ffffff;
  }
`

const Close = styled.div`
  position:absolute;
  width: 100%;
  top: 0;
  color: #cfcfcf;
  background-color: #1d1d1d;
  padding: .2em 0 .1em 0;
  text-align: center;
  font-size: 2em;
  cursor: pointer;
  transition: .2s;

  :hover {
    color: #934545;
  }
`

const SideBar = ({ type, date, limit, toggleStatus, refresh, close }) => {

  return (
    <NavContainer isToggled={toggleStatus}>
      <Close onClick={close}><FiX /></Close>
      <FilterSection>
        <span>Sort by  </span>
        <FilterContainer>
              <Filter onClick={type} value="Top" />
              <Filter onClick={type} value="Hot" />
              <Filter onClick={type} value="New" />
        </FilterContainer>

        <span>Select from  </span>
        <FilterContainer>
              <Filter onClick={date} value="Day" />
              <Filter onClick={date} value="Week" />
              <Filter onClick={date} value="Month" />
              <Filter onClick={date} value="Year" />
        </FilterContainer>

        <span>Posts  </span>
        <FilterContainer>
             <Filter onClick={limit} value="25" />
             <Filter onClick={limit} value="50" />
             <Filter onClick={limit} value="100" />
        </FilterContainer>
      </FilterSection>

      <Refresh onClick={refresh}><FiCheck /></Refresh>
    </NavContainer>
  )
}

export default SideBar
