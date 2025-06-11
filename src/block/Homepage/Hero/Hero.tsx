"use client";

import React, { MouseEventHandler, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import "./Hero.css";

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const customCursorRef = useRef<HTMLDivElement>(null);

	const { contextSafe } = useGSAP(
		() => {
			gsap.set(customCursorRef.current, {
				autoAlpha: 1,
				x: -500,
				y: -500
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
				<h1>Alvin Hamaïde</h1>
				<h2>Développeur Web Fullstack Junior</h2>
			</div>
		</div>
	);
};

export default Hero;
