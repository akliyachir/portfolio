import "./MenuToggleHambourger.css";

export default function MenuToggleHambourger({
  handleSideMenuToggle,
  isSideMenuOpen,
}) {
  return (
    <div
      className={
        isSideMenuOpen
          ? "MenuToggleHambourgerClosed"
          : "MenuToggleHambourgerOpen"
      }
      onClick={handleSideMenuToggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
