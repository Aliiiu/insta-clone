import { CSSProperties } from 'react';

const arrowSize = 24;
const arrowOffset = 20;
const arrow: CSSProperties = {
	color: '#8E8E8E',
	fontSize: 38,
	height: arrowSize,
	width: arrowSize,
	zIndex: 1,
};
export const ArrowStyles = {
	leftArrow: {
		left: arrowOffset,
		top: 50,
		width: '24px',
		height: '24px',
		backgroundColor: '#fff',
		fontSize: '38px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: '50%',
		...arrow,
	},
	rightArrow: {
		right: arrowOffset,
		top: 50,
		color: '#8E8E8E',
		width: '24px',
		height: '24px',
		backgroundColor: '#fff',
		fontSize: '38px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: '50%',
		...arrow,
	},
};
