import React from 'react';
import { storiesOf } from '@storybook/react';

import Notification from './';

storiesOf('Notification', module).add('basic case of notification', () => {
	const onActionRollback = () => console.log('onActionRollback callback');
	const hideNotification = () => console.log('hideNotification callback');

	return (
		<Notification
			title="Note moved to archive"
			revocable
			rollbackAction={onActionRollback}
			hideNotification={hideNotification}
		/>
	);
});
