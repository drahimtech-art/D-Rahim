export function TotalTimePassed(timePased: Date) {
  const [date, time] = timePased.toLocaleString().split("T");
  const newDate = new Date();
  const newHour = Number(newDate.getHours());
  const newMinites = Number(newDate.getMinutes());
  const newMonth = Number(newDate.getMonth() + 1);
  const newDay = Number(newDate.getDate());
  const newYear = newDate.getFullYear().toString();
  //
  const oldMonth = Number(date.split("-")[1]);
  const oldDay = Number(date.split("-")[2]);
  const oldYear = date.split("-")[0];
  let oldHour = Number(time.split(":")[0]);
  let oldMinites = Number(time.split(":")[1]);
  let timePassed;
  //minites passed
  if (
    oldHour === newHour &&
    oldMonth === newMonth &&
    oldDay === newDay &&
    oldYear === newYear
  ) {
    timePassed = newMinites - oldMinites;
    return timePassed > 1 ? `${timePassed}minutes` : `just now`;
  }
  //hours passed
  if (
    oldHour !== newHour &&
    oldMonth === newMonth &&
    oldDay === newDay &&
    oldYear === newYear
  ) {
    timePassed = newHour - oldHour;
    return timePassed > 1 ? `${timePassed}hours` : `${timePassed}hour`;
  }
  //days passed
  if (oldMonth === newMonth && oldYear === newYear && oldDay !== newDay) {
    timePassed = newDay - oldDay;
    return timePassed > 1 ? `${timePassed}days` : `${timePassed}day`;
  }
  //months passed
  if (oldMonth !== newMonth && oldYear === newYear) {
    timePassed = newMonth - oldMonth;
    return timePassed > 1 ? `${timePassed}months` : `${timePassed}month`;
  }
  //years
  if (oldYear !== newYear) {
    timePassed = newMonth - oldMonth;
    return timePassed > 1 ? `${timePassed}years` : `${timePassed}year`;
  }
}
