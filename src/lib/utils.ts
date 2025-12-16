import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIdFromUrl(url: string): string | null {
  const parts = url.split("/");
  return parts.length > 0 ? parts.pop() || null : null;
}