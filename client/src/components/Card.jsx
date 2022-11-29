// import React from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'


// const Container=styled.div`
// width:360px;
// margin-bottom: 45px;
// cursor: pointer;

// `

// const Details=styled.div`
    
//     display: flex;
//     margin-top: 16px;
//     gap:12px;
// `

// const Image=styled.img`
    
//     width:100%;
//     height:202px;
//     background-color: #999;
// `

// const ChannelImage=styled.img`

// width: 36px;
// height: 36px;
// border-radius:50% ;
// background-color: #999;
// `

// const Text=styled.div`

// `

// const Title=styled.h1`
// font-size: 16px;
// font-weight: 500;
// color: ${({theme})=>theme.text};

// margin: auto;
// `
// const ChannelText=styled.h2`
//     font-size: 14px;
//     color: ${({theme})=>theme.textSoft};
//     margin:4px 0px;
// `
// const Info=styled.div`
//     font-size: 14px;
//     color:${({theme})=>theme.textSoft};
// `
// const Card = ({type}) => {
//   return (
//     <Link to="/video/test" style={{textDecoration:"none"}}>

//     <Container type={type}>
//         <Image src="https://images.unsplash.com/photo-1669173034257-aabc8ebb8f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//         <Details>
//             <ChannelImage src="https://images.unsplash.com/photo-1669173034860-eca2e1ee62b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//             <Text>
//                 <Title>Anusha</Title>
//                 <ChannelText>ANUSHA'S</ChannelText>
//                 <Info>VIEWS</Info>
//             </Text>
//         </Details>
    
//     </Container>
//     </Link>
//   )
// }

// export default Card


import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://images.unsplash.com/photo-1669173034257-aabc8ebb8f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://images.unsplash.com/photo-1669173034860-eca2e1ee62b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;