import * as React from 'react';
import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Input from './';

const btnWrapperStyle = {
	margin: '20px',
	width: '350px',
};

storiesOf('Input', module).add('basic input with label', () => {
	const [state, setState] = useState('');

	return (
		<>
			<div style={btnWrapperStyle}>
				<Input
					label="Field"
					name="fieldName"
					value={state}
					handleChange={(_, value) => {
						setState(value);
					}}
				/>
			</div>
			<div style={btnWrapperStyle}>
				<Input label="Entered value - enabled" name="disabled" value="Entered value" />
			</div>
			<div style={btnWrapperStyle}>
				<Input label="Disabled input" name="disabled" value="Entered value" disabled />
			</div>
		</>
	);
});
