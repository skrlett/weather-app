export const k2f = (K: number) => Math.round((K - 273.15) * 1.8 + 32);

export const dateToWeekday = (dateString: string) => {
  const date = new Date(dateString);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = date.getDay();
  return weekdays[dayOfWeek];
};