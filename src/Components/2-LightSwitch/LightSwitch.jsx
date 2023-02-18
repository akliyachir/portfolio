import './LightSwitch.css';
import { FaSun } from 'react-icons/fa';
import { GiMoonOrbit } from 'react-icons/gi';
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext';
import { useContext } from 'react';

export default function LightSwitch() {
	const ThemeSwitchContext = useContext(ThemeSwitchContext);
	console.log(ThemeSwitchContext);
	return (
		<div className='lightSwitchStyle'>
			<FaSun />
			<GiMoonOrbit />
		</div>
	);
}
