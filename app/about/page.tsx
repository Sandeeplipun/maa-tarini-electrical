import Content from "@/components/webcomp/about/Content";
import Intro from "@/components/webcomp/about/Intro";
import React from "react";

const page: React.FC = () => {
	return (
		<main className={`pt-16`}>
			{/* Added padding-top equal to nav height */}
			<div>
				<Intro />
				<Content />
			</div>
		</main>
	);
};

export default page;
