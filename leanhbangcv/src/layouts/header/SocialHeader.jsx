// App.js
import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
	FacebookOutlined,
	TwitterOutlined,
	LinkedinOutlined,
	GooglePlusOutlined,
} from "@ant-design/icons";
import "./SocialHeader.css";

const { Header } = Layout;
const { Title } = Typography;

const SocialHeader = () => {
	return (
		<Header className="social-header">
			{/* Logo */}
			<div className="logo">
				<Title level={3} className="logo-title">
					BangLe
				</Title>
			</div>

			{/* Navigation Links */}
			<Menu theme="light" mode="horizontal" className="nav-menu">
				<Menu.Item key="home">
					<a href="#home" className="nav-link">
						Home
					</a>
				</Menu.Item>
				<Menu.Item key="projects">
					<a href="#projects" className="nav-link">
						Projects
					</a>
				</Menu.Item>
				<Menu.Item key="charity">
					<a href="#charity" className="nav-link">
						Charity & Community
					</a>
				</Menu.Item>
				<Menu.Item key="contact">
					<a href="#contact" className="nav-link">
						Contact
					</a>
				</Menu.Item>
			</Menu>

			{/* Social Media Links */}
			<Menu theme="light" mode="horizontal" className="social-menu">
				<Menu.Item key="1">
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TwitterOutlined className="social-icon" />
					</a>
				</Menu.Item>
				<Menu.Item key="2">
					<a
						href="https://www.facebook.com/profile.php?id=100010204443486"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FacebookOutlined className="social-icon" />
					</a>
				</Menu.Item>
				<Menu.Item key="3">
					<a
						href="https://plus.google.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GooglePlusOutlined className="social-icon" />
					</a>
				</Menu.Item>
				<Menu.Item key="4">
					<a
						href="https://www.linkedin.com/in/b%E1%BA%B1ng-l%C3%AA-anh-4728b7231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinOutlined className="social-icon" />
					</a>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default SocialHeader;
