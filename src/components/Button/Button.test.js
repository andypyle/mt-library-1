import React from 'react';
import { mount, shallow, render} from 'enzyme';
import { expect } from 'chai';
import styles from './Button.sass';

import Button from './Button.js';



describe('<Button text="Button" />', () => {
	const wrapper = mount(<Button text="Button" />);
	it('should render', () => {
		expect(wrapper).to.have.length(1);
	});

	it('needs a text prop', () => {
		expect(wrapper.props().text).to.exist;
	});

	it('renders text as Button', () => {
		expect(wrapper.text()).to.equal('Button');
	})

	it('it should have Button, filled, and blue classes by default', () => {
		expect(wrapper.hasClass(styles.Button)).to.equal(true);
		expect(wrapper.hasClass(styles.filled)).to.equal(true);
		expect(wrapper.hasClass(styles.blue)).to.equal(true);
	});
});

describe('<Button text="Orange Button" color="orange" />', () => {
	const wrapper = shallow(<Button text="Orange Button" color="orange" />);

	it('should have filled and orange classes', () => {
		expect(wrapper.hasClass(styles.filled)).to.equal(true);
		expect(wrapper.hasClass(styles.orange)).to.equal(true);
	});
});

describe('<Button text="Outlined Button" color="green" />', () => {
	const wrapper = shallow(<Button btnStyle="outline" text="Outlined Button" color="green" />);
	it('should have outline and green classes', () => {
		expect(wrapper.hasClass(styles.outline)).to.equal(true);
		expect(wrapper.hasClass(styles.green)).to.equal(true);
	});
});

describe('<Button href="#" text="Dark Blue Button as anchor tag." color="darkblue" />', () => {
	const wrapper = shallow(<Button href="#" text="Dark Blue Button as anchor tag." color="darkblue" />);

	it('should have filled and darkblue classes', () => {
		expect(wrapper.hasClass(styles.filled)).to.equal(true);
		expect(wrapper.hasClass(styles.darkblue)).to.equal(true);
	});

	it('should render an anchor tag', () => {
		expect(wrapper.node.type).to.equal('a');
	});
});

describe('<Button onClick={() => clickNum = clickNum + 1} text="Click Me" />', () => {
	it('should invoke onClick function on click', () => {
		let clickNum = 1;
		const wrapper = shallow(<Button onClick={() => clickNum = clickNum + 1} text="Click Me" />);

		expect(clickNum).to.equal(1);
		wrapper.simulate('click');
		expect(clickNum).to.equal(2);
	});
});

describe('<Button onContextMenu={() => contextNum = contextNum * 10} text="Right Click Me" />', () => {
	it('should invoke onContextMenu function on right click', () => {
		let contextNum = 1;
		const wrapper = shallow(<Button onContextMenu={() => contextNum = contextNum * 10} text="Right Click Me" />);

		expect(contextNum).to.equal(1);
		wrapper.simulate('contextMenu');
		expect(contextNum).to.equal(10);
	});
})

describe('<Button text="Dropdown menu."><Button text="Menu Item 1" /><Button text="Menu Item 2" /></Button>', () => {
	const wrapper = shallow(<Button text="Dropdown menu."><Button text="Menu Item 1" /><Button text="Menu Item 2" /></Button>);

	it('should render two children', () => {
		expect(wrapper.find('div').children().length).to.equal(2);
	});

	it('should render an anchor followed by an unordered list', () => {
		expect(wrapper.find('div').childAt(0).node.type).to.equal('a');
		expect(wrapper.find('div').childAt(1).node.type).to.equal('ul');
	});

	describe('dropdown list', () => {
		const DropdownList = wrapper.find('div').find('ul');
		it('should contain two children', () => {
			expect(DropdownList.children().length).to.equal(2);
		});

		it('should contain two Button components', () => {
			expect(DropdownList.find(Button).length).to.equal(2);
		})
	})
});