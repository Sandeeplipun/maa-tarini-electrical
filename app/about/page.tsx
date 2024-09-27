import AboutBody from "@/components/webcomp/about/AboutBody";
import Intro from "@/components/webcomp/about/Intro";
import React from "react";

const page: React.FC = () => {
	return (
		<main className={`pt-16`}>
			{/* Added padding-top equal to nav height */}
			<div>
				<Intro />
				<AboutBody />
			</div>
		</main>
	);
};

export default page;
