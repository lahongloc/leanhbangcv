import React from "react";
import { Card, Row, Col } from "antd";
import "./Experience.css"; // File CSS
import { workExperience } from "../../database/data";

const WorkExperience = () => {
	return (
		<div style={{ marginBottom: "10rem", marginTop: "5rem" }}>
			<h1 style={{ color: "#fff" }}>MY EXPERIENCE</h1>
			<div className="work-experience-container">
				<Row gutter={[16, 16]} justify="center">
					{workExperience.map((item, index) => (
						<Col key={index} xs={24} sm={12} md={8}>
							<Card
								hoverable
								className="company-card"
								cover={
									<img
										src={item.image}
										alt={item.company}
										className="company-image"
									/>
								}
							>
								<Card.Meta title={item.company} />
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default WorkExperience;
