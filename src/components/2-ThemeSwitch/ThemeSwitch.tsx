'use Client';
import { HiLightBulb } from 'react-icons/hi';
import './ThemeSwitch.css';
import useState from 'react';
export default function ThemeSwitch() {
	const [isLightSwitchOn, useisLightSwitchOn] = useState(false);
	return (
		<div className='ThemeSwitch'>
			<div className='switchContainer'>
				<HiLightBulb />
			</div>
		</div>
	);
}
