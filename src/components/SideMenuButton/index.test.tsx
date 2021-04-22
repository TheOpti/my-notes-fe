import React from 'react';
import { mount } from 'enzyme';
import SideMenuButton from './';

const noop = () => {};

describe('SideMenuButton', () => {
	it('should render correctly without any issues', () => {
		const wrapper = mount(
			<SideMenuButton title="Side menu title" icon="tag" active={false} expanded={false} onClick={noop} />
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('should call onClickHandler function when SideMenuButton is actually clicked', () => {
		const mockFunction = jest.fn();

		const wrapper = mount(
			<SideMenuButton title="Side menu title" icon="tag" active={false} expanded={false} onClick={mockFunction} />
		);

		wrapper.find({ 'data-testid': 'sidemenu-button' }).simulate('click');
		expect(mockFunction).toHaveBeenCalled();
	});

	it('should not display text when button is not expanded', () => {
		const wrapper = mount(
			<SideMenuButton title="Side menu title" icon="tag" active={false} expanded={false} onClick={noop} />
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('should correctly toggle title when button is clicked', () => {
		const wrapper = mount(
			<SideMenuButton title="Side menu title" icon="tag" active={false} expanded={false} onClick={noop} />
		);

		expect(wrapper.find({ 'data-testid': 'title-collapsed' }).html()).toEqual(
			'<div class="title" data-testid="title-collapsed">Side menu title</div>'
		);

		wrapper.setProps({ expanded: true });

		expect(wrapper.find({ 'data-testid': 'title-expanded' }).html()).toEqual(
			'<div class="title" data-testid="title-expanded">Side menu title</div>'
		);
	});
});
