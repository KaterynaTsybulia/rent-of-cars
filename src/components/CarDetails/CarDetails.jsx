import Icon from "../Icon/Icon";
import { formatAddress, formatMileage } from "../../utils/formatData";
import css from "./CarDetails.module.css";

export default function CarDetails({ carDetails }) {
	const { brand, model, year, rentalPrice, address, mileage, description } =
		carDetails;

	return (
		<div className={css.container}>
			<div className={css.line}>
				<h1 className={css.name}>
					{brand} {model}, {year}
				</h1>
				<p className={css.id}>Id: 9582</p>
			</div>
			<div className={css.line}>
				<p className={css.text}>
					<Icon id="icon-location" className="svg" />
					{formatAddress(address)}
				</p>
				<p className={css.text}>Mileage: {formatMileage(mileage)}</p>
			</div>
			<p className={css.price}>${rentalPrice}</p>
			<p className={css.text}>{description}</p>
		</div>
	);
}
