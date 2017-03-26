import React, { createElement, PropTypes } from 'react';
import styles from './Button.sass';

const Button = ({ text, href, style = 'filled', color = 'blue', size = 'medium', rounded, onClick, onContextMenu, className = '' }) => {
	const additionalClassnames = className.split(' ');

	// Lets build our classnames, join em, and trim em.
	let classNames = [
		...additionalClassnames,
		styles.Button,
		styles[color],
		styles[size],
		styles[style],
		rounded && styles.rounded,
	].join(' ').trim();

	// No use passing undefined event handlers when not needed.
	let events = {};
	if (onClick) 				events.onClick = onClick;
	if (onContextMenu) 	events.onContextMenu = onContextMenu;

	return createElement(href ? 'a' : 'button', {href, ...events, className: classNames}, text);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	style: PropTypes.oneOf(['filled', 'outline']),
	color: PropTypes.oneOf(['blue', 'green', 'red']),
	rounded: PropTypes.bool,
	onClick: PropTypes.func,
	onContextMenu: PropTypes.func,
	className: PropTypes.string
}

export default Button;