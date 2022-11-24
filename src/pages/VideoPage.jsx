import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
  
  display: flex;
  gap:24px;
`

const Content=styled.div`
  
  flex:5;
  border: 1px solid red;
`

const Recommentaion=styled.div`
flex:2
`

const VideoWrapper=styled.div`


`
const VideoPage = () => {
  return (
    <Container>
    <Content>Content</Content>
    <Recommentaion>Recomentation</Recommentaion>
    
    </Container>
  )
}

export default VideoPage