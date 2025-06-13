"use client";

import React, { MouseEventHandler, useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import "./Hero.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const customCursorRef = useRef<HTMLDivElement>(null);

	const { contextSafe } = useGSAP(
		() => {
			gsap.set(".hero-content", {
				autoAlpha: 1
			});

			gsap.set(customCursorRef.current, {
				autoAlpha: 1,
				x: -500,
				y: -500
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
						}
					});

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
		},
		{
			scope: heroRef
		}
	);

	const handleMouseEnter = contextSafe(() => {
		gsap.to(customCursorRef.current, {
			autoAlpha: 1,
			duration: 0.2
		});
	});

	const handleMouseMove: MouseEventHandler<HTMLDivElement> = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
		gsap.to(customCursorRef.current, {
			x: e.clientX - customCursorRef.current!.clientWidth / 2,
			y: e.clientY - customCursorRef.current!.clientHeight / 2,
			duration: 0.4
		});
	});

	const handleMouseLeave = contextSafe(() => {
		gsap.to(customCursorRef.current, {
			autoAlpha: 0,
			duration: 0.2
		});
	});

	return (
		<div
			className="hero-container"
			ref={heroRef}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="hero-background">
				<div ref={customCursorRef} className="custom-cursor"></div>
			</div>

			<div className="hero-content">
				<h1 className={bebasNeue.className}>Alvin Hamaïde</h1>
				<h2>Développeur Web Fullstack Junior</h2>
			</div>
		</div>
	);
};

export default Hero;
