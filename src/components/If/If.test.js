import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import If from './If.js';

describe('<If condition={ 2 + 2 === 4 }><span>Yes</span><span>No</span></If>', () => {
	const wrapper = shallow(<If condition={ 2 + 2 === 4 }><span>Yes</span><span>No</span></If>);

	it('should render Yes if condition is true', () => {
		expect(wrapper.find('span').text()).to.equal('Yes');
	})
});

describe('<If condition={ 2 + 2 === 5 }><span>Yes</span><span>No</span></If>', () => {
	const wrapper = shallow(<If condition={ 2 + 2 === 5 }><span>Yes</span><span>No</span></If>);

	it('should render No if condition is false', () => {
		expect(wrapper.find('span').text()).to.equal('No');
	})
});

describe('<If condition={ 2 + 2 === 5 }><span>Yes</span><span>No</span><span>Maybe</span></If>', () => {
	const wrapper = shallow(<If condition={ 2 + 2 === 5 }><span>Yes</span><span>No</span></If>);

	it('should only render child 1 or child 2, never the third', () => {
		expect(wrapper.find('span')).to.have.lengthOf(1);
		expect(wrapper.find('span').text()).to.equal('No');
	})
});