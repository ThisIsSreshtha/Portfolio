import { useState, useEffect } from "react";
import Scene3D from "./components/Scene3D";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
	const [activeSection, setActiveSection] = useState("hero");
	const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: e.clientX / window.innerWidth,
				y: e.clientY / window.innerHeight,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const handleNavigate = (section) => {
		setActiveSection(section);
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "about", "skills", "projects", "contact"];
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="bg-black text-white overflow-x-hidden">
			<Scene3D mousePosition={mousePosition} />
			<Navigation activeSection={activeSection} onNavigate={handleNavigate} />

			<main>
				<section id="hero">
					<HeroSection onNavigate={handleNavigate} />
				</section>

				<section id="about">
					<AboutSection />
				</section>

				<section id="skills">
					<SkillsSection />
				</section>

				<section id="projects">
					<ProjectsSection />
				</section>

				<section id="contact">
					<ContactSection />
				</section>
			</main>

			<footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
				<div className="container mx-auto px-6 text-center">
					<p className="text-gray-400">
						© 2025 Sreshtha Dutta. Built with React, JavaScript, and Three.js
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
