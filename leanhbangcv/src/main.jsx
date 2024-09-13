import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SocialHeader from "./layouts/header/SocialHeader.jsx";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<>
		{/* <div style={{ marginBottom: "5rem" }}> */}
		<SocialHeader />
		{/* </div> */}
		<App />
	</>,
	// </StrictMode>,
);
