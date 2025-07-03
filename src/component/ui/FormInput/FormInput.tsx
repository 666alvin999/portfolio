import { FC, HTMLInputTypeAttribute } from "react";

import "./FormInput.css";

type FormInputProps = {
	id: string;
	type?: HTMLInputTypeAttribute | "textarea";
	label?: string;
	required?: boolean;
};

const FormInput: FC<FormInputProps> = ({ id, type = "text", label, required = false }) => {
	return (
		<div className="input-group">
			{label && (
				<label htmlFor={id}>
					{label}
					{required && <span className="mandatory">&nbsp;*</span>}
				</label>
			)}

			{type !== "textarea" ? (
				<input className="glassy" id={id} type={type} required={required} />
			) : (
				<textarea className="glassy" id={id} />
			)}
		</div>
	);
};

export default FormInput;
