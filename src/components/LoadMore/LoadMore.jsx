import { useSelector } from "react-redux";

import { selectTotalPages } from "../../redux/cars/selectors";
import Button from "../Button/Button";

const LoadMore = ({ page, setPage }) => {
	const totalPages = useSelector(selectTotalPages);

	const handleClick = () => {
		setPage(page + 1);
		console.log("setPage:", setPage);
	};

	return (
		<>
			{totalPages !== null && totalPages > page && (
				<Button
					type="button"
					text="LoadMore"
					value="loadmore"
					onClick={handleClick}
				/>
			)}
		</>
	);
};

export default LoadMore;
