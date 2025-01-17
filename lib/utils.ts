import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  const names = name.split(" ");
  return names
    .map((n) => n.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
};
