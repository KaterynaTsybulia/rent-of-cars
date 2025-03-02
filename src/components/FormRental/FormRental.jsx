import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

import { RentalCarSchema } from "../validation/RentalCarSchema";
import Button from "../Button/Button";

import css from "./FormRental.module.css";

const initialValues = {
	name: "",
	email: "",
	date: new Date(),
	comment: "",
};

export default function FormRental() {
	const handleSubmit = (values, actions) => {
		toast.success("Car successfully rented!");
		actions.resetForm();
	};

	return (
		<div className={css.form}>
			<h2 className={css.name}>Book your car now</h2>
			<p className={css.subname}>
				Stay connected! We are always ready to help you.
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={RentalCarSchema}
				onSubmit={handleSubmit}
			>
				{({ setFieldValue, values }) => (
					<Form className={css.wrapper}>
						<Field
							type="text"
							name="name"
							className={css.field}
							placeholder="Name*"
						/>
						<ErrorMessage className={css.error} name="name" component="span" />
						<Field
							type="email"
							name="email"
							className={css.field}
							placeholder="Email*"
						/>
						<ErrorMessage className={css.error} name="email" component="span" />

						<DatePicker
							selected={values.date}
							onChange={(date) => setFieldValue("date", date)}
							dateFormat="yyyy/MM/dd"
							className={css.field}
							placeholderText="Booking date"
						/>
						<ErrorMessage className={css.error} name="date" component="span" />

						<Field
							as="textarea"
							rows="2"
							name="comment"
							placeholder="Comment"
							className={css.field}
							style={{ resize: "none" }}
						/>
						<Button type="submit" text="Send" value="send" />
					</Form>
				)}
			</Formik>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
			/>
		</div>
	);
}
