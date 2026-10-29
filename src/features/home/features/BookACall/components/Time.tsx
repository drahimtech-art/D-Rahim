import { useState, useEffect } from "react";
import { ClientBookingInfoApi } from "../../../../../storage/ClientBookingInfo";
function Time({
  toCallPage,
  bookingDate,
  staticCurrentDate,
  setBookingTime,
}: {
  toCallPage: () => void;
  bookingDate: Date;
  staticCurrentDate: Date;
  setBookingTime: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement {
  const clientBookingData = ClientBookingInfoApi();
  const { bookingInfo, setBookingInfo } = clientBookingData;
  const [defaultTimeOpen, setDefaultTimeOpen] = useState<
    {
      hour: number;
      minite: number;
      dayPeriod: "AM" | "PM";
      state: boolean;
      selected: boolean;
    }[]
  >([
    { hour: 7, minite: 0, dayPeriod: "AM", state: false, selected: false },
    { hour: 7, minite: 30, dayPeriod: "AM", state: false, selected: false },
    { hour: 8, minite: 0, dayPeriod: "AM", state: false, selected: false },
    { hour: 7, minite: 30, dayPeriod: "AM", state: false, selected: false },
    { hour: 9, minite: 0, dayPeriod: "AM", state: false, selected: false },
    { hour: 9, minite: 40, dayPeriod: "AM", state: false, selected: false },
    { hour: 11, minite: 0, dayPeriod: "AM", state: false, selected: false },
    { hour: 2, minite: 0, dayPeriod: "PM", state: false, selected: false },
    { hour: 8, minite: 0, dayPeriod: "PM", state: false, selected: false },
    { hour: 8, minite: 30, dayPeriod: "PM", state: false, selected: false },
  ]);
  const [isDateNotInCurrentDate, setIsDateNotInCurrentDate] =
    useState<boolean>(false);
  useEffect(() => {
    if (!bookingInfo) return;
    (() => {
      setDefaultTimeOpen((prevsTime) => {
        prevsTime[bookingInfo.defaultTimeOpenIndex].selected = true;
        return [...prevsTime];
      });
    })();
  }, []);
  /*
  const [isValidetOpenTimeFinished, setIsValidetOpenTimeFinished] =
    useState<boolean>(false);
  //const [isDateMovedToTomorrow, setIsDateMovedToTomorrow] =useState<boolean>(false);

  useEffect(() => {
    if (!isDateMovedToTomorrow) return;
    (() => {
      setDefaultTimeOpen((prevsDate) => {
        for (let i = 0; i < prevsDate.length; i++) {
          prevsDate[i].state = true;
        }
        return [...prevsDate];
      });
    })();
  }, [isDateMovedToTomorrow]);
  //
  function validetIfOpenTimeIfNotMoveToTomorrow() {}

  */
  //
  function openCloseTimeState(index: number, state: boolean) {
    setDefaultTimeOpen((prevsTimeOpen) => {
      prevsTimeOpen[index].state = state;
      return [...prevsTimeOpen];
    });
  }
  function validateWhichTimeIsOpen(shouldNotValidate: boolean) {
    if (shouldNotValidate) return;
    const currentHour = new Date().getHours();
    const currentMinite = new Date().getMinutes();
    // 7:00 to 7:30 am
    if (currentHour < 7) {
      // validate time is not beyound 7 am or close in the next 30 min
      openCloseTimeState(0, true);
    } else {
      openCloseTimeState(0, false);
    }
    if (currentHour <= 7) {
      if (currentHour === 7 && currentMinite < 10) {
        openCloseTimeState(1, true);
      } else if (currentHour < 7) {
        openCloseTimeState(1, true);
      } else {
        openCloseTimeState(1, false);
      }
    } else {
      openCloseTimeState(1, false);
    }
    // 8:00 to 8:30am
    if (currentHour < 8) {
      // validate time is not beyound 7 am or close in the next 30 min
      openCloseTimeState(2, true);
    } else {
      openCloseTimeState(2, false);
    }
    if (currentHour <= 8) {
      if (currentHour === 8 && currentMinite < 10) {
        openCloseTimeState(3, true);
      } else if (currentHour < 8) {
        openCloseTimeState(3, true);
      } else {
        openCloseTimeState(3, false);
      }
    } else {
      openCloseTimeState(3, false);
    }
    // 9:00 to 9:40am
    if (currentHour < 9) {
      // validate time is not beyound 7 am or close in the next 30 min
      openCloseTimeState(4, true);
    } else {
      openCloseTimeState(4, false);
    }
    if (currentHour <= 9) {
      if (currentHour === 9 && currentMinite < 15) {
        openCloseTimeState(5, true);
      } else if (currentHour < 9) {
        openCloseTimeState(5, true);
      } else {
        openCloseTimeState(5, false);
      }
    } else {
      openCloseTimeState(5, false);
    }
    //11:00am
    if (currentHour < 11) {
      // validate time is not beyound 7 am or close in the next 30 min
      openCloseTimeState(6, true);
    } else {
      openCloseTimeState(6, false);
    }
    //2:00pm
    if (currentHour < 14) {
      // validate time is not beyound 7 am or close in the next 30 min
      openCloseTimeState(7, true);
    } else {
      openCloseTimeState(7, false);
    }
    //8:00pm
    if (currentHour < 20) {
      // validate time is not beyound 7 am or close in the next 30 min
      openCloseTimeState(8, true);
    } else {
      openCloseTimeState(8, false);
    }
    if (currentHour <= 20) {
      if (currentHour === 20 && currentMinite < 10) {
        openCloseTimeState(9, true);
      } else if (currentHour < 20) {
        openCloseTimeState(9, true);
      } else {
        openCloseTimeState(9, false);
      }
    } else {
      openCloseTimeState(9, false);
    }
    //setIsValidetOpenTimeFinished(true);
  }
  /**
   
    useEffect(() => {
    if (!isValidetOpenTimeFinished) return;
    setIsValidetOpenTimeFinished(false);
    console.log("state change");
    let isOpenAppointmentToday = false;
    for (let i = 0; i < defaultTimeOpen.length; i++) {
      if (defaultTimeOpen[i].state) {
        isOpenAppointmentToday = true;
      }
    }
    if (!isOpenAppointmentToday) {
      setIsDateMovedToTomorrow(true);
    }
  }, [isValidetOpenTimeFinished, defaultTimeOpen]);

   */
  //
  useEffect(() => {
    const dateChanged = bookingDate.toDateString();
    const currentDate = staticCurrentDate.toDateString();
    if (dateChanged === currentDate) {
      (() => {
        setIsDateNotInCurrentDate(false);
      })();
      validateWhichTimeIsOpen(false);
      return; //console.log("date didn't change");
    } else {
      console.log("date changed");
      (() => {
        setIsDateNotInCurrentDate(true);
      })();
    }
  }, [bookingDate]);
  useEffect(() => {
    if (!isDateNotInCurrentDate) return;
    (() => {
      setDefaultTimeOpen((prevsDate) => {
        for (let i = 0; i < prevsDate.length; i++) {
          prevsDate[i].state = true;
        }
        return [...prevsDate];
      });
    })();
  }, [isDateNotInCurrentDate]);
  //
  function handleClientBookingTime(index: number) {
    const clientTime = defaultTimeOpen[index];
    if (!clientTime.state)
      return alert(
        "Can't book appointment on short notice try another time & date period",
      );
    const timeFormart = `${clientTime.hour >= 10 ? clientTime.hour : "0" + clientTime.hour}:${clientTime.minite >= 10 ? clientTime.minite : "0" + clientTime.minite}${clientTime.dayPeriod}`;
    setBookingTime(timeFormart);
    setDefaultTimeOpen((prevsTime) => {
      for (let i = 0; i < prevsTime.length; i++) {
        if (i !== index) {
          prevsTime[i].selected = false;
        }
      }
      prevsTime[index].selected = true;
      return [...prevsTime];
    });
    if (bookingInfo) {
      setBookingInfo({
        ...bookingInfo,
        date: bookingDate,
        time: timeFormart,
        defaultTimeOpenIndex: index,
      });
    } else {
      setBookingInfo({
        date: bookingDate,
        time: timeFormart,
        defaultTimeOpenIndex: index,
        clientFullName: "",
        jobTitle: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        aboutProject: "",
        trafficSource: "",
      });
    }
    setTimeout(() => {
      toCallPage();
    });
  }

  return (
    <section className="min-[1000px]:mt-16  min-[1000px]:w-[20%] flex flex-col">
      <span>
        <h5 className="font-inter  text-[24px]">Tuesday, September 9</h5>
      </span>
      <div className="mt-12.5 flex flex-col gap-2.5 ">
        <button
          className="w-full h-16.75 p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400 pointer"
          style={{
            backgroundColor: defaultTimeOpen[0].selected
              ? "#004a3c"
              : defaultTimeOpen[0].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[0].selected ? "white" : "black",
            cursor: defaultTimeOpen[0].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(0)}
        >
          <h5 className="font-inter  text-[24px]">07:00 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[1].selected
              ? "#004a3c"
              : defaultTimeOpen[1].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[1].selected ? "white" : "black",
            cursor: defaultTimeOpen[1].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(1)}
        >
          <h5 className="font-inter  text-[24px]">07:30 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[2].selected
              ? "#004a3c"
              : defaultTimeOpen[2].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[2].selected ? "white" : "black",
            cursor: defaultTimeOpen[2].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(2)}
        >
          <h5 className="font-inter  text-[24px]">08:00 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[3].selected
              ? "#004a3c"
              : defaultTimeOpen[3].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[3].selected ? "white" : "black",
            cursor: defaultTimeOpen[3].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(3)}
        >
          <h5 className="font-inter  text-[24px]">08:30 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[4].selected
              ? "#004a3c"
              : defaultTimeOpen[4].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[4].selected ? "white" : "black",
            cursor: defaultTimeOpen[4].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(4)}
        >
          <h5 className="font-inter  text-[24px]">09:00 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[5].selected
              ? "#004a3c"
              : defaultTimeOpen[5].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[5].selected ? "white" : "black",
            cursor: defaultTimeOpen[5].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(5)}
        >
          <h5 className="font-inter  text-[24px]">09:40 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[6].selected
              ? "#004a3c"
              : defaultTimeOpen[6].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[6].selected ? "white" : "black",
            cursor: defaultTimeOpen[6].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(6)}
        >
          <h5 className="font-inter  text-[24px]">11:00 am</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[7].selected
              ? "#004a3c"
              : defaultTimeOpen[7].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[7].selected ? "white" : "black",
            cursor: defaultTimeOpen[7].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(7)}
        >
          <h5 className="font-inter  text-[24px]">02:00 pm</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[8].selected
              ? "#004a3c"
              : defaultTimeOpen[8].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[8].selected ? "white" : "black",
            cursor: defaultTimeOpen[8].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(8)}
        >
          <h5 className="font-inter  text-[24px]">08:00 pm</h5>
        </button>
        <button
          className="w-full h-16.75 pointer p-2.5 transition-all hover-bg-primary-green flex justify-center border-2 items-center border-gray-400"
          style={{
            backgroundColor: defaultTimeOpen[9].selected
              ? "#004a3c"
              : defaultTimeOpen[9].state
                ? "transparent"
                : "#f0f0f0",
            color: defaultTimeOpen[9].selected ? "white" : "black",
            cursor: defaultTimeOpen[9].state ? "pointer" : "not-allowed",
          }}
          onClick={() => handleClientBookingTime(9)}
        >
          <h5 className="font-inter  text-[24px]">08:30 pm</h5>
        </button>
      </div>
    </section>
  );
}
export default Time;
