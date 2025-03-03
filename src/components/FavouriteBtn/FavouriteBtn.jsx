import { useDispatch } from "react-redux";

import { addFavourite, deleteFavourite } from "../../redux/filter/slice";

import Icon from "../Icon/Icon";

import css from "./FavouriteBtn.module.css";

const FavouriteBtn = ({ id, favourites }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		if (favourites.includes(id)) {
			dispatch(deleteFavourite(id));
		} else {
			dispatch(addFavourite(id));
		}
	};

	const isFavourite = favourites.includes(id);

	return (
		<button className={css.btn} onClick={handleClick}>
			<Icon
				id={isFavourite ? "icon-favourite" : "icon-favourite-no"}
				width={16}
				height={16}
			/>
		</button>
	);
};

export default FavouriteBtn;
