import React from 'react';
import styles from './Grid.sass';

const Col = ({children, el = 'div', className}) => {
	const classNameSplit = className ? className.split(' ') : [];
	const classNames = [
		styles.Col,
		...classNameSplit
	].join(' ').trim();

	return React.createElement(el, { className: classNames }, children);
};

export default Col;