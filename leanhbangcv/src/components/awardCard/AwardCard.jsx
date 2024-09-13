import React from "react";
import { TrophyOutlined, StarOutlined, LikeOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import paths from "../../database/path";

const { Text } = Typography;

const AwardCard = ({ event, achievement, awardId }) => {
	const navigate = useNavigate();
	const getIcon = (achievement) => {
		switch (achievement) {
			case "Finalist":
				return <TrophyOutlined style={{ color: "#ffd700" }} />;
			case "Semi-Final":
				return <StarOutlined style={{ color: "#ffa500" }} />;
			default:
				return <LikeOutlined style={{ color: "#b87333" }} />;
		}
	};

	return (
		<Card
			style={{
				backgroundColor: "#1d1d1d", // Màu nền tối
				marginBottom: "16px",
				borderRadius: "8px",
				boxShadow: "0 4px 8px rgba(0,0,0,0.5)", // Hiệu ứng đổ bóng đậm hơn
				color: "#fff", // Màu chữ sáng
				display: "inline-block",
			}}
			hoverable
			bordered={false}
			onClick={() => navigate(`${paths.home}?award=${awardId}`)}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{getIcon(achievement)}
				<div style={{ marginLeft: "12px" }}>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: "16px",
							color: "#fff",
						}}
					>
						{" "}
						{/* Chữ màu trắng */}
						{event}
					</Text>
					<br />
					<Text type="secondary" style={{ color: "#aaa" }}>
						{" "}
						{/* Chữ màu xám nhạt cho phần phụ */}
						{achievement}
					</Text>
				</div>
			</div>
		</Card>
	);
};

export default AwardCard;
