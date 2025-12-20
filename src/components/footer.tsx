//import { Terminal, Heart } from "lucide-react";

export function Footer() {
	const d = new Date();
	return (
		<footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-gray-900/95">
			<div className="max-w-4xl mx-auto">
				{/*
				<div className="text-center mb-8">
					<div className="flex justify-center items-center space-x-2 text-green-400 font-mono text-sm mb-4">
						<Terminal size={16} />
						<span>Subdomain Experiments</span>
					</div>
					<div className="flex flex-wrap justify-center gap-4 text-sm">
						<a
							href="https://tinker.seanriley.dev"
							className="text-gray-400 hover:text-green-400 transition-colors font-mono"
						>
							tinker.seanriley.dev
						</a>
						<a
							href="https://sandbox.seanriley.dev"
							className="text-gray-400 hover:text-green-400 transition-colors font-mono"
						>
							sandbox.seanriley.dev
						</a>
						<a
							href="https://lab.seanriley.dev"
							className="text-gray-400 hover:text-green-400 transition-colors font-mono"
						>
							lab.seanriley.dev
						</a>
					</div>
				</div>
*/}

				<div className="text-center text-gray-500 font-mono text-sm">
					<div className="flex items-center justify-center space-x-2 mb-2">
						<span>A hacked together v0 template</span>
					</div>
					<p>© {d.getFullYear()} Sean Riley • Open source on GitHub</p>
				</div>
			</div>
		</footer>
	);
}
