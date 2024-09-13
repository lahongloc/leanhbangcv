import React from "react";
import { awards } from "../../database/data";
import AwardCard from "../../components/awardCard/AwardCard";

const Awards = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "70vh",
			}}
		>
			{" "}
			<div className="content">
				<h2
					style={{
						textAlign: "left",
						marginBottom: "16px",
						color: "#fff",
						// backgroundColor: "#fff",
						width: "fit-content",
						// borderRadius: "7px",
						// display: "inline",
					}}
				>
					Awards & Achievements
				</h2>
				<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
					{awards.map((award) => (
						<AwardCard
							awardId={award.id}
							key={award.id}
							event={award.event}
							achievement={award.achievement}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Awards;
