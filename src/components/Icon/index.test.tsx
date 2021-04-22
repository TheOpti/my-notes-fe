import React from 'react';
import { mount } from 'enzyme';
import Icon from './';

describe('Icon', () => {
	it('should render correctly without any issues', () => {
		const wrapper = mount(<Icon size="small" name="pencil" />);

		expect(wrapper).toMatchSnapshot();
	});
});
