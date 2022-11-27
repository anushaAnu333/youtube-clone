import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	gap: 24px;
`;

const Content = styled.div`
	flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
	flex: 2;
`;
const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
	font-weight: 500;
`;

const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 14px;
`;

const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;
const VideoPage = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width="100%"
						height="720"
						src="https://www.youtube.com/watch?v=k3Vfj-e1Ma4"
						title="Youtube video player"
						frameBorder="0"
						allow="accelerometer;autoplay;clipboard-wrire;encrypte-media;gyroscope;picture-in-picture"
						allowFullScreen
					></iframe>
				</VideoWrapper>
				<Title>Test video</Title>
				<Details>
					<Info>100000000 views . jan 22,2022</Info>
					<Buttons>
            <Button>
              <ThumbUpAltOutlined/>123
            </Button>
						<Button>
							<ThumbDownOffAltOutlined />
						</Button>
            <Button>
              <ReplyOutlined/>
            </Button>
            <Button>
              <AddTaskOutlined/>
            </Button>
					</Buttons>
				</Details>
			</Content>
			<Recommendation></Recommendation>
		</Container>
	);
};

export default VideoPage;
