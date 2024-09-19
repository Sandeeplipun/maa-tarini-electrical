import { DarkModeToggle } from "@/components/toggle/DarkModeToggle";

export default function Home() {
	return (
		<main className={``}>
			<div className={`flex p-4 gap-4`}>
				<DarkModeToggle />
			</div>
      <div></div>
		</main>
	);
}
