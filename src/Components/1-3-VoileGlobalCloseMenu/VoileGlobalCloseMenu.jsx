import "./VoileGlobalCloseMenu.css";

export default function VoileGlobalCloseMenu({
  isSideMenuOpen,
  handleSideMenuToggleCloseOnly,
}) {
  return (
    <div
      className={
        isSideMenuOpen
          ? "VoileGlobalCloseMenuOpen"
          : "VoileGlobalCloseMenuClosed"
      }
      onClick={handleSideMenuToggleCloseOnly}
    ></div>
  );
}
