import React, { useState } from 'react'
import styled from 'styled-components'
import Viewer from './components/Viewer'
import NavRequest from './components/NavRequest'
import Title from './components/Title'

const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  color: white;
`

const App = () => {

  const [data, setData] = useState('')
  const [item, setItem] = useState('')
  const [reqStatus, changeStatus] = useState(false)

  const Request = () => {
        changeStatus(true)
        fetch(`https://cors-anywhere.herokuapp.com/https://api.reddit.com/r/aww/top.json?sort=top&limit=100&raw_json=1`)
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
    if (data){
      const oneItem = data[random]
      setItem(oneItem)
      data.splice(random,1)
    }
  }

  return (
    <AppContainer>
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
