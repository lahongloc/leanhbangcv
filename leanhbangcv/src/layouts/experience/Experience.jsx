import React from "react";
import { Table, Tag } from "antd";
import { workExperience } from "../../database/data";
import "./Experience.css"; // Tạo một file CSS riêng để tùy chỉnh

const columns = [
	{
		title: "Company",
		dataIndex: "company",
		key: "company",
		render: (text) => <span style={{ color: "#fff" }}>{text}</span>, // Chữ trắng
	},
	{
		title: "Roles",
		dataIndex: "roles",
		key: "roles",
		render: (roles) => (
			<>
				{roles.map((role) => (
					// <Tag key={role} bordered={false} color="processing">
					// 	{role}
					// </Tag>
					<Tag
						style={{ border: "0.25px solid #d8cccc69" }}
						color={"rgb(0 0 0 / 58%)"}
					>
						{role}
					</Tag>
				))}
			</>
		),
	},
	{
		title: "Period",
		key: "period",
		render: (text, record) => (
			<span style={{ color: "#fff" }}>
				{record.period.start} - {record.period.end}
			</span>
		),
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
		render: (text) => <span style={{ color: "#fff" }}>{text}</span>, // Chữ trắng
	},
];

const Experience = () => {
	return (
		<div
			style={{
				padding: "24px",
				// backgroundColor: "#333", // Nền tối cho toàn bộ trang
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// height: "100vh",
				// marginTop: "3rem",
			}}
		>
			<div
				style={{
					width: "80%",
					backgroundColor: "rgb(0 0 0 / 5%)", // Nền tối cho khung bảng
					padding: "16px",
					borderRadius: "8px",
				}}
			>
				<h2
					style={{
						textAlign: "center",

						marginBottom: "16px",
						color: "#fff",
					}}
				>
					Experiences
				</h2>
				<Table
					dataSource={workExperience}
					columns={columns}
					rowKey="company"
					pagination={{ pageSize: 4 }} // Điều chỉnh kích thước trang nếu cần
					bordered
					style={{
						backgroundColor: "rgb(0 0 0 / 35%)",
						borderRadius: "8px",
					}} // Nền tối cho bảng
					rowClassName={() => "dark-row"} // Áp dụng lớp CSS cho từng dòng
				/>
			</div>
		</div>
	);
};

export default Experience;
