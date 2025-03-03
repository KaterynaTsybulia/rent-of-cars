import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { changeFilter } from "../../redux/filter/slice";
import { apiFetchBrands, apiFetchCars } from "../../redux/cars/operations";
import { selectBrands, selectCars } from "../../redux/cars/selectors";

import Button from "../Button/Button";
import fixedPrices from "../../utils/filter.json";
import Select from "../Select/Select";

import css from "./SearchForm.module.css";

const INITIAL_VALUE = {
	brand: "",
	rentalPrice: "",
	minMileage: "",
	maxMileage: "",
};

const SearchForm = ({ page, setPage }) => {
	const dispatch = useDispatch();
	const brands = useSelector(selectBrands);

	useEffect(() => {
		dispatch(apiFetchBrands());
	}, [dispatch]);

	const handleSubmit = (values) => {
		setPage(1);
		dispatch(changeFilter(values));
		dispatch(apiFetchCars(page));
	};

	return (
		<Formik initialValues={INITIAL_VALUE} onSubmit={handleSubmit}>
			<Form className={css.form}>
				<div>
					<label className={css.label} htmlFor="brand">
						Car brand
					</label>
					<Field
						id="brand"
						name="brand"
						component={Select}
						options={brands}
						placeholder="Choose a brand"
						className={`${css.input} ${css.brand}`}
					/>
				</div>

				<div>
					<label className={css.label} htmlFor="price">
						Price/ 1 hour
					</label>
					<Field
						id="rentalPrice"
						name="rentalPrice"
						component={Select}
						options={fixedPrices}
						placeholder="Choose a price"
						className={`${css.input} ${css.price}`}
					/>
				</div>

				<div>
					<label className={css.label} htmlFor="mileage">
						Car mileage / km
					</label>
					<div className={css.divKm}>
						<Field
							className={css.input}
							id="minMileage"
							name="minMileage"
							type="number"
							placeholder="From"
						/>
						<Field
							className={css.input}
							id="maxMileage"
							name="maxMileage"
							type="number"
							placeholder="To"
						/>
					</div>
				</div>
				<Button text="Search" value="search" type="submit" />
			</Form>
		</Formik>
	);
};

export default SearchForm;
