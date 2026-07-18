export function MessageTimeStamp(sentAt: string) {
  const [date, time] = sentAt.toLocaleString().split("T");
  const [_, __, ___] = date.split("-").map(Number);
  const [hour, miniute] = time.split(":").map(Number);
  const dayPeriod = hour >= 12 ? "PM" : "AM";
  const timeFormat = `${hour >= 10 ? hour : `0${hour}`}:${miniute >= 10 ? miniute : `0${miniute}`} ${dayPeriod}`;
  return timeFormat;
}
