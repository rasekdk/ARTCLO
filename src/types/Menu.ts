// Const
import { MENU_ITEMS, MENU_MODES } from '~/constants/Menu';

// Types
export type MenuItemType = (typeof MENU_ITEMS)[number];
export type MenuItemId = MenuItemType['id'];
export type MenuItemUrl = MenuItemType['url'];
export type MenuMode = (typeof MENU_MODES)[number];

export type MenuType = {
  items: MenuItemType[];
  type?: MenuMode;
  currentPath?: string;
};

export type MenuProps = {
  menu: MenuType;
  className?: string;
  onClick?: (item: MenuItemType) => void;
  isOpen?: boolean;
  toggleMenu?: () => void;
};

export type MenuItemProps = {
  item: MenuItemType;
  isActive?: boolean;
  onClick?: (item: MenuItemType) => void;
  className?: string;
};
