import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import type { Value } from "react-calendar/dist/shared/types.js";
function CalendarUi({
  bookingDate,
  setBookingDate,
  staticCurrentDate,
}: {
  bookingDate: Date;
  setBookingDate: React.Dispatch<React.SetStateAction<Date>>;
  staticCurrentDate: Date;
}): React.ReactElement {
  const currentYear = staticCurrentDate.getFullYear();
  const currentMonth = staticCurrentDate.getMonth();
  const currentDay = staticCurrentDate.getDate();
  const minDate = new Date(currentYear, currentMonth, currentDay);
  function handleDateChage(e: Value) {
    setBookingDate(e as Date);
  }
  return (
    <section className="flex flex-col  min-[1000px]:w-[40%] min-[1000px]:mr-auto">
      <span>
        <h5 className="font-inter font-bold text-[24px]">
          Select a Date & Time
        </h5>
      </span>
      <div className="min-[1000px]:mt-10 mt-5 w-full min-[1000px]:h-137.5 h-fit ">
        <Calendar
          minDate={minDate}
          value={bookingDate}
          selectRange={false}
          onChange={handleDateChage}
        />
      </div>
    </section>
  );
}
export default CalendarUi;
