import type { HousesFilterValues } from "@/interfaces/HouseInterface";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIdFromUrl(url: string): string | null {
  const parts = url.split("/");
  return parts.length > 0 ? parts.pop() || null : null;
}

export function buildQueryString(
  filters: HousesFilterValues,
  page: number,
  pageSize: number
) {
  const params: Record<string, string> = {
    page: page.toString(),
    pageSize: pageSize.toString(),
  };

  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === "") return;

    // Convert booleans to "true"/"false"
    if (typeof value === "boolean") {
      params[key] = value ? "true" : "false";
    } else {
      params[key] = value;
    }
  });

  return new URLSearchParams(params).toString();
}
