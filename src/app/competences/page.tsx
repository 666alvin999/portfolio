import { Metadata } from "next";

import "./Competences.css";

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.VERCEL_URL}`),
	title: "Alvin Hamaïde - Mes compétences",
	description:
		"Voici la liste des compétences que je possède et technologies que je maîtrise. Je possède des compétences en front-end et back-end.",
	openGraph: {
		title: "Alvin Hamaïde - Développeur NextJS / Spring Boot",
		description:
			"Voici la liste des compétences que je possède et technologies que je maîtrise. Je possède des compétences en front-end et back-end.",
		images: ["/logo-purple-on-black.webp"]
	}
};

const Competences = () => {
	return <></>;
};

export default Competences;
