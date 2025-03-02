import { useDispatch, useSelector } from "react-redux";

import { selectFavourites } from "../../redux/filter/selectors";
import { addFavourite, deleteFavourite } from "../../redux/filter/slice";

// import Icon from '../Icon/Icon';

import css from "./FavouriteBtn.module.css";

const FavouriteBtn = ({ id, favourite }) => {
	const dispatch = useDispatch();
	const favourites = useSelector(selectFavourites);

	const handleClick = () => {
		const isFavourite = favourites.find((item) => item === id);

		if (!isFavourite) {
			dispatch(addFavourite(id));
			return;
		}
		dispatch(deleteFavourite(id));
	};

	return (
		<button className={css.btn} onClick={handleClick}>
			{favourite ? (
				<Icon id={"icon-favourite"} width={16} height={16} />
			) : (
				<Icon id={"icon-favourite-no"} width={16} height={16} />
			)}
		</button>
	);
};

export default FavouriteBtn;
