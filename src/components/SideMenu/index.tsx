import React, { useState } from 'react';

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

	console.log('SideMenu, expanded: ', expanded);

	return (
		<div className={styles.sideMenu}>
			<SideMenuButton
				title="Notes"
				icon="lightbulb"
				active={activeTab.name === BASIC_ROUTES.NOTES && !activeTab.tag}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.NOTES, tag: false })}
			/>
			<SideMenuButton
				title="Reminders"
				icon="bell"
				active={activeTab.name === BASIC_ROUTES.REMINDERS}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.REMINDERS, tag: false })}
			/>
			{EXAMPLE_TAGS.map((tag) => (
				<SideMenuButton
					key={tag}
					title={tag}
					icon="tag"
					active={activeTab.name === tag && activeTab.tag}
					onClick={() => setActiveTab({ name: tag, tag: true })}
				/>
			))}
			<SideMenuButton title="Edit tags" icon="pencil" active={false} onClick={openEditTagsModal} />
			<SideMenuButton
				title="Archive"
				icon="file-archive"
				active={activeTab.name === BASIC_ROUTES.ARCHIVE}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.ARCHIVE, tag: false })}
			/>
			<SideMenuButton
				title="Trash"
				icon="trash-empty"
				active={activeTab.name === BASIC_ROUTES.TRASH}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.TRASH, tag: false })}
			/>
		</div>
	);
};

SideMenu.defaultProps = {
	expanded: true,
};

export default SideMenu;
