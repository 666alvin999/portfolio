import { Metadata } from "next";

import { Introduction } from "@/block";
import Contact from "@/block/Homepage/Contact/Contact";
import Hero from "@/block/Homepage/Hero/Hero";

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.VERCEL_URL}`),
	title: "Alvin Hamaïde - Développeur NextJS / Spring Boot",
	description:
		"Je m'appelle Alvin Hamaïde, je suis développeur NextJS et Spring Boot et je crée des applicatios web. Voici mon portfolio, Vous pouvez me contacter pour discuter de vos projets.",
	openGraph: {
		title: "Alvin Hamaïde - Développeur NextJS / Spring Boot",
		description:
			"Je m'appelle Alvin Hamaïde, je suis développeur NextJS et Spring Boot et je crée des applicatios web. Voici mon portfolio, Vous pouvez me contacter pour discuter de vos projets.",
		images: ["/logo-purple-on-black.webp"]
	}
};

const Home = () => {
	return (
		<main>
			<Hero />
			<Introduction />
		</main>
	);
};

export default Home;
