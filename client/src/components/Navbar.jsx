import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
const Container=styled.div`
position: sticky;
top:0;
background-color: ${({theme})=>theme.bgLighter};
height: 55px;
`
const Wrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`

const Search=styled.div`
  position: absolute;
  width: 40%;
  left:0px;
  right:0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius:3px;


  `
const Input=styled.input`
border: none;
/* to avoid white color inside the input box */
background-color: transparent;
width:100%;
outline: none;


`

const Button=styled.button`
padding: 5px 15px;
background-color:transparent;
border:1px solid blue;
color:blue;
border-radius:3px;
font-weight:500;

cursor: pointer;
display: flex;
	align-items: center;
	gap: 5px;
`
const Navbar = () => {
  return (
    <Container>

      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchIcon/>
        </Search>
        <Button>
      	<AccountCircleIcon/>
        Sign In
        </Button>
      </Wrapper>


    </Container>
  )
}

export default Navbar            