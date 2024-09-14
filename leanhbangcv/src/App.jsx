import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import paths from "./database/path";
import SocialHeader from "./layouts/header/SocialHeader";
import MyProject from "./pages/project/MyProject";
import AppFooter from "./layouts/footer/AppFooter";

const App = () => {
	return (
		<>
			{/* <SocialHeader /> */}

			<BrowserRouter>
				<SocialHeader />
				<Routes>
					<Route path={paths.home} element={<Home />} />
					<Route path={paths.projects} element={<MyProject />} />
				</Routes>
				<AppFooter />
			</BrowserRouter>
		</>
	);
};

export default App;
