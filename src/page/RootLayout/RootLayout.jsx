import './RootLayout.css';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
// -- context light dark switch
import ThemeSwitchContextProvider from '../../contexts/ThemeSwitchContext.jsx';

export default function RootLayout() {
	return (
		<ThemeSwitchContextProvider>
			<div className='RootLayout light dark'>
				<HeaderContainer />
			</div>
		</ThemeSwitchContextProvider>
	);
}
