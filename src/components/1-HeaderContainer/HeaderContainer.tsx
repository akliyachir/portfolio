'use client';
import './HeaderContainer.css';
import ThemeSwitch from '../2-ThemeSwitch/ThemeSwitch';

export default function HeaderContainer() {
	return (
		<div className='HeaderContainer'>
			<div>
				<ThemeSwitch />
			</div>
			HeaderContainer
		</div>
	);
}
