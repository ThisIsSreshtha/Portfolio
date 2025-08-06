import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeSection, onNavigate }) => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ id: "hero", label: "Home" },
		{ id: "about", label: "About" },
		{ id: "skills", label: "Skills" },
		{ id: "projects", label: "Projects" },
		{ id: "contact", label: "Contact" },
	];

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="text-xl font-bold text-white">Portfolio</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-8">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => onNavigate(item.id)}
									className={`px-4 py-2 rounded-lg transition-all duration-300 ${
										activeSection === item.id
											? "bg-white text-black"
											: "text-white hover:bg-white/20"
									}`}>
									{item.label}
								</button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-white p-2"
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden">
					<div className="flex flex-col items-center justify-center h-full space-y-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => {
									onNavigate(item.id);
									setIsOpen(false);
								}}
								className={`px-6 py-3 rounded-lg text-xl transition-all duration-300 ${
									activeSection === item.id
										? "bg-white text-black"
										: "text-white hover:bg-white/20"
								}`}>
								{item.label}
							</button>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Navigation;
