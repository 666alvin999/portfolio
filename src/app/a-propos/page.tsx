import { Metadata } from "next";

import "./APropos.css";

export const metadata: Metadata = {
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
	title: "Alvin Hamaïde - À propos",
	description: "Voici une présentation de qui je suis, mes passions et ma personnalité.",
	openGraph: {
		title: "Alvin Hamaïde - Développeur NextJS / Spring Boot",
		description: "Voici une présentation de qui je suis, mes passions et ma personnalité.",
		images: ["/logo-purple-on-black.webp"]
	}
};

const APropos = () => {
	return <></>;
};

export default APropos;
