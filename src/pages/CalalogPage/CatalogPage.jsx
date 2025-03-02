import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import LoadMore from "../../components/LoadMore/LoadMore";

import { selectLoading } from "../../redux/cars/selectors";
import { apiFetchCars } from "../../redux/cars/operations";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(apiFetchCars(page));
	}, [dispatch, page]);

	return (
		<div className={css.catalogPage}>
			{loading && <Loader />}
			<SearchForm page={page} setPage={setPage} />
			<CarsList />
			<LoadMore page={page} setPage={setPage} />
		</div>
	);
};

export default CatalogPage;
