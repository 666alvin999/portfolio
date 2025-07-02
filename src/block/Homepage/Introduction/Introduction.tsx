import { SectionTitle, TextScroller } from "@/component";
import { bebasNeue } from "@/lib/fonts";

import "./Introduction.css";

const Introduction = () => {
	return (
		<section id="introduction">
			<SectionTitle trigger="#introduction">
				<h2 className={`${bebasNeue.className} section-title`}>Introduction</h2>
			</SectionTitle>
			<TextScroller trigger="#introduction">
				<p>
					Je m&apos;appelle <strong>Alvin Hamaïde</strong>, j&apos;ai <strong>23 ans</strong>, et je suis un{" "}
					<em>développeur web junior</em>.
					<br />
					<br />
					J&apos;ai commencé mes études en <time>2020</time> avec une <strong>licence Informatique</strong>,
					puis je me suis tourné vers le <em>développement web</em> pendant mon <strong>Master</strong> en{" "}
					<time>2023</time>. C&apos;est à ce moment-là que j&apos;ai appris à créer des sites web fluides et
					réactifs, en utilisant des <strong>technologies modernes</strong> comme <mark>React</mark>,{" "}
					<mark>Next.js</mark>
					et <mark>Tailwind CSS</mark> (entre autres).
					<br />
					<br />
					Malgré mon <strong>alternance</strong> très orientée <em>back-end</em> (notamment du{" "}
					<mark>Java Springboot</mark>
					), j&apos;essaie de devenir le plus <strong>polyvalent</strong> possible en augmentant mes
					compétences en <em>front-end</em>. J&apos;aime challenger mon côté <strong>créatif</strong> en
					réalisant des <em>animations</em> que je n&apos;ai encore jamais faites, toujours avec
					l&apos;ambition de m&apos;améliorer.
				</p>
			</TextScroller>
		</section>
	);
};

export default Introduction;
