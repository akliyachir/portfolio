import './HeaderContainer.css';
import LightSwitch from '../2-LightSwitch/LightSwitch';
import { useContext } from 'react';
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext';
import HeaderMenuItem from '../3-HeaderMenuItem/HeaderMenuItem';
import { WindowWidthContext } from '../../contexts/WindowWidth';

export default function HeaderContainer() {
	const { isLightOn, setisLightOn } = useContext(ThemeSwitchContext);
	const { WindowWidthValue } = useContext(WindowWidthContext);
	console.log(WindowWidthValue);
	return (
		<div className='HeaderContainer'>
			<LightSwitch />
			<HeaderMenuItem name={'Project'} link={'project'} />
			<HeaderMenuItem name={'skills'} link={'skills'} />
			<HeaderMenuItem name={'curriculum'} link={'curriculum'} />
			<HeaderMenuItem name={'Contact'} link={'contact'} />
		</div>
	);
}
