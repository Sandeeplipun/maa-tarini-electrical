import React from "react";

const partnerImages = [
	{
		id: 1,
		name: "Anchor Panasonic",
		image: "/assets/companyLogos/AnchorPanasonicLogo.png",
	},
];

const Partners: React.FC = () => {
	return (
		<main>
			<div
				className={`w-full mx-auto bg-slate-500 dark:bg-slate-200 bg-opacity-25 dark:bg-opacity-50 rounded-xl shadow-lg p-4`}>
				Partners
			</div>
		</main>
	);
};

export default Partners;
