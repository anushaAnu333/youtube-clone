import React from "react";
import styled from "styled-components";
import YoutubeLogo from '../img/logo.png'

const Container = styled.div`
	flex: 1;
	background-color: black;
	height: 100vh;
	color: white;
    font-size:14px;
`;
//here menu become 1 units

const Wrapper=styled.div`
    
    padding: 18px 26px;
`
const Img=styled.img`
    
    height: 25px;

`

const Logo=styled.div`
    
    display: flex;
    align-items: center;
    gap:5px;
    font-weight:bold;
    margin-bottom:25px;

`

const Item=styled.div`
    display: flex;
    align-items: center;
    gap:20px;
    cursor:pointer;
`
const Menu = () => {
	return <Container>
        <Wrapper>

            <Logo>
                <Img src={YoutubeLogo}/>
                YouTube
            </Logo>
        </Wrapper>
    </Container>;
};

export default Menu;
