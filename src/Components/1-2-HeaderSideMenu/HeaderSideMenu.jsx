import "./HeaderSideMenu.css";

export default function HeaderSideMenu({ isSideMenuOpen }) {
  return (
    <div
      className={isSideMenuOpen ? "HeaderSideMenuOpen" : "HeaderSideMenuClosed"}
    >
      HeaderSideMenu
    </div>
  );
}
