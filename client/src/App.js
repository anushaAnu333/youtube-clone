import { Route } from "@mui/icons-material";
import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
	display: flex;
`;

const Main = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bg};
	color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
padding:22px 26px;
`;

function App() {
	//theme setting

	const [darkMode, setDarkMode] = useState(true);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
			
					{/* pass darkMode and setDarkMode as prop */}
					<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
					<Main>
						<Navbar />

						<Wrapper>
							<Router/>
						</Wrapper>
					</Main>
				
			</Container>
		</ThemeProvider>
	);
}

export default App;
