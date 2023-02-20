import "./MenuToggleHambourger.css";

export default function MenuToggleHambourger({ handleSideMenuToggle }) {
  return (
    <div className="MenuToggleHambourger" onClick={handleSideMenuToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
