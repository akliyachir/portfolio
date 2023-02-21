import './RootLayout.css';
import HeaderContainer from '../../Components/1-HeaderContainer/HeaderContainer';
// -- context provider light dark switch
import ThemeSwitchContextProvider from '../../contexts/ThemeSwitchContext.jsx';
import WindowWidthProvider from '../../contexts/WindowWidth';
import ProjectSection from '../../Components/4-ProjectSection/ProjectSection';
import FooterRoot from '../../Components/3-1-FooterRoot/FooterRoot';
import AboutMeSection from '../../Components/6-AboutMeSection/AboutMeSection';
import SkillsSection from '../../Components/7-SkillsSection/SkillsSection';
import ContactSection from '../../Components/9-ContactSection/ContactSection';
import CurriculumSection from '../../Components/8-CurriculumSection/CurriculumSection';

export default function RootLayout() {
	return (
		<WindowWidthProvider>
			<ThemeSwitchContextProvider>
				<div className='RootLayout'>
					<header>
						<HeaderContainer />
					</header>
					<main>
						<AboutMeSection />
						<ProjectSection />
						<SkillsSection />
						<CurriculumSection />
						<ContactSection />
					</main>
					<footer>
						<FooterRoot />
					</footer>
				</div>
			</ThemeSwitchContextProvider>
		</WindowWidthProvider>
	);
}
