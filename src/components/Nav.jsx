import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const NavContainer = styled.div`
  background-color: #171717;
  padding: 1em;
  margin-bottom: 2em;

  .sorter {
    display: flex;
    justify-content: space-around;
    div {
      display: inline;
    }
    span {
      padding: .3em;
    }
  }
`

const Nav = ({ type, date, limit }) => {
  return (
    <NavContainer>
      <div className="sorter">
        <div>
          <span>Sort by : </span>
            <Filter onClick={type} value="Top" />
            <Filter onClick={type} value="Hot" />
            <Filter onClick={type} value="New" />
        </div>

        <div>
          <span>Select from : </span>
            <Filter onClick={date} value="Day" />
            <Filter onClick={date} value="Week" />
            <Filter onClick={date} value="Month" />
            <Filter onClick={date} value="Year" />
        </div>

        <div>
          <span>Posts : </span>
            <Filter onClick={limit} value="25" />
            <Filter onClick={limit} value="50" />
            <Filter onClick={limit} value="100" />
        </div>

      </div>
    </NavContainer>
  )
}

export default Nav
