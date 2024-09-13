import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import paths from "./database/path";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={paths.home} element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
