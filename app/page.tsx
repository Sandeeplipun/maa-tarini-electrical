import AboutLanding from "@/components/webcomp/landing/about/AboutLanding";
import Hero from "@/components/webcomp/landing/hero/Hero";

export default function Home() {
	return (
		<main className={`pt-16`}>
			{/* Add padding-top equal to nav height */}
			<div className={`p-4`}>
				<div>
					<Hero />
				</div>
				<div className={`pt-4`}>
					<AboutLanding />
				</div>
			</div>
		</main>
	);
}
