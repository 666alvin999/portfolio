"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("custom", "M0,0 C0.147,0 0.456,0.091 0.497,0.62 0.509,0.778 0.639,1 1,1 ");

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.set("li", {
				autoAlpha: 0,
				y: 10
			});

			gsap.timeline()
				.to(".header", {
					scaleY: 1,
					ease: "power4",
					duration: 0.8,
					delay: 0.3
				})
				.from(".header", {
					width: 20,
					ease: "custom",
					duration: 1
				})
				.to(
					"li",
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.8,
						stagger: 0.1
					},
					"+=0.4"
				);
		},
		{
			scope: headerRef
		}
	);

	return (
		<header className="header-container" ref={headerRef}>
			<div className="glassy header">
				<nav>
					<ul>
						<li>Accueil</li>
						<li>À propos</li>
						<li>Compétences</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
