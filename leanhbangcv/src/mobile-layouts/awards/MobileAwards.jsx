import React from "react";
import { awards } from "../../database/data";
import AwardCard from "../../components/awardCard/AwardCard";
import "./Awards.css";
import { Carousel } from "antd";

const MobileAwards = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "16px",
			}}
		>
			<h2
				style={{
					textAlign: "center",
					marginBottom: "16px",
					color: "#fff",
				}}
			>
				Awards & Achievements
			</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<Carousel arrows dotPosition="left" infinite={false}>
					{awards.map((award, index) => (
						<div>
							<AwardCard
								key={index}
								event={award.event}
								achievement={award.achievement}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default MobileAwards;
