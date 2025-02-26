export function formatReadableDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDateTime = date.toLocaleString("en-US", options);
  return formattedDateTime;
}

export function formatReadableTime(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDateTime = date.toLocaleString("en-US", options);
  return formattedDateTime;
}
