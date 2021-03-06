import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Viewer from './components/Viewer'
import NavRequest from './components/NavRequest'

const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  color: white;
`
const Overlay = styled.div`
  position:absolute;
  width: 100%;
  height: ${props => props.SidebarOpen ? "100vh" : "0" };
  transition: .5s;
`

const App = () => {

  const [data, setData] = useState('')
  const [item, setItem] = useState('')
  const [reqStatus, changeStatus] = useState(false)
  const [type, setType] = useState('top')
  const [date, setDate] = useState('day')
  const [limit, setLimit] = useState(100)
  const [toggleStatus, changeToggle] = useState(false)

  const Request = () => {
        changeStatus(true)
        fetch(`https://cors-anywhere.herokuapp.com/https://api.reddit.com/r/aww/top.json?sort=${type}&limit=${limit}&t=${date}&show=all&raw_json=1`)
        .then(res => {
          return res.json()
        }
      ).then(redditData => {
          setData(redditData.data.children)
          changeStatus(false)
        }
      )
  }

  const Next = () => {
    const index = Math.floor(data.length - 1)
    if (data && data.length > 0){
      const oneItem = data[index]
      setItem(oneItem)
      setData(data.slice(0, index))
    }
  }

  const Refresh = () => {
    Request()
    changeToggle(false)
  }

  const changeType = e => {
    const value = e.currentTarget.textContent.toLowerCase()
    setType(value)
  }

  const changeDate = e => {
    const value = e.currentTarget.textContent.toLowerCase()
    setDate(value)
  }

  const changeLimit = e => {
    const value = e.currentTarget.textContent.toLowerCase()
    setLimit(value)
  }

  return (
    <div>
      <Overlay onClick={() => changeToggle(false)} SidebarOpen={toggleStatus}/>
      <AppContainer>
          <SideBar
            type={(e) => changeType(e)}
            date={(e) => changeDate(e)}
            limit={(e) => changeLimit(e)}
            toggleStatus={toggleStatus}
            refresh={() => Refresh()}
            close={() => changeToggle(false)}
            />
          <Navbar toggle={() => changeToggle(!toggleStatus)}/>
          <Title title={item && item.data.title} />
          <Viewer rawData={item} />
          <NavRequest
            request={() => Request()}
            next={() => Next()}
            length={data.length}
            total={limit}
            status={reqStatus} />
      </AppContainer>
    </div>

  )
}

export default App;
