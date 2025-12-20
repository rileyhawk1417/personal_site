import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "now"];
			//const sections = ["hero", "now", "projects", "journal"];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsOpen(false);
	};

	const navItems = [
		{ id: "hero", label: "Home" },
		{ id: "now", label: "Now" },
		//{ id: "projects", label: "Projects" },
		//{ id: "journal", label: "Journal" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<button
						onClick={() => scrollToSection("hero")}
						className="font-mono text-green-400 hover:text-green-300 transition-colors"
					>
						~/sean-riley
					</button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`font-mono text-sm transition-colors cursor-pointer ${
									activeSection === item.id
										? "text-green-400"
										: "text-gray-400 hover:text-gray-200"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Mobile Navigation Toggle */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-gray-400 hover:text-gray-200"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<div className="md:hidden py-4 border-t border-gray-800">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`block w-full text-left py-2 font-mono text-sm transition-colors ${
									activeSection === item.id
										? "text-green-400"
										: "text-gray-400 hover:text-gray-200"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
