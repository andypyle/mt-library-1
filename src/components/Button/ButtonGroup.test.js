import React from 'react';
import { mount, shallow, render} from 'enzyme';
import { expect } from 'chai';
import styles from './Button.sass';

import ButtonGroup from './ButtonGroup.js';
import Button from './Button.js';



describe('<ButtonGroup><Button text="Button 1" /><Button text="Button 2" /></ButtonGroup>', () => {
	const wrapper = mount(<ButtonGroup><Button text="Button 1" /><Button text="Button 2" /></ButtonGroup>);
	it('should render', () => {
		expect(wrapper).to.have.length(1);
	});

	it('has the correct classes', () => {
		expect(wrapper.hasClass(styles.ButtonGroup)).to.equal(true);
	});

	it('has two children', () => {
		expect(wrapper.children().length).to.equal(2);
	});

	it('has Buttons for children', () => {
		expect(wrapper.find(Button).length).to.equal(2);
	});
});


describe('<ButtonGroup vertical><Button text="Button 1" /><Button text="Button 2" /></ButtonGroup>', () => {
	const wrapper = mount(<ButtonGroup vertical><Button text="Button 1" /><Button text="Button 2" /></ButtonGroup>);
	it('should have the vertical class', () => {
		expect(wrapper.hasClass(styles.vertical)).to.equal(true);
	})
});