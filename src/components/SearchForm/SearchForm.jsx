import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../redux/filter/slice";
import { apiFetchCars } from "../../redux/cars/operations";
import { selectAllBrands } from "../../redux/cars/selectors";
import css from "./SearchForm.module.css";

const initialValues = {
	brand: "",
	price: "",
	mileage: { from: "", to: "" },
};

const SearchForm = ({ setPage }) => {
	const dispatch = useDispatch();
	const brands = useSelector(selectAllBrands);

	const handleSubmit = (values) => {
		setPage(1);
		dispatch(changeFilters(values));

		dispatch(apiFetchCars(1));
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={css.form}>
				<div className={css.fieldWrapper}>
					<label className={css.label} htmlFor="brand">
						Car brand
					</label>
					<Field
						id="brand"
						name="brand"
						options={brands}
						placeholder="Choose a brand"
					/>
				</div>

				<div className={css.fieldWrapper}>
					<label className={css.label} htmlFor="price">
						Price
					</label>
					<Field id="price" name="price" placeholder="Choose a price" />
				</div>

				<div className={css.fieldWrapper}>
					<label className={css.label} htmlFor="mileage">
						Mileage (km)
					</label>
					<div className={css.mileageInputWrapper}>
						<Field
							className={css.mileageInput}
							id="mileage.from"
							name="mileage.from"
							type="number"
							placeholder="From"
						/>
						<Field
							className={css.mileageInput}
							id="mileage.to"
							name="mileage.to"
							type="number"
							placeholder="To"
						/>
					</div>
				</div>

				<button type="submit" className={css.submitButton}>
					Search
				</button>
			</Form>
		</Formik>
	);
};

export default SearchForm;
