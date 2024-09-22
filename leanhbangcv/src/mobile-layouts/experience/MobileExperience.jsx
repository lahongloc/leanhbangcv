import React from "react";
import { Card, Row, Col } from "antd";
import "./Experience.css"; // File CSS đã cập nhật
import { workExperience } from "../../database/data";

const MobileExperience = () => {
	return (
		<div style={{ marginTop: "-5rem" }}>
			<h1 style={{ color: "#fff" }}>MY EXPERIENCE</h1>
			<div className="work-experience-mobile-container">
				<Row gutter={[16, 16]} justify="center">
					{workExperience.map((item, index) => (
						<Col key={index} xs={12}>
							{" "}
							{/* Mỗi `Col` chiếm một nửa màn hình */}
							<Card
								hoverable
								className="mobile-company-card"
								cover={
									<img
										src={item.image}
										alt={item.company}
										className="mobile-company-image"
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

export default MobileExperience;
