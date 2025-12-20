import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Now } from "@/components/now-section";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<Hero />
			<Now />
		</>
	);
}

