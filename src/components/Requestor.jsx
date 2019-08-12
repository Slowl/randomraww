import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 7%;
  max-width: 30%;
  padding: .8em 1.5em;
  border-radius: 50px;
  color: white;
  background-color: ${props => props.request ? "#448755" : "#445987"};
  text-align: center;
  margin: auto;
  cursor: pointer;
  transition: .3s;

  .icon {
    font-size: 1.4em;
    transition: .5s;
    animation: ${props => props.loading && "loading .5s ease infinite;"};

    @keyframes loading {
      0% {transform: rotate(-0deg)}
      100% {transform: rotate(-180deg)}
    }
  }

  :hover {
    .icon {
      transform: ${props => props.request ? "rotate(-180deg)" : "translateX(6px)"};
    }
  }

  :active {
    .icon {
      transform: ${props => props.request ? "rotate(0deg)" : "translateX(0px)"};
    }
  }
`

const Requestor = (Icons) => ({ onClick, request, rotator, children }) => {
  return (
    <Button request={request} onClick={onClick} loading={rotator}>
      {children} <Icons className="icon" />
    </Button>
  )
}

export default Requestor
