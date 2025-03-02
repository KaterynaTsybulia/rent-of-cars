import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters, INITIAL_STATE } from "../../redux/filter/slice";
import { apiFetchBrands, apiFetchCars } from "../../redux/cars/operations";
import { selectBrands, selectCars } from "../../redux/cars/selectors";
import css from "./SearchForm.module.css";
import { useEffect } from "react";
import Button from "../Button/Button";
import fixedPrices from "../../utils/filter.json";
import Select from "../Select/Select";

const INITIAL_VALUE = {
	brand: "",
	rentalPrice: "",
	minMileage: "",
	maxMileage: "",
};

const SearchForm = ({ page, setPage }) => {
	const dispatch = useDispatch();
	const cars = useSelector(selectCars);
	const brands = useSelector(selectBrands);

	useEffect(() => {
		dispatch(apiFetchBrands());
		dispatch(apiFetchCars());
	}, [dispatch]);

	const handleSubmit = (values) => {
		setPage(1);
		dispatch(changeFilters(values));
		dispatch(apiFetchCars());
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
						id="price"
						name="price"
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
							id="mileage.from"
							name="mileage.from"
							type="number"
							placeholder="From"
						/>
						<Field
							className={css.input}
							id="mileage.to"
							name="mileage.to"
							type="number"
							placeholder="To"
						/>
					</div>
				</div>
				<Button text="Search" value="search" />
			</Form>
		</Formik>
	);
};

export default SearchForm;
