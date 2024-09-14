import React, { useState } from "react";
import { Select, Row, Col, Typography } from "antd";

const { Option } = Select;
const { Title } = Typography;
import "./Project.css";
import { projects } from "../../database/data";

const VideoDisplay = ({ products }) => {
	return (
		<Row gutter={[16, 16]} justify="start">
			{products.map((product, index) => (
				<Col span={24} key={index}>
					<div class="video-container">
						<iframe
							width="100%"
							height="315"
							src={product.video}
							title={product.name}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<Title level={5}>
							{product.name.length > 20
								? `${product.name.slice(0, 20)}...`
								: product.name}
						</Title>
					</div>
				</Col>
			))}
		</Row>
	);
};

const MobileProject = () => {
	const [selectedProject, setSelectedProject] = useState(projects[0]);

	const handleChange = (value) => {
		const project = projects.find((p) => p.project === value);
		setSelectedProject(project);
	};

	return (
		<div className="project-container">
			<Select
				defaultValue={selectedProject.project}
				style={{ width: 300, marginBottom: 20 }}
				onChange={handleChange}
				className="project-selector"
			>
				{projects.map((project) => (
					<Option key={project.project} value={project.project}>
						{project.project}
					</Option>
				))}
			</Select>

			<VideoDisplay products={selectedProject.products} />
		</div>
	);
};

export default MobileProject;
