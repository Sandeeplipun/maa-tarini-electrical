import React from "react";

const Intro: React.FC = () => {
	return (
		<main>
			<div className={`bg-slate-500 dark:bg-slate-800 bg-opacity-50 p-4 shadow-xl`}>
				<h1 className={`text-2xl md:text-3xl font-bold`}>About our store</h1>
			</div>
		</main>
	);
};

export default Intro;
