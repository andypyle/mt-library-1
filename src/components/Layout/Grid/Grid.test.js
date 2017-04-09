import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import styles from './Grid.sass';

import Grid from './Grid.js';
import Row from './Row.js';
import Col from './Col.js';

describe('<Grid></Grid>', () => {
	const plainGrid = shallow(<Grid></Grid>);

	it('should render', () => {
		expect(plainGrid).to.have.lengthOf(1);
	})

	describe('<Grid><Row><h1>Grid Component</h1></Row></Grid>', () => {
		const gridWithRow = mount(<Grid><Row><h1>Grid Component</h1></Row></Grid>);

		it('should have correct default classes', () => {
			expect(gridWithRow.hasClass(styles.Grid)).to.be.true;
			expect(gridWithRow.find(Row).hasClass(styles.Row)).to.be.true;
		})

		it('should render a row component', () => {
			expect(gridWithRow.find(Row)).to.have.lengthOf(1);
		})

		it('should render an h1 with the text Grid Component inside the row', () => {
			expect(gridWithRow.find(Row).find('h1')).to.have.lengthOf(1);
			expect(gridWithRow.find(Row).find('h1').text()).to.equal('Grid Component');
		})
	})


	describe('<Grid className="CustomClassName"></Grid>', () => {
		const gridWithCustomClassName = shallow(<Grid className="CustomClassName"></Grid>);

		it('should add additional classNames', () => {
			expect(gridWithCustomClassName.hasClass(styles.Grid)).to.be.true;
			expect(gridWithCustomClassName.hasClass('CustomClassName')).to.be.true;
		})
	})


	describe('<Grid><Row><Col></Col><Col></Col></Row></Grid>', () => {
		const gridWithRowAndTwoColumns = shallow(<Grid><Row><Col></Col><Col></Col></Row></Grid>);

		it('should render a row with two columns inside', () => {
			expect(gridWithRowAndTwoColumns.find(Row)).to.have.lengthOf(1);
			expect(gridWithRowAndTwoColumns.find(Row).find(Col)).to.have.lengthOf(2);
		})
	})
})