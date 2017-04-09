import React from 'react';
import styles from './Grid.sass';

const Row = ({children, el = 'div', className}) => {
	const classNameSplit = className ? className.split(' ') : [];
	const classNames = [
		styles.Row,
		...classNameSplit
	].join(' ').trim();

	return React.createElement(el, { className: classNames }, children);
};

export default Row;