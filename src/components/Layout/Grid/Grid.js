import React from 'react';
import styles from './Grid.sass';

const Grid = ({children, el = 'div', className}) => {
	const classNameSplit = className ? className.split(' ') : [];
	const classNames = [
		styles.Grid,
		...classNameSplit
	].join(' ').trim();

	return React.createElement(el, { className: classNames }, children);
}

export default Grid;