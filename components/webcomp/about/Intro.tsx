import React from "react";

const Intro: React.FC = () => {
	return (
		<main>
			<div
				className={`intro-header`}>
				<h1 className={`text-2xl md:text-3xl font-bold`}>
					Welcome to our shop
				</h1>
				<p className={`text-sm md:text-base`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</p>
			</div>
		</main>
	);
};

export default Intro;
