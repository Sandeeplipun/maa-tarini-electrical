import { DarkModeToggle } from "@/components/toggle/DarkModeToggle";

export default function Home() {
	return (
		<main >
			<div className={`flex p-4 gap-4`}>
				<DarkModeToggle />
			</div>
		</main>
	);
}
