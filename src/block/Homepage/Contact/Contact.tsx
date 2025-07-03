import ContactForm from "@/block/Homepage/Contact/ContactForm/ContactForm";
import { Reveal } from "@/component/animation";
import { bebasNeue } from "@/lib/fonts";

import "./Contact.css";

const Contact = () => {
	return (
		<section id="contact">
			<Reveal trigger="#contact">
				<h2 className={`${bebasNeue.className} section-title`}>Me contacter</h2>
			</Reveal>

			<Reveal trigger="#contact">
				<h3>Vous avez un projet ? Vous pouvez me laisser un message !</h3>
			</Reveal>

			<Reveal trigger="#contact">
				<ContactForm />
			</Reveal>
		</section>
	);
};

export default Contact;
