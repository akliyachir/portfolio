import './RootLayout.css';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
// -- context light dark switch
import { useContext } from 'react';
import ThemeSwitchContextProvider from '../../contexts/ThemeSwitchContext.jsx';

export default function RootLayout() {
	// -- light toggle context

	return (
		<ThemeSwitchContextProvider>
			<div className={`RootLayout`}>
				<HeaderContainer />
			</div>
		</ThemeSwitchContextProvider>
	);
}
