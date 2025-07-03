"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import "./AnimatedBackground.css";

type AnimatedBackgroundProps = {
	children?: ReactNode;
};

gsap.registerPlugin(SplitText, ScrollTrigger);

const AnimatedBackground: FC<AnimatedBackgroundProps> = ({ children }) => {
	const heroRef = useRef<HTMLDivElement>(null);
	const colorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useGSAP(() => {
		gsap.set(".background-content", {
			autoAlpha: 1
		});

		gsap.set(colorRef.current, {
			autoAlpha: 1,
			x: -1500
		});

		gsap.to(colorRef.current, {
			x: window.innerWidth + 200,
			repeat: -1,
			yoyo: true,
			delay: 0.3,
			duration: 6,
			ease: "none"
		});

		SplitText.create(".background-content > *", {
			type: "chars",
			onSplit: (self) => {
				gsap.from(self.chars, {
					autoAlpha: 0,
					y: "random([-20, 20])",
					delay: 0.3,
					stagger: {
						amount: 0.8,
						from: "random"
					},
					onComplete: () => {
						gsap.timeline({
							scrollTrigger: {
								trigger: "#hero",
								start: "top top",
								end: "bottom 75%",
								scrub: 1
							}
						})
							.fromTo(
								self.chars,
								{
									x: 0,
									y: 0,
									scale: 1,
									rotation: 0
								},
								{
									x: "random(-400, 400)",
									y: "random(-400, 400)",
									scale: 3,
									rotation: "random(-50, 50)"
								}
							)
							.to(
								self.chars,
								{
									autoAlpha: 0,
									duration: 0.2
								},
								">-0.5"
							);
					}
				});
			}
		});
	});

	return (
		<section className="background-container" ref={heroRef}>
			<div className="background">
				<div ref={colorRef} className="color"></div>
			</div>

			<div className="background-content">{children}</div>
		</section>
	);
};

export default AnimatedBackground;
