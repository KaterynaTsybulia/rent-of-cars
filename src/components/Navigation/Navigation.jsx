import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

export default function Navigation() {
	const buildIsActive = ({ isActive }) => clsx(css.link, isActive && css.active);

	return (
		<header>
			<div className={css.container}>
				<NavLink className={buildIsActive} to="/">
					Home
				</NavLink>
				<NavLink className={buildIsActive} to="/catalog">
					Catalog
				</NavLink>
			</div>
		</header>
	);
}

