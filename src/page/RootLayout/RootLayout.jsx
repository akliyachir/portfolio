import "./RootLayout.css";
import HeaderContainer from "../../Components/1-HeaderContainer/HeaderContainer";
// -- context provider light dark switch
import ThemeSwitchContextProvider from "../../contexts/ThemeSwitchContext.jsx";
import WindowWidthProvider from "../../contexts/WindowWidth";
import ProjectSection from "../../Components/4-ProjectSection/ProjectSection";

export default function RootLayout() {
  return (
    <WindowWidthProvider>
      <ThemeSwitchContextProvider>
        <div className="RootLayout">
          <header>
            <HeaderContainer />
          </header>
          <main>{<ProjectSection />}</main>
        </div>
      </ThemeSwitchContextProvider>
    </WindowWidthProvider>
  );
}
