import { Clock, Code, Wrench } from "lucide-react";

export function Now() {
	const currentFocus = [
		{
			icon: <Code size={20} />,
			title: "Next.js Monolith",
			description:
				"Testing architectural patterns for a large-scale application with server components and edge functions.",
		},
		{
			icon: <Wrench size={20} />,
			title: "Pomodoro Flutter App",
			description:
				"Building a minimalist productivity timer with custom animations and local notifications.",
		},
		{
			icon: <Clock size={20} />,
			title: "CI/CD Migration",
			description:
				"Moving legacy projects from Bitbucket Pipelines to AWS Amplify for better deployment workflows.",
		},
	];

	return (
		<section id="now" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/90">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						<span className="text-green-400 font-mono">/now</span>
					</h2>
					<p className="text-gray-400 font-mono text-sm">
						What I'm focused on right now
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{currentFocus.map((item, index) => (
						<div
							key={index}
							className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 group"
						>
							<div className="flex items-center space-x-3 mb-4">
								<div className="text-green-400 group-hover:text-green-300 transition-colors">
									{item.icon}
								</div>
								<h3 className="font-mono text-lg font-semibold text-white">
									{item.title}
								</h3>
							</div>
							<p className="text-gray-300 text-sm leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
