import React from 'react'
import styled from 'styled-components'
import { FiSliders } from 'react-icons/fi'

const NavbarContainer = styled.div`
  background-color: #171717;
  margin-bottom: 2em;
  display: flex;
  justify-content: flex-end;
`

const Button = styled.div`
  display: inline-block;
  padding: 1em;
  margin-left: 1em;
  font-size: 1.5em;
  cursor: pointer;
  color: #bbbbbb;
  transition: .3s;

  :hover {
    color: #ffffff;
  }
`

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <Button onClick={toggle}> <FiSliders /> </Button>
    </NavbarContainer>
  )
}

export default Navbar
