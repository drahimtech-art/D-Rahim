import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import type { Value } from "react-calendar/dist/shared/types.js";
import { useState } from "react";
function Calender(): React.ReactElement {
  const [date, setDate] = useState<Date>(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  const minDate = new Date(currentYear, currentMonth, currentDay);
  function handleDateChage(e: Value) {
    setDate(e as Date);
  }
  return (
    <Calendar value={date} selectRange={false} onChange={handleDateChage} />
  );
}
export default Calender;
