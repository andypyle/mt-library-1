import { createElement, PropTypes } from 'react';
import styles from './Button.sass';

const ButtonGroup = ({
	children,
	btnStyle,
	rounded,
	flex,
	vertical,
	className = ''
}) => {
	const additionalClassNames = className.split(' ');
	const classNames = [
		styles.ButtonGroup,
		flex && styles.groupFlex,
		vertical && styles.vertical,
		...additionalClassNames
	].join(' ').trim();

	return createElement('div', {className: classNames}, children);
}

ButtonGroup.propTypes = {
	children: PropTypes.node,
	btnStyle: PropTypes.oneOf(['filled', 'outline']),
	rounded: PropTypes.bool,
	className: PropTypes.string,
	flex: PropTypes.bool
}

export default ButtonGroup;