import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import type { Value } from "react-calendar/dist/shared/types.js";
import { useState, useEffect } from "react";
function Calender({
  filterDateList,
  setFilterDateList,
}: {
  filterDateList: string[];
  setFilterDateList: (list: string[]) => void;
}): React.ReactElement {
  const [date, setDate] = useState<Date>(
    new Date(filterDateList[filterDateList.length - 1]),
  );
  const [arrayDate, setArraDate] = useState<Date[]>([]);
  useEffect(() => {
    if (arrayDate.length === 0) return;
    const monthInYearList: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let startingMonthIndex = 0;
    let startingMonthDay = 0;
    let startingYear = 0;
    //
    let endingMonthIndex = 0;
    let endingMonthDay = 0;
    let endingYear = 0;
    for (let i = 0; i < monthInYearList.length; i++) {
      const dateToDateFormart = arrayDate[0].toDateString();
      if (dateToDateFormart.includes(monthInYearList[i])) {
        const stMD: number = Number(arrayDate[0].toDateString().split(" ")[2]);
        const stY: number = Number(arrayDate[0].toDateString().split(" ")[3]);
        startingMonthIndex = i;
        startingMonthDay = stMD;
        startingYear = stY;
      }
    }
    for (let i = 0; i < monthInYearList.length; i++) {
      const dateToDateFormart = arrayDate[1].toDateString();
      if (dateToDateFormart.includes(monthInYearList[i])) {
        const stMD: number = Number(arrayDate[1].toDateString().split(" ")[2]);
        const stY: number = Number(arrayDate[1].toDateString().split(" ")[3]);
        endingMonthIndex = i;
        endingMonthDay = stMD;
        endingYear = stY;
      }
    }
    //
    const dateRange = [];
    while (
      !(
        startingMonthDay === endingMonthDay &&
        startingMonthIndex === endingMonthIndex &&
        startingYear === endingYear
      )
    ) {
      const rangeDate = new Date(
        `${monthInYearList[startingMonthIndex]} ${startingMonthDay} ${startingYear}`,
      );
      dateRange.push(rangeDate.toDateString());
      if (startingMonthDay < 31) {
        startingMonthDay += 1;
      } else if (startingMonthDay === 31) {
        startingMonthDay = 1;
        if (startingMonthIndex < 11) {
          startingMonthIndex += 1;
        } else {
          startingMonthIndex = 0;
          startingYear += 1;
        }
      }
    }
    dateRange.push(arrayDate[1].toDateString());
    (() => {
      setFilterDateList(dateRange);
    })();
  }, [arrayDate]);
  useEffect(() => {
    setArraDate([date, date]);
  }, []);
  function handleDateChage(e: Value) {
    const listDate = e as unknown as Date[];
    setArraDate(listDate);
    setDate(e as Date);
  }
  return (
    <Calendar value={date} selectRange={true} onChange={handleDateChage} />
  );
}
export default Calender;
