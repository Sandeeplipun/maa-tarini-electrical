import React from "react";
import Image from "next/image";

const AboutLanding: React.FC = () => {
	return (
		<main
			className={`p-8 sm:p-4 bg-slate-300 dark:bg-slate-800 bg-opacity-50 rounded-xl shadow-xl`}>
			<div
				className={`flex flex-col md:flex-row mx-auto sm:w-[90%] lg:w-[80%] gap-4 items-center`}>
				<div className={`w-full h-full`}>
					<h1 className={`text-2xl md:text-3xl font-bold`}>About</h1>
					<p className={`mt-4`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
						voluptatum aliquam numquam officiis iste assumenda eos? Nostrum ut
						facilis inventore rem corporis tempore sed sit, vitae pariatur
						laborum laboriosam minima. Velit, sequi! Cum tempora nihil magnam et
						laboriosam quod, natus repellat dolore voluptas libero, id, aliquid
						esse provident aspernatur perspiciatis.
					</p>
				</div>
				{/* Image */}
				<div className={`w-full h-full flex justify-center items-center`}>
					<Image
						src={"/logo/logo.png"}
						width={400}
						height={400}
						alt={"logo"}
						className={`w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] lg:p-4`}
					/>
				</div>
			</div>
		</main>
	);
};

export default AboutLanding;
