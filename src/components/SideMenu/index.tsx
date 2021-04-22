import React, { useState } from 'react';
import cx from 'classnames';

import { debounce } from '../../helpers/functions';

import SideMenuButton from 'components/SideMenuButton';

import { BASIC_ROUTES, EXAMPLE_TAGS } from './index.utils';
import styles from './styles.css';

type PropsType = {
	expanded?: boolean;
};
const SideMenu: React.FC<PropsType> = ({ expanded }: PropsType) => {
	const [expandedFromMouseOver, setExpandedFromMouse] = useState(false);
	const [activeTab, setActiveTab] = useState({
		name: BASIC_ROUTES.NOTES,
		tag: false,
	});

	const openEditTagsModal = () => {
		console.log('Opens modal for tag editing...');
	};

	const sideMenuClasses = cx(styles.sideMenu, {
		[styles.expanded]: expandedFromMouseOver || expanded,
	});

	return (
		<div
			className={sideMenuClasses}
			onMouseOver={debounce(100, () => {
				setExpandedFromMouse(true);
			})}
			onMouseOut={debounce(100, () => {
				setExpandedFromMouse(false);
			})}
		>
			<SideMenuButton
				title="Notes"
				icon="lightbulb"
				active={activeTab.name === BASIC_ROUTES.NOTES && !activeTab.tag}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.NOTES, tag: false })}
				expanded={expandedFromMouseOver || expanded}
			/>
			<SideMenuButton
				title="Reminders"
				icon="bell"
				active={activeTab.name === BASIC_ROUTES.REMINDERS}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.REMINDERS, tag: false })}
				expanded={expandedFromMouseOver || expanded}
			/>
			{EXAMPLE_TAGS.map((tag) => (
				<SideMenuButton
					key={tag}
					title={tag}
					icon="tag"
					active={activeTab.name === tag && activeTab.tag}
					onClick={() => setActiveTab({ name: tag, tag: true })}
					expanded={expandedFromMouseOver || expanded}
				/>
			))}
			<SideMenuButton
				title="Edit tags"
				icon="pencil"
				active={false}
				onClick={openEditTagsModal}
				expanded={expandedFromMouseOver || expanded}
			/>
			<SideMenuButton
				title="Archive"
				icon="file-archive"
				active={activeTab.name === BASIC_ROUTES.ARCHIVE}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.ARCHIVE, tag: false })}
				expanded={expandedFromMouseOver || expanded}
			/>
			<SideMenuButton
				title="Trash"
				icon="trash-empty"
				active={activeTab.name === BASIC_ROUTES.TRASH}
				onClick={() => setActiveTab({ name: BASIC_ROUTES.TRASH, tag: false })}
				expanded={expandedFromMouseOver || expanded}
			/>
		</div>
	);
};

SideMenu.defaultProps = {
	expanded: true,
};

export default SideMenu;
