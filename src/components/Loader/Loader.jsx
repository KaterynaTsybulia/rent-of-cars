import { RiseLoader } from "react-spinners";

import css from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={css.spinner}>
			<RiseLoader />
		</div>
	);
};

export default Loader;
