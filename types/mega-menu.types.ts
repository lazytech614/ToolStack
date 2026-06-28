import { LucideIcon } from "lucide-react";

export interface MegaMenuItem {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface MegaMenuSection {
  id: string;
  title: string;
  icon: LucideIcon;
  items: MegaMenuItem[];
}

export interface MegaMenuFooter {
  text: string;
  label: string;
  href: string;
}

export interface MegaMenuProps {
  label: string;
  sections: MegaMenuSection[];
  footer?: MegaMenuFooter;
  className?: string;
  
  /**
   * Number of columns.
   * Defaults to sections.length.
   */
  columns?: number;

  /**
   * Width of the dropdown.
   * Example:
   * "40rem"
   * "56rem"
   * "72rem"
   * "100%"
   */
  width?: string;

  /**
   * Alignment relative to the trigger.
   *
   * center (default)
   * left
   * right
   */
  align?: "left" | "center" | "right";
}