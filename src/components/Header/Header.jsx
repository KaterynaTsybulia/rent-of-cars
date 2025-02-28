import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import logo from "../../assets/icons/Logo.svg";

import css from "./Header.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<Link to="/">
					<img src={logo} alt="Logo" width="104" height="16" />
				</Link>
				<Navigation />
			</div>
		</header>
	);
}
