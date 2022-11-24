import React from "react";
import styled from "styled-components";
import YoutubeLogo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { HorizontalRule } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
const Container = styled.div`
	flex: 1;
	background-color:${({theme})=>theme.bgLighter};
	height: 135vh;
	color:${({theme})=>theme.text};
	font-size: 14px;
	position: sticky;
	top: 0;
	
`;
//here menu become 1 units

const Wrapper = styled.div`
	padding: 5px 30px;

`;
const Img = styled.img`
	height: 25px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	margin-bottom: 25px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	cursor: pointer;
	padding: 5px 0px;


`;
//padding top and bottom 7.5px and left and right is 0px

const HorizondalLine=styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`
const Login=styled.div`
font-size: 12px;
`
const Button=styled.button`
padding: 5px 15px;
background-color:transparent;
border:1px solid blue;
color:blue;
border-radius:3px;
font-weight:500;
margin-top: 10px;
cursor: pointer;
display: flex;
	align-items: center;
	gap: 5px;
`

const Title=styled.h2`
font-size: 14px;
font-weight: 500;
color:#aaaaaa;
margin-bottom: 20px;

`
// get props in here
const Menu = ({darkMode,setDarkMode}) => {
	
	return (
		<Container>
			<Wrapper>

				<Link to="/" style={{textDecoration:"none",color:"inherit"}}>
				<Logo>
					<Img src={YoutubeLogo} />
					YouTube
				</Logo>

				</Link>
				<Item>
					<HomeIcon />
					Home
				</Item>
				<Item>
					<ExploreIcon />
					Explore
				</Item>
				<Item>
					<SubscriptionsIcon />
					Subscriptions
				</Item>

				<HorizondalLine/>
				<Item>
					<VideoLibraryIcon />
					Library
				</Item>
				<Item>
					<HistoryIcon/>
					History
				</Item>
				<Item>
					<LibraryMusicIcon/>
					Music
				</Item>
				<HorizondalLine/>
				<Login>
					Sign in to like vidoes,comment, and subscribe.
					<Button>
						<AccountCircleIcon/>
						SIGN IN
					</Button>
				</Login>
				<HorizondalLine/>
				<Title>
					BEST OF YOUTUBE
				</Title>
				<Item>
					<SportsBasketballIcon/>
					Sports
				</Item>
				<Item>
					<SportsEsportsIcon/>
					Gaming
				</Item>
				<Item>
					<MovieCreationIcon/>
					Moviess
				</Item>
				<Item>
				<ArticleIcon/>
				News
				</Item>
				<Item>
					<LiveTvIcon/>
					Live
				</Item>
				<HorizondalLine/>
				<Item>
					<SettingsIcon/>
					Settings
				</Item>
				<Item>
					<FlagIcon/>
					Report
				</Item>
				<Item>
					<HelpIcon/>
					Help
				</Item>
				<Item onClick={()=>{setDarkMode(!darkMode)}}>
					<SettingsBrightnessIcon/>
					Light Mode
				</Item>
			</Wrapper>
		</Container>
	);
};

export default Menu;
