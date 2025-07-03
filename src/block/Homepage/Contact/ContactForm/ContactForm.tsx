"use client";

import { FormInput } from "@/component/ui";

import "./ContactForm.css";

const ContactForm = () => {
	return (
		<form>
			<div className="form-container">
				<div>
					<fieldset id="full-name-fields">
						<FormInput id="firstName" label="First name" required={true} />
						<FormInput id="lastName" label="First name" />
					</fieldset>
					<fieldset id="company-fields">
						<FormInput id="companyName" label="Nom de l'entreprise" />
						<FormInput id="companyWebsite" type="url" label="Site web de l'entreprise" />
					</fieldset>
					<fieldset id="contact-fields">
						<FormInput id="email" type="email" label="E-mail" required={true} />
						<FormInput id="phone" type="tel" label="Téléphone" />
					</fieldset>
				</div>
				<div>
					<FormInput id="message" label="Votre message" type="textarea" required={true} />
				</div>
			</div>

			<p>
				<span className="mandatory">*</span> Champs obligatoires
			</p>

			<button type="submit">Envoyer</button>
		</form>
	);
};

export default ContactForm;
