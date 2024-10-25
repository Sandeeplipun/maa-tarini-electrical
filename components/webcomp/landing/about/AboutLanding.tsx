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
						I established this electrical shop in 2012 in our locality
						partnering with various top brands distributors and providing the
						best quality products and service since 2012. My technicians are
						well versed in all repairing and wiring skills. Here in my shop all
						types of electrical appliances such as Geyser, Water Heater, Grinder
						Motors, Ceiling Fans, etc. are repaired here. We sell variety of
						products like Geysers, Water Heaters, Ceiling Fans, Exhaust Fans,
						Electric Meter, Lights, etc. We also provide installation services
						for various electrical appliances. We have a wide range of products
						and services to offer. We are a reliable and trusted electrical
						shop. We are always ready to serve you.
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
