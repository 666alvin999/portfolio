import { Metadata } from "next";

import { Contact, Introduction } from "@/block";
import Hero from "@/block/Homepage/Hero/Hero";

export const metadata: Metadata = {
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
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
			<Contact />
		</main>
	);
};

export default Home;
