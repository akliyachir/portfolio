import './LightSwitch.css';
import { FaSun } from 'react-icons/fa';
import { GiMoonOrbit } from 'react-icons/gi';
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext';
import { useContext } from 'react';

export default function LightSwitch() {
	const { isLightOn, setisLightOn } = useContext(ThemeSwitchContext);
	// -- handleLightSwitchToggle
	const handleLightSwitchToggle = () => {
		setisLightOn(!isLightOn);
	};
	return (
		<div className='lightSwitchStyle' onClick={handleLightSwitchToggle}>
			{isLightOn ? <GiMoonOrbit /> : <FaSun />}
		</div>
	);
}
