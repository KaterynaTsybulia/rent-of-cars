import { Link } from "react-router-dom";

import Button from "../Button/Button";
import FavouriteBtn from "../FavouriteBtn/FavouriteBtn";

import { formatMileage, typeOfCar } from "../../utils/formatData";

import css from "./CarItem.module.css";

const CarItem = ({ car, favourites }) => {
	const {
		brand,
		model,
		year,
		rentalPrice,
		address,
		rentalCompany,
		type,
		mileage,
		img,
		description,
		id,
	} = car;

	return (
		<li className={css.liItem}>
			<div className={css.wrapperCard}>
				<img src={img} alt={description} className={css.img} />
				<FavouriteBtn id={id} favourites={favourites} />
				<div className={css.title}>
					<p className={css.text}>
						{brand} <span className={css.model}>{model}</span>, {year}
					</p>
					<p className={css.text}>${rentalPrice}</p>
				</div>
				<ul className={css.info}>
					<li className={css.details}>{address?.split(",")[1]}</li>
					<li className={css.details}>{address?.split(",")[2]}</li>
					<li className={css.details}>{rentalCompany}</li>
				</ul>
				<ul className={css.info}>
					<li className={css.details}>{typeOfCar(type)}</li>
					<li className={css.details}>{formatMileage(mileage)}</li>
				</ul>
				<Link to={`/catalog/${id}`}>
					<Button text="Read more" value="readmore" />
				</Link>
			</div>
		</li>
	);
};

export default CarItem;
