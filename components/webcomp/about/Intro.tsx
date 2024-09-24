import React from "react";

const Intro: React.FC = () => {
	return (
		<main>
			<div
				className={`bg-[linear-gradient(135deg,theme(colors.blue.400),theme(colors.purple.500))] dark:bg-[linear-gradient(135deg,theme(colors.blue.600),theme(colors.purple.700))] p-8 shadow-xl`}>
				<h1 className={`text-2xl md:text-3xl text-center font-bold`}>
					Welcome to our store
				</h1>
				<p className={`text-center text-sm md:text-base`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</p>
			</div>
		</main>
	);
};

export default Intro;
