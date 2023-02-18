import './RootLayout.css';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
// -- context provider light dark switch
import ThemeSwitchContextProvider from '../../contexts/ThemeSwitchContext.jsx';

export default function RootLayout() {
	// -- light toggle context

	return (
		<ThemeSwitchContextProvider>
			<div className='RootLayout'>
				<HeaderContainer />
				<div>hola</div>
			</div>
		</ThemeSwitchContextProvider>
	);
}
