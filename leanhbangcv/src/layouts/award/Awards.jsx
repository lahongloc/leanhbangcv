import React from "react";
import { awards } from "../../database/data";
import AwardCard from "../../components/awardCard/AwardCard";
import AwardIntroduction from "../../components/awardIntroduction/AwardIntroduction";

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
			<div style={{ zIndex: "1", marginRight: "1.5rem" }}>
				<AwardIntroduction />
			</div>
			<div className="content">
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
