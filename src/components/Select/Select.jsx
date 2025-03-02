import { useState } from "react";
import css from "./Select.module.css";

// import { Icon } from "../Icon/Icon";

const Select = ({ options, placeholder, form, field, id }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (value) => {
		form.setFieldValue(field.name, value);
		setIsOpen(false);
	};

	return (
		<div className={css.box} id={id}>
			<input
				{...field}
				type="text"
				className={css.input}
				placeholder={placeholder}
				value={field.value || ""}
				readOnly
				onClick={() => setIsOpen(!isOpen)}
				onBlur={() => setIsOpen(false)}
			/>
			{/* <Icon/> */}
			{isOpen && (
				<ul
					className={css.list}
					style={{ height: options.length > 10 ? "272px" : "188px" }}
				>
					{options.map((option, index) => (
						<li key={index} onMouseDown={() => handleSelect(option)}>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Select;
