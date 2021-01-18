import * as React from 'react';
import { storiesOf } from '@storybook/react';

import styles from './styles.css';
import Icon from './';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { root, small, medium, large, ...rest } = styles;

storiesOf('Icon', module)
	.add('All icons', () => (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{Object.keys(rest).map((iconName) => (
				<div key={iconName} style={{ margin: '20px 10px', textAlign: 'center', width: '80px' }}>
					<Icon name={iconName} />
					<p>{iconName}</p>
				</div>
			))}
		</div>
	))
	.add('With sizing', () => (
		<div style={{ display: 'flex' }}>
			<div style={{ margin: '20px 10px', textAlign: 'center', width: '80px' }}>
				<Icon name="tag" size="small" />
				<p>Small</p>
			</div>
			<div style={{ margin: '20px 10px', textAlign: 'center', width: '80px' }}>
				<Icon name="tag" size="medium" />
				<p>Medium</p>
			</div>
			<div style={{ margin: '20px 10px', textAlign: 'center', width: '80px' }}>
				<Icon name="tag" size="large" />
				<p>Large</p>
			</div>
		</div>
	));
