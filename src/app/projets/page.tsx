import { Metadata } from "next";

import "./Projets.css";

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.VERCEL_URL}`),
	title: "Alvin Hamaïde - Mes projets",
	description:
		"Vous pouvez découvrir les projets auxquels j'ai participé ou que j'ai réalisé moi-même. Vous y retrouverez des projets personnels, des projets scolaires ou professionels, aussi bien des sites que des APIs.",
	openGraph: {
		title: "Alvin Hamaïde - Projets",
		description:
			"Vous pouvez découvrir les projets auxquels j'ai participé ou que j'ai réalisé moi-même. Vous y retrouverez des projets personnels, des projets scolaires ou professionels, aussi bien des sites que des APIs.",
		images: ["/logo-purple-on-black.webp"]
	}
};

const Projets = () => {
	return <></>;
};

export default Projets;
