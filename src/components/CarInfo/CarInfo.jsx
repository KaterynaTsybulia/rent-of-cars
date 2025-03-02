// import { Icon } from "../Icon/Icon";
import css from "./CarInfo.module.css";

export default function CarInfo({ carDetails }) {
	const {
		rentalConditions,
		accessories,
		functionalities,
		year,
		type,
		fuelConsumption,
		engineSize,
	} = carDetails;

	return (
		<div className={css.box}>
			<div>
				<h2 className={css.title}>Rental Conditions: </h2>
				<ul className={css.list}>
					{rentalConditions.map((value, index) => (
						<li key={index} className={css.item}>
							{/* <Icon/> */}
							<p>{value}</p>
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2 className={css.title}>Car Specifications:</h2>
				<ul className={css.list}>
					<li className={css.item}>
						{/* <Icon/> */}
						<p>Year: {year}</p>
					</li>
					<li className={css.item}>
						{/* <Icon/> */}
						<p>Type: {type}</p>
					</li>
					<li className={css.item}>
						{/* <Icon/> */}
						<p>Fuel Consumption: {fuelConsumption}</p>
					</li>
					<li className={css.item}>
						{/* <Icon/> */}
						<p>Engine Size: {engineSize}</p>
					</li>
				</ul>
			</div>
			<div>
				<h2 className={css.title}>Accessories and functionalities:</h2>
				<ul className={css.list}>
					{[...accessories, ...functionalities].map((value, index) => (
						<li key={index} className={css.item}>
							{/* <Icon/> */}
							<p>{value}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
