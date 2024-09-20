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
		<main className={`sm:p-2 lg:p-4`}>
			<div
				className={`w-full mx-auto bg-slate-500 dark:bg-slate-400 bg-opacity-25 dark:bg-opacity-50 rounded-xl shadow-lg p-4`}>
				<h1 className={`text-2xl font-bold underline`}>Our trusted electrical partners</h1>
			</div>
		</main>
	);
};

export default Partners;
