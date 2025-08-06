import React from "react";

const AboutSection = () => {
	return (
		<section className="min-h-screen py-20 relative">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
						About Me
					</h2>
					<p className="text-xl text-gray-300 mb-12 leading-relaxed">
						I'm a passionate creator who bridges technology and human experience.
						With expertise in development, design, and technical writing, I help
						bring ideas to life through clean code, intuitive interfaces, and
						clear communication.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-16">
						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
							<h3 className="text-2xl font-bold text-white mb-4">Developer</h3>
							<p className="text-gray-400">
								Building modern web applications with React, Node.js, and
								cutting-edge technologies.
							</p>
						</div>

						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
							<h3 className="text-2xl font-bold text-white mb-4">Designer</h3>
							<p className="text-gray-400">
								Creating intuitive user interfaces and experiences that
								solve real problems.
							</p>
						</div>

						<div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
							<h3 className="text-2xl font-bold text-white mb-4">Writer</h3>
							<p className="text-gray-400">
								Transforming complex technical concepts into clear, engaging
								content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
