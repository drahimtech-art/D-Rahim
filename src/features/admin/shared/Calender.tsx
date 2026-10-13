import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import type { Value } from "react-calendar/dist/shared/types.js";
import { useState } from "react";
function Calender(): React.ReactElement {
  const [date, setDate] = useState<Date>(new Date());
  console.log(date);
  function handleDateChage(e: Value) {
    setDate(e as Date);
  }
  return (
    <Calendar value={date} selectRange={true} onChange={handleDateChage} />
  );
}
export default Calender;
