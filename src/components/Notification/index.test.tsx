import React from 'react';
import { mount } from 'enzyme';
import Notification from './';

describe('Notification', () => {
	it('should mount Notification without any issues', () => {
		const wrapper = mount(<Notification title="Example title" hideNotification={jest.fn()} />);

		expect(wrapper.find('div[data-testid="notification"]')).toHaveLength(1);
		expect(wrapper.find('div[data-testid="title"]')).toHaveLength(1);
	});

	it('should mount Notification Rollback label when notification is revocable', () => {
		const wrapper = mount(
			<Notification title="Example title" hideNotification={jest.fn()} revocable rollbackAction={jest.fn()} />
		);

		expect(wrapper.find('button[data-testid="rollback-btn"]')).toHaveLength(1);
	});

	it('should call passed revokeAction function when button "Rollback" is clicked', () => {
		const rollbackAction = jest.fn();

		const wrapper = mount(
			<Notification title="Example title" hideNotification={jest.fn()} revocable rollbackAction={rollbackAction} />
		);

		const rollbackBtn = wrapper.find('button[data-testid="rollback-btn"]');
		rollbackBtn.simulate('click');

		expect(rollbackAction).toHaveBeenCalled();
	});
});
