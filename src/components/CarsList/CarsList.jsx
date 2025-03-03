import { useSelector } from "react-redux";
import { selectCars, selectCarsFavourites } from "../../redux/cars/selectors";
import CarItem from "../CarItem/CarItem";

import css from "./CarsList.module.css";

const CarsList = () => {
	const cars = useSelector(selectCars);
	const carsFavourites = useSelector(selectCarsFavourites) || [];

	if (!cars || !carsFavourites || cars.length === 0) {
		return <p>Nothing found matching your criteria</p>;
	}

	return (
		<ul className={css.ulList}>
			{cars.length > 0 && cars.map((car) => <CarItem key={car.id} car={car} />)}
		</ul>
	);
};

export default CarsList;
