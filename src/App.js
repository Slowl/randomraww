import React, { useState } from 'react'
import styled from 'styled-components'
import Viewer from './components/Viewer'
import Requestor from './components/Requestor'

const AppContainer = styled.div`
  color: white;
`

const App = () => {

  const [data, setData] = useState('')
  const [item, setItem] = useState('')

  const Request = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.reddit.com/r/aww/top.json?sort=top&limit=100`)
        .then(res => {
          return res.json()
        }
      ).then(redditData => {
          setData(redditData.data.children)
          console.log("ready")
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
      <Viewer rawData={item} />
      <Requestor onClick={() => Request()} request />
      <Requestor onClick={() => Next()} />
    </AppContainer>
  )
}

export default App;
