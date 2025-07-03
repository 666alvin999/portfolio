"use client";

import { FC, ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";

type SectionTitleProps = {
	trigger: string;
	children: ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const SectionTitle: FC<SectionTitleProps> = ({ trigger, children }) => {
	const containerRef = useRef(null);

	useGSAP(() => {
		gsap.set(`${trigger} .title-container > *`, {
			autoAlpha: 1
		});

		gsap.from(`${trigger} .title-container > *`, {
			autoAlpha: 0,
			y: 50,
			scrollTrigger: {
				trigger: trigger,
				start: "top 50%"
			}
		});
	});

	return (
		<div className="title-container" ref={containerRef}>
			{children}
		</div>
	);
};

export default SectionTitle;
