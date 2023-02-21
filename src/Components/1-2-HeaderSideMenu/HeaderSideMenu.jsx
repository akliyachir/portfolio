import "./HeaderSideMenu.css";
import HeaderMenuItem from "../3-HeaderMenuItem/HeaderMenuItem";
import headerMenuItemsList from "../../ListsAndFixedContent/headerMenuItemsList";

export default function HeaderSideMenu({ isSideMenuOpen }) {
  return (
    <div
      className={isSideMenuOpen ? "HeaderSideMenuOpen" : "HeaderSideMenuClosed"}
    >
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
    </div>
  );
}
