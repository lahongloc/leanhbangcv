import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
	MailOutlined,
	PhoneOutlined,
	HomeOutlined,
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter = () => {
	return (
		<Footer
			style={{
				backgroundColor: "black",
				color: "#fff",
				padding: "20px 50px",
				paddingTop: "2rem",
			}}
		>
			<Row justify="space-between">
				{/* Contact Information */}
				<Col xs={24} sm={12} md={6}>
					<Title level={4} style={{ color: "#fff" }}>
						Contact Info
					</Title>
					<Space direction="vertical" size="middle">
						<Text style={{ color: "#fff" }}>
							<MailOutlined /> Email: example@example.com
						</Text>
						<Text style={{ color: "#fff" }}>
							<PhoneOutlined /> Phone: +123 456 789
						</Text>
						<Text style={{ color: "#fff" }}>
							<HomeOutlined /> Address: 123 ABC Street, City,
							Country
						</Text>
					</Space>
				</Col>

				{/* Social Media Links */}
				<Col xs={24} sm={12} md={6}>
					<Title level={4} style={{ color: "#fff" }}>
						Social Media Channel
					</Title>
					<Space size="middle">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "#fff" }}
						>
							<FacebookOutlined style={{ fontSize: "24px" }} />
						</a>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "#fff" }}
						>
							<TwitterOutlined style={{ fontSize: "24px" }} />
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "#fff" }}
						>
							<InstagramOutlined style={{ fontSize: "24px" }} />
						</a>
					</Space>
				</Col>
			</Row>
		</Footer>
	);
};

export default AppFooter;
