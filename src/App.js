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

const App = () => {

  const [data, setData] = useState('')
  const [item, setItem] = useState('')
  const [reqStatus, changeStatus] = useState(false)
  const [type, setType] = useState('top')
  const [date, setDate] = useState('day')
  const [limit, setLimit] = useState(100)
  const [toggleStatus, changeToggle] = useState(true)

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
    const random = Math.floor(Math.random() * data.length)
    if (data && data.length > 0){
      const oneItem = data[random]
      setItem(oneItem)
      data.splice(random,1)
    }
  }

  const changeType = e => {
    const value = e.currentTarget.textContent
    setType(value.toLowerCase())
  }

  const changeDate = e => {
    const value = e.currentTarget.textContent
    setDate(value.toLowerCase())
  }

  const changeLimit = e => {
    const value = e.currentTarget.textContent
    setLimit(value.toLowerCase())
  }

  return (
    <AppContainer>
      <SideBar
        type={(e) => changeType(e)}
        date={(e) => changeDate(e)}
        limit={(e) => changeLimit(e)}
        toggleStatus={toggleStatus}
        />
      <Navbar toggle={() => changeToggle(!toggleStatus)}/>
      <Title title={item && item.data.title} />
      <Viewer rawData={item} />
      <NavRequest
        request={() => Request()}
        next={() => Next()}
        length={data.length}
        status={reqStatus} />
    </AppContainer>
  )
}

export default App;
