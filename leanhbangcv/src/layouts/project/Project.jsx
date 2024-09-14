import React, { useState } from "react";
import { Tabs } from "antd";
import "./Project.css";
import { projects } from "../../database/data";
import Cube from "../../components/cube/Cube";

const Project = () => {
	// Mỗi project sẽ trở thành một tab
	const projectTabs = projects.map((project, index) => ({
		label: project.project.toUpperCase(), // Tên tab là tên project
		key: String(index + 1),
		children: (
			<div className="video-list">
				{project.products.map((product, idx) => (
					<div key={idx} className="video-item">
						<iframe
							width="100%"
							height="315"
							src={product.video}
							title={product.name}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<h3>{product.name}</h3>
					</div>
				))}
			</div>
		),
	}));

	return (
		<div className="project-container-laptop">
			<div style={{ marginTop: "0" }}>
				<Cube />
			</div>
			<Tabs
				defaultActiveKey="1"
				tabPosition="left"
				items={projectTabs}
				style={{
					marginTop: "2rem",
					color: "#fff", // Màu trắng cho chữ
				}}
			/>
		</div>
	);
};

export default Project;
