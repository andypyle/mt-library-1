import { createElement, PropTypes } from 'react';
import styles from './Button.sass';

const Button = ({
		text,
		href,
		btnStyle = 'filled',
		color = 'blue',
		size = 'medium',
		rounded,
		onClick,
		onContextMenu,
		className = ''
	}) => {
	const additionalClassnames = className.split(' ');

	// Lets build our classnames, join em, and trim em.
	const classNames = [
		styles.Button,
		styles[color],
		styles[size],
		styles[btnStyle],
		rounded && styles.rounded,
		...additionalClassnames
	].join(' ').trim();

	// No use passing undefined event handlers when not needed.
	let events = {};
	if (onClick) 				events.onClick = onClick;
	if (onContextMenu) 	events.onContextMenu = onContextMenu;

	return createElement(href ? 'a' : 'button', {href, ...events, className: classNames}, text);
}

Button.propTypes = {
	text: PropTypes.node.isRequired,
	href: PropTypes.string,
	btnStyle: PropTypes.oneOf(['filled', 'outline']),
	color: PropTypes.oneOf([
		'blue',
		'darkblue',
		'green',
		'red',
		'orange',
		'black',
		'white'
	]),
	rounded: PropTypes.bool,
	onClick: PropTypes.func,
	onContextMenu: PropTypes.func,
	className: PropTypes.string
}

const ButtonGroup = ({
	children,
	btnStyle,
	rounded,
	flex,
	className = ''
}) => {
	const additionalClassNames = className.split(' ');
	const classNames = [
		styles.ButtonGroup,
		rounded && styles.groupRounded,
		flex && styles.groupFlex,
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

export { Button, ButtonGroup };