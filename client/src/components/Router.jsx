import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import VideoPage from "../pages/VideoPage";

const Router = () => {
	return (
		<div>
			<Routes>
			<Route path="/">
                  <Route index element={<HomePage type="random" />} />
                  <Route path="trends" element={<HomePage type="trend" />} />
                  <Route path="subscriptions" element={<HomePage type="sub" />} />
                  <Route path="search" element={<Search />} />
                  <Route
                    path="signin"
                    element={currentUser ? <Home /> : <SignIn />}
                  />
                  <Route path="video">
                    <Route path=":id" element={<VideoPage />} />
                  </Route>
                </Route>
			</Routes>
		</div>
	);
};

export default Router;
