"use client";

import { FC, ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

type TextScrollerProps = {
	trigger: string;
	children: ReactNode;
};

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextScroller: FC<TextScrollerProps> = ({ trigger, children }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.set(".scroller-container > *", {
			autoAlpha: 1
		});

		SplitText.create(".scroller-container > *", {
			type: "words, chars",
			onSplit: (self) => {
				gsap.from([self.chars], {
					autoAlpha: 0,
					x: -20,
					scrollTrigger: {
						trigger: trigger,
						pin: true,
						start: "top top",
						scrub: 1
					},
					duration: 0.2,
					stagger: 0.2
				});
			}
		});
	});

	return (
		<div className="scroller-container" ref={containerRef}>
			{children}
		</div>
	);
};

export default TextScroller;
