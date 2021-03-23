import React, { useState } from 'react';
import cx from 'classnames';

import SideMenuButton from 'components/SideMenuButton';

import { BASIC_ROUTES, EXAMPLE_TAGS } from './index.utils';
import styles from './styles.css';

type PropsType = {
	expanded?: boolean;
};
const SideMenu: React.FC<PropsType> = ({ expanded }: PropsType) => {
	const [activeTab, setActiveTab] = useState({
		name: BASIC_ROUTES.NOTES,
		tag: false,
	});

	const openEditTagsModal = () => {
		console.log('Opens modal for tag editing...');
	};

	const sideMenuClasses = cx(styles.sideMenu, {
		[styles.expanded]: expanded,
	});

	return (
		<div className={sideMenuClasses}>
			<SideMenuButton
				title="Notes"
				icon="lightbulb"
				active={activeTab.name === BASIC_ROUTES.NOTES && !activeTab.tag}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.NOTES, tag: false })}
				expanded={expanded}
			/>
			<SideMenuButton
				title="Reminders"
				icon="bell"
				active={activeTab.name === BASIC_ROUTES.REMINDERS}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.REMINDERS, tag: false })}
				expanded={expanded}
			/>
			{EXAMPLE_TAGS.map((tag) => (
				<SideMenuButton
					key={tag}
					title={tag}
					icon="tag"
					active={activeTab.name === tag && activeTab.tag}
					onClick={() => setActiveTab({ name: tag, tag: true })}
					expanded={expanded}
				/>
			))}
			<SideMenuButton title="Edit tags" icon="pencil" active={false} onClick={openEditTagsModal} expanded={expanded} />
			<SideMenuButton
				title="Archive"
				icon="file-archive"
				active={activeTab.name === BASIC_ROUTES.ARCHIVE}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.ARCHIVE, tag: false })}
				expanded={expanded}
			/>
			<SideMenuButton
				title="Trash"
				icon="trash-empty"
				active={activeTab.name === BASIC_ROUTES.TRASH}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.TRASH, tag: false })}
				expanded={expanded}
			/>
		</div>
	);
};

SideMenu.defaultProps = {
	expanded: true,
};

export default SideMenu;
