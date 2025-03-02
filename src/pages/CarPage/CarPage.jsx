import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FormRental from "../../components/FormRental/FormRental";
import CarDetails from "../../components/CarDetails/CarDetails";
import CarInfo from "../../components/CarInfo/CarInfo";

import { apiFetchCarInfo } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";

import css from "./CarPage.module.css";
import Loader from "../../components/Loader/Loader";

export default function CarPage() {
	const cars = useSelector(selectCars);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(apiFetchCarInfo(id));
	}, [dispatch, id]);

	if (!cars || cars.length === 0) return <div>Loading...</div>;

	const car = cars.find((car) => car.id === id);
	if (!car) return <div>Car not found</div>;
	const { img } = car;

	if (!cars) return <Loader />;

	return (
		<div className={css.carPage}>
			<div>
				<img className={css.img} src={img} alt="" />
				<FormRental />
			</div>
			<div className={css.container}>
				<CarDetails carDetails={car} />
				<CarInfo carDetails={car} />
			</div>
		</div>
	);
}
