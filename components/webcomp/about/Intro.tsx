import React from "react";

const Intro: React.FC = () => {
	return (
		<main>
			<div
				className={`intro-header text-white`}>
				<h1 className={`text-2xl md:text-3xl font-bold italic`}>
					Welcome to our shop
				</h1>
				<p className={`text-sm md:text-base italic`}>
					We are here to serve you.
				</p>
			</div>
		</main>
	);
};

export default Intro;
