import Intro from "@/components/webcomp/about/Intro";
import React from "react";

const page: React.FC = () => {
	return (
		<main className={`pt-16`}>
			{/* Add padding-top equal to nav height */}
			<div>
				<Intro />
			</div>
		</main>
	);
};

export default page;
