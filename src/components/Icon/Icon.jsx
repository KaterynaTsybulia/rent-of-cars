const Icon = ({ id, width = 16, height = 16, className = "" }) => {
	return (
		<svg width={width} height={height} className={className}>
			<use href={`/src/assets/icons/sprite.svg${id}`} />
		</svg>
	);
};

export default Icon;
