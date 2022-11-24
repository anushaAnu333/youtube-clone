import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import VideoPage from "../pages/VideoPage";

const Router = () => {
	return (
		<div>
			<Routes>
                <Route path="/">
				<Route index element={<HomePage/>}></Route>
				<Route path="video">
					<Route path=":id" element={<VideoPage/>}></Route>
				</Route>
                </Route>
			</Routes>
		</div>
	);
};

export default Router;
