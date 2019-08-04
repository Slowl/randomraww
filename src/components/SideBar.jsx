import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const NavContainer = styled.div`
  background-color: #171717;
  position: absolute;
  width: 300px;
  height: 100vh;
  margin-left: ${props => props.isToggled ? '0px' : '-420px'};
  transition: ease .5s;

  span {
    display: block;
    text-align: center;
    font-size: 1.5em;
    font-weight: 300;
    padding: 1em;
  }
`

const FilterSection = styled.div`
  margin: 3em 0;
`

const FilterContainer = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 25px;
  background-color:#383838;
  display: flex;
  justify-content: space-around;
  text-align:center;

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
  background-color: #874444;
  opacity: .8;
  padding: 1.5em 0;
  text-align: center;
  font-size: 1.2em;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  transition: .5s;

  :hover {
    opacity: 1;
  }
`

const SideBar = ({ type, date, limit, toggleStatus, refresh }) => {

  return (
    <NavContainer isToggled={toggleStatus}>

      <FilterSection>
        <span>Sort by  </span>
        <FilterContainer>
              <Filter onClick={type} value="Top" />
              <Filter onClick={type} value="Hot" />
              <Filter onClick={type} value="New" />
        </FilterContainer>
      </FilterSection>

      <FilterSection>
        <span>Select from  </span>
        <FilterContainer>
              <Filter onClick={date} value="Day" />
              <Filter onClick={date} value="Week" />
              <Filter onClick={date} value="Month" />
              <Filter onClick={date} value="Year" />
        </FilterContainer>
      </FilterSection>

      <FilterSection>
        <span>Posts  </span>
        <FilterContainer>
             <Filter onClick={limit} value="25" />
             <Filter onClick={limit} value="50" />
             <Filter onClick={limit} value="100" />
        </FilterContainer>
      </FilterSection>

      <Refresh onClick={refresh}>Apply</Refresh>
    </NavContainer>
  )
}

export default SideBar
