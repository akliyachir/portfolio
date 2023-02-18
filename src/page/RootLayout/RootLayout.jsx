import './RootLayout.css';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
// -- context light dark switch
import ThemeSwitchContext from '../../contexts/ThemeSwitchContext.jsx';

export default function RootLayout() {
	return (
		<ThemeSwitchContext.Provider>
			<div className='RootLayout light dark'>
				<HeaderContainer />
			</div>
		</ThemeSwitchContext.Provider>
	);
}
