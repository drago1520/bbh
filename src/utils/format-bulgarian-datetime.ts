"use client";
/**
 *
 * @param dateString some kind of ISO date string
 */
export function formatToBulgarianDate(dateString: string): string {
  const date = new Date(dateString);
  // Automatically detect user's timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log("userTimezone :", userTimezone);

  const formatter = new Intl.DateTimeFormat("bg-BG", {
    timeZone: userTimezone,
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const hour = parts.find((p) => p.type === "hour")?.value;
  const minute = parts.find((p) => p.type === "minute")?.value;

  return `${day} ${month}, ${hour}:${minute} ч.`;
}
