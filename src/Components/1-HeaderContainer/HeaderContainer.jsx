import './HeaderContainer.css';
import LightSwitch from '../2-LightSwitch/LightSwitch';
import { useContext } from 'react';
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext';

export default function HeaderContainer() {
	const { isLightOn, setisLightOn } = useContext(ThemeSwitchContext);
	return (
		<div className='HeaderContainer'>
			<LightSwitch />
		</div>
	);
}
