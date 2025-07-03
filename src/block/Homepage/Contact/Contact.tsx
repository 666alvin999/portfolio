import ContactForm from "@/block/Homepage/Contact/ContactForm/ContactForm";
import { SectionTitle } from "@/component/animation";
import { bebasNeue } from "@/lib/fonts";

import "./Contact.css";

const Contact = () => {
	return (
		<section id="contact">
			<SectionTitle trigger="#contact">
				<h2 className={`${bebasNeue.className} section-title`}>Me contacter</h2>
			</SectionTitle>

			<h3>Vous avez un projet ? Vous pouvez me laisser un message !</h3>

			<ContactForm />
		</section>
	);
};

export default Contact;
