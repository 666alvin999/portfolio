"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

import "./Header.css";

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
						stagger: {
							each: 0.1,
							from: "center"
						}
					},
					">-0.5"
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
						<li>
							<Link href="/">Accueil</Link>
						</li>
						<li>
							<Link href="/a-propos">À propos</Link>
						</li>
						<li>
							<Link href="/competences">Compétences</Link>
						</li>
						<li>
							<Link href="/projets">Projets</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
