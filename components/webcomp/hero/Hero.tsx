import React from "react";
import CarouselSlider from "./CarouselSlider";
import Partners from "./Partners";

const Hero: React.FC = () => {
	return (
		<main>
			<div className={`flex flex-col gap-4`}>
				<CarouselSlider />
        <Partners />
			</div>
		</main>
	);
};

export default Hero;
