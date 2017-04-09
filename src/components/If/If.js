import React, { PropTypes } from 'react';

const If = ({condition, children}) => {
	const [IfTrue, IfFalse] = React.Children.toArray(children);
	return condition ? IfTrue : IfFalse
};

If.propTypes = {
	condition: PropTypes.bool.isRequired,
	children: (props, propName, componentName) => {
		if (React.Children.toArray(props[propName]).length > 2) {
			throw new Error('`' + componentName + '` expects no more than 2 children.');
		}
	}
};

export default If;