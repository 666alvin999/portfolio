import { AnimatedBackground } from "@/component/animation";
import { bebasNeue } from "@/lib/fonts";

import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero-container">
			<AnimatedBackground>
				<h1 className={bebasNeue.className}>Alvin Hamaïde</h1>
				<p>Développeur Java / NextJS Junior</p>
			</AnimatedBackground>
		</section>
	);
};

export default Hero;
