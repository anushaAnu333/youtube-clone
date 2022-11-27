import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container=styled.div`
width:360px;
margin-bottom: 45px;
cursor: pointer;

`

const Details=styled.div`
    
    display: flex;
    margin-top: 16px;
    gap:12px;
`

const Image=styled.img`
    
    width:100%;
    height:202px;
    background-color: #999;
`

const ChannelImage=styled.img`

width: 36px;
height: 36px;
border-radius:50% ;
background-color: #999;
`

const Text=styled.div`

`

const Title=styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme})=>theme.text};

margin: auto;
`
const ChannelText=styled.h2`
    font-size: 14px;
    color: ${({theme})=>theme.textSoft};
    margin:4px 0px;
`
const Info=styled.div`
    font-size: 14px;
    color:${({theme})=>theme.textSoft};
`
const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>

    <Container>
        <Image src="https://images.unsplash.com/photo-1669173034257-aabc8ebb8f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <Details>
            <ChannelImage src="https://images.unsplash.com/photo-1669173034860-eca2e1ee62b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <Text>
                <Title>Anusha</Title>
                <ChannelText>ANUSHA'S</ChannelText>
                <Info>VIEWS</Info>
            </Text>
        </Details>
    
    </Container>
    </Link>
  )
}

export default Card