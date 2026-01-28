import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string (YYYY-MM-DD) without timezone conversion.
 * This ensures the same date is displayed regardless of the user's timezone.
 */
export function formatEpisodeDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  // Create date at noon local time to avoid timezone edge cases
  const date = new Date(year, month - 1, day, 12, 0, 0);
  return date.toLocaleDateString("en-US", options);
}
