import sprite from "../../assets/icons/sprite.svg";

const Icon = ({ id, width = 16, height = 16 }) => {
	return (
		<svg width={width} height={height}>
			<use href={`${sprite}#${id}`} />
		</svg>
	);
};

export default Icon;
