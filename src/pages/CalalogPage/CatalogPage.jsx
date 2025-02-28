import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList";
import SearchForm from "../../components/SearchForm/SearchForm";

import { apiFetchCars } from "../../redux/cars/operations";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
	const dispatch = useDispatch();
	// const loading = useSelector(selectLoading);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(apiFetchCars(page));
	}, [dispatch, page]);

	return (
		<div className={css.catalogPage}>
			<SearchForm page={page} setPage={setPage} />
			<CarsList />
		</div>
	);
};

export default CatalogPage;
