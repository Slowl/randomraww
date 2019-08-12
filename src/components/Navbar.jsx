import React from 'react'
import styled from 'styled-components'
import { FiSliders, FiGithub } from 'react-icons/fi'

const NavbarContainer = styled.div`
  background-color: #171717;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  display: flex;
  padding: 1em;
  margin-left: 1em;
  font-size: 1.5em;
  cursor: pointer;
  color: #bbbbbb;
  transition: .3s;

  :hover {
    color: #ffffff;

    :after {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  :after {
    z-index: 0;
    display: block;
    content:"Customize the results";
    font-size: .7em;
    padding: 0 1em;
    margin-left: .5em;
    letter-spacing: 1px;
    transform: translateX(-20px);
    opacity: 0;
    transition: .3s;
  }

  @media screen and (max-width: 45em) {
    color: #ffffff;

    :after {
      display: none;
    }
  }
`

const Link = styled.a`
  display: inline-block;
  padding: 1em;
  font-size: ${props => props.text ? "1.3em" : "1.5em"};
  cursor: pointer;
  color: #bbbbbb;
  text-decoration: none;
  transition: .3s;

  :after {
    display: block;
    content:"";
    background-color: white;
    width: 0px;
    height: 1px;
    margin: auto;
    transition: .4s ;
  }

  :hover {
    color: #ffffff;

    :after {
      display: block;
      content:"";
      background-color: #171717;
      width: ${props => props.text ? "40%" : "0%"};
      height: 1px;
      margin: auto;
    }
  }

  :focus {
    outline: 0;
  }

  @media screen and (max-width: 45em) {
    color: #ffffff;

    :after {
      display: none;
    }
  }
`

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <div>
        <Button onClick={toggle}> <FiSliders /> </Button>
      </div>
      <div>
        <Link href="https://www.hedik.fr/" target="_blank" text>About me</Link>
        <Link href="https://github.com/Slowl/randomraww" target="_blank" > <FiGithub /> </Link>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
