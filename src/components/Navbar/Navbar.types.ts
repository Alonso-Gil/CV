// Interfaces and types from component Navbar
import { TabsMenu } from "types/common.types";

// Component Props
export interface NavbarProps {
  actualTab: TabsMenu;
  setActualTab: React.Dispatch<React.SetStateAction<TabsMenu>>;
}

// Styled Component Props
export interface NavbarStyledProps {
  className: string;
}
