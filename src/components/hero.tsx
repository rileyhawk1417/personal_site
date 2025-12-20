import { Github, Linkedin, FileText, Terminal } from "lucide-react";

export function Hero() {
	return (
		<section
			id="hero"
			className="py-40 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900/95"
		>
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-8">
					<div className="inline-flex items-center space-x-2 text-green-400 font-mono text-sm mb-4">
						<Terminal size={16} />
						<span>sean@dev:~$</span>
					</div>
					<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						Sean Riley
					</h1>
					<p className="text-xl sm:text-2xl text-green-400 font-mono mb-8 animate-pulse">
						Code. Tinker. Repeat.
					</p>
				</div>

				<div className="max-w-2xl mx-auto mb-12">
					<p className="text-lg text-gray-300 leading-relaxed">
						Full-stack developer and creative tinkerer building the future with
						JavaScript, Flutter, Rust, and Linux. From AI tools to audio tech, I
						like hacking at things out of curiosity.
					</p>
				</div>

				<div className="flex justify-center space-x-6  text-green-400">
					<a
						href="https://github.com/rileyhawk1417"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
					>
						<Github
							size={20}
							className="group-hover:text-green-400 transition-colors"
						/>
						<span className="font-mono">GitHub</span>
					</a>
					<a
						href="https://www.linkedin.com/in/seanrileyhawkins/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
					>
						<Linkedin
							size={20}
							className="group-hover:text-blue-400 transition-colors"
						/>
						<span className="font-mono">LinkedIn</span>
					</a>
					<a
						href="https://q7tywtr1on.ufs.sh/f/ietvKhV5dWUIKLew2GjnKupL7MAT0Yc6evD4yPaHsqlQoiV1"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
					>
						<FileText
							size={20}
							className="group-hover:text-yellow-400 transition-colors"
						/>
						<span className="font-mono">Resume</span>
					</a>
				</div>
			</div>
		</section>
	);
}
