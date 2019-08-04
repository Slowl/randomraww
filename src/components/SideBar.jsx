import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const NavContainer = styled.div`
  background-color: #171717;
  position: absolute;
  width: 400px;
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

const SideBar = ({ type, date, limit, toggleStatus }) => {

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

    </NavContainer>
  )
}

export default SideBar
