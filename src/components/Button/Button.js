import React, { createElement, PropTypes } from 'react';
import styles from './Button.sass';

const mapChildrenFunction = (child, index) => {
	return <li key={`Dropdown-${index}`} className={styles.ButtonDropdownListItem}>{child}</li>
}

const Button = ({
		text,
		href,
		btnStyle = 'filled',
		color = 'blue',
		size = 'medium',
		rounded,
		onClick,
		onContextMenu,
		className = '',
		dropdownSide = 'left',
		children
	}) => {
	const additionalClassnames = className.split(' ');

	// Lets build our classnames, join em, and trim em.
	const classNames = [
		styles.Button,
		styles[color],
		styles[size],
		styles[btnStyle],
		rounded && styles.rounded,
		children && styles.DropdownContainer,
		...additionalClassnames
	].join(' ').trim();

	// No use passing undefined event handlers when not needed.
	let events = {};
	if (onClick) 				events.onClick = onClick;
	if (onContextMenu) 	events.onContextMenu = onContextMenu;

	// If href prop is present, it is an anchor.
	const elementType = (href || children) ? 'a' : 'button';

	// TODO: Add icon.
	const elementContents = children ?
		createElement('span', null, text, createElement('span', { style: { lineHeight: '0', marginLeft: '.5rem' } }, `\u25BC`)) :
		text;

	// If children are present, it's probably a dropdown.
	const mappedChildren = children && React.Children.toArray(children).map(mapChildrenFunction);
	const renderChildren = mappedChildren && createElement('ul', { className: [styles.ButtonDropdownList, dropdownSide === 'left' ? styles.ButtonDropdownSideLeft : styles.ButtonDropdownSideRight].join(' ').trim() }, mappedChildren);

	const renderButton = createElement(children ? 'div' : elementType, { href, ...events, className: classNames }, elementContents);

	if (renderChildren) {
		return createElement('div', { className: styles.DropdownContainer }, renderButton, renderChildren)
	}

	return renderButton;
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

export default Button;