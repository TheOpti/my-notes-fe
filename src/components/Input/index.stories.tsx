import * as React from 'react';
import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Input from './';

storiesOf('Input', module).add('basic input with label', () => {
	const [state, setState] = useState('');

	return (
		<Input
			label="Field"
			name="fieldName"
			value={state}
			handleChange={(_, value) => {
				setState(value);
			}}
		/>
	);
});
