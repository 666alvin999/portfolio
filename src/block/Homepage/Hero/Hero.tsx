"use client";

import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import { bebasNeue } from "@/lib/fonts";

import "./Hero.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const customCursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useGSAP(
		() => {
			gsap.set(".hero-content", {
				autoAlpha: 1
			});

			gsap.set(customCursorRef.current, {
				autoAlpha: 1,
				x: -1500
			});

			gsap.to(customCursorRef.current, {
				x: window.innerWidth + 200,
				repeat: -1,
				yoyo: true,
				delay: 0.3,
				duration: 6,
				ease: "none"
			});

			SplitText.create(".hero-content > h1, h2", {
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
									trigger: heroRef.current,
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
		},
		{
			scope: heroRef
		}
	);

	return (
		<section className="hero-container" ref={heroRef}>
			<div className="hero-background">
				<div ref={customCursorRef} className="custom-cursor"></div>
			</div>

			<div className="hero-content">
				<h1 className={bebasNeue.className}>Alvin Hamaïde</h1>
				<h2>Développeur Java / NextJS Junior</h2>
			</div>
		</section>
	);
};

export default Hero;
