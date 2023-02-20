import "./HeaderContainer.css";
import LightSwitch from "../2-LightSwitch/LightSwitch";
import { useContext } from "react";
import { ThemeSwitchContext } from "../../contexts/ThemeSwitchContext";
import HeaderMenuItem from "../3-HeaderMenuItem/HeaderMenuItem";
import { WindowWidthContext } from "../../contexts/WindowWidth";
import headerMenuItemsList from "../../ListsAndFixedContent/headerMenuItemsList";
import MenuToggleHambourger from "../1-1-MenuToggleHambourger/MenuToggleHambourger";
import HeaderSideMenu from "../1-2-HeaderSideMenu/HeaderSideMenu";

export default function HeaderContainer() {
  const { isLightOn, setisLightOn } = useContext(ThemeSwitchContext);
  const WindowWidthValue = useContext(WindowWidthContext);
  console.log(WindowWidthValue);
  return (
    <div className="HeaderContainer">
      <HeaderSideMenu />
      <LightSwitch />
      <div className="menuItemsExpanded">
        {headerMenuItemsList.map((item) => {
          const { MenuItemId, MenuItemName, MenuItemLink } = item;
          return (
            <HeaderMenuItem
              key={MenuItemId}
              name={MenuItemName}
              link={MenuItemLink}
            />
          );
        })}
      </div>
      <MenuToggleHambourger />
    </div>
  );
}
