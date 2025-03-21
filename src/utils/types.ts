export type NavigationType = "about" | "work" | "contact" | "misc";

export interface WorkItemProps {
  href: string;
  iconText: string;
  title: string;
  description: string;
  disabled?: boolean;
}