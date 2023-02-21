import './HeaderContainer.css';
import LightSwitch from '../2-LightSwitch/LightSwitch';
import { useContext, useState } from 'react';
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext';
import HeaderMenuItem from '../3-HeaderMenuItem/HeaderMenuItem';
import { WindowWidthContext } from '../../contexts/WindowWidth';
import headerMenuItemsList from '../../ListsAndFixedContent/headerMenuItemsList';
import MenuToggleHambourger from '../1-1-MenuToggleHambourger/MenuToggleHambourger';
import HeaderSideMenu from '../1-2-HeaderSideMenu/HeaderSideMenu';
import VoileGlobalCloseMenu from '../1-3-VoileGlobalCloseMenu/VoileGlobalCloseMenu';

export default function HeaderContainer() {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
	const handleSideMenuToggle = () => {
		setisSideMenuOpen(!isSideMenuOpen);
	};
	const handleSideMenuToggleCloseOnly = () => {
		setisSideMenuOpen(false);
	};
	const { isLightOn, setisLightOn } = useContext(ThemeSwitchContext);
	const WindowWidthValue = useContext(WindowWidthContext);
	console.log(WindowWidthValue);
	return (
		<div className='HeaderContainer'>
			<LightSwitch />
			{WindowWidthValue < 700 && (
				<HeaderSideMenu
					isSideMenuOpen={isSideMenuOpen}
					handleSideMenuToggleCloseOnly={handleSideMenuToggleCloseOnly}
				/>
			)}
			<VoileGlobalCloseMenu
				isSideMenuOpen={isSideMenuOpen}
				handleSideMenuToggleCloseOnly={handleSideMenuToggleCloseOnly}
			/>
			{WindowWidthValue >= 700 && (
				<div className='menuItemsExpanded'>
					{headerMenuItemsList.map((item) => {
						const { MenuItemId, MenuItemName, MenuItemLink } = item;
						return (
							<HeaderMenuItem
								key={MenuItemId}
								name={MenuItemName}
								link={MenuItemLink}
								handleSideMenuToggleCloseOnly={handleSideMenuToggleCloseOnly}
							/>
						);
					})}
				</div>
			)}
			{WindowWidthValue < 700 && (
				<MenuToggleHambourger
					isSideMenuOpen={isSideMenuOpen}
					handleSideMenuToggle={handleSideMenuToggle}
				/>
			)}
		</div>
	);
}
