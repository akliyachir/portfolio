import './RootLayout.css';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
// -- context provider light dark switch
import ThemeSwitchContextProvider from '../../contexts/ThemeSwitchContext.jsx';
import WindowWidthProvider from '../../contexts/WindowWidth';

export default function RootLayout() {
	return (
		<WindowWidthProvider>
			<ThemeSwitchContextProvider>
				<div className='RootLayout'>
					<HeaderContainer />
					<div>Content</div>
				</div>
			</ThemeSwitchContextProvider>
		</WindowWidthProvider>
	);
}
