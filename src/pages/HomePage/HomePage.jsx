import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import css from "./HomePage.module.css";

export default function HomePage() {
	return (
		<div className={css.homePage}>
			<div className={css.container}>
				<h1 className={css.title}>Find your perfect rental car</h1>
				<p className={css.text}>
					Reliable and budget-friendly rentals for any journey
				</p>
				<Link to={`/catalog`}>
					<Button text="View Catalog" />
				</Link>
			</div>
		</div>
	);
}
