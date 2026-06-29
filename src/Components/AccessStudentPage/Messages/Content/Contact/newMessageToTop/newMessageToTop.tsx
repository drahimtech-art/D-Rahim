import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
export function newMessageToTop() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { conections, setConections } = userDetails;
  const expectedData = [
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc11",
      date: "06/28/2026",
      time: "07:52",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6648",
      date: "06/11/2020",
      time: "06:15",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c88f83cc6648",
      date: "06/09/2020",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1144",
      date: "05/15/2026",
      time: "08:43",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6642",
      date: "06/07/2025",
      time: "06:59",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6641",
      date: "06/11/2025",
      time: "01:22",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1145",
      date: "12/10/2026",
      time: "12:44",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc4325",
      date: "06/10/2012",
      time: "15:26",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a17757-115c9f83cc4325",
      date: "06/01/2012",
      time: "09:32",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6681",
      date: "06/11/2027",
      time: "06:10",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc115",
      date: "07/07/2028",
      time: "14:55",
    },
    {
      contactId: "8531f3d4-ff8c77-49dd-a157-115c9f83cc175",
      date: "02/10/2010",
      time: "06:55",
    },
    {
      contactId: "8531fpoihhiu3d4-fiibf8c-49dd-a157-115c9f83cc175",
      date: "02/07/2028",
      time: "12:55",
    },
    {
      contactId: "8531f3d4-fiibf8c-49dd-a157-115c9f83cc175",
      date: "02/07/2028",
      time: "22:55",
    },
    {
      contactId: "8531f3uibuid4-fiibf8c-49dd-a157-115c9f83cc175",
      date: "02/07/2028",
      time: "22:35",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc175",
      date: "04/11/2026",
      time: "13:55",
    },
    {
      contactId: "8531f3d4vbuyb-ff8c-49dd-a157-115c9f83cc175",
      date: "04/11/2026",
      time: "10:55",
    },
    {
      contactId: "8531f3doubu4vbuyb-ff8c-49dd-a157-115c9f83cc175",
      date: "04/11/2026",
      time: "10:25",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc175",
      date: "06/10/2028",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8cuu-49dd-a157-115c9f83cc175",
      date: "06/10/2028",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "08/10/2018",
      time: "07:12",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "05/10/2018",
      time: "02:35",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c999f83cc1325",
      date: "05/05/2018",
      time: "04:48",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1uu325",
      date: "01/10/2018",
      time: "01:33",
    },
  ];
  function filterDublicate(list: any) {
    const clonedList = [...list];
    const listId = [];
    const dublicateFreeList = [];
    for (let i = 0; i < clonedList.length; i++) {
      if (i === 0) {
        listId.push(clonedList[i].contactId);
        dublicateFreeList.push(clonedList[i]);
      }
      if (!listId.includes(clonedList[i].contactId)) {
        listId.push(clonedList[i].contactId);
        dublicateFreeList.push(clonedList[i]);
      }
    }
    console.log("dublicate filter");
    console.log(dublicateFreeList);
    return [...dublicateFreeList];
  }
  function filterByYearLowestFirst(list: any) {
    /*
    step1: get array list 
    step2: create sorted list
    step3: add a while loop with condition if sorted loop is < array list loop func call
    step4: loop array list
    step5: get  value in list at array looped index
    step6: compare all value in list to step 5 value
    step7: if step 6 comparing value is lass then step 5 value
    step8: asign step 6 value to step 5 value if step 6  is not stored in sorted list already else if already stored don't asign
    step9: if all items are compired in list to step 5 value and have goten the one lowest result 
    step10: push step 3 value to sorted list if its not already in list, if it is in list do nothing
    step11: continue step 4 loop and move to the next index 
    step12: repeat step 5 to step 11
    step13: if all value have mean itarated in step 4 check step 3 while loop condition if meet exit else repeat step 4 to step 13
    */
    const contactList = filterDublicate(list);
    const sortedList = [];
    const storedListId: any = [];
    while (sortedList.length < contactList.length) {
      for (const item of contactList) {
        //get all item one at a time
        let currentItem = item; // current item inlist
        for (const subItem of contactList) {
          // compare all item to current item
          const [_, __, subYear] = subItem.date.split("/");
          const [___, ____, cYear] = currentItem.date.split("/");
          if (
            Number(subYear) < Number(cYear) &&
            !storedListId.includes(subItem.contactId)
          ) {
            // change current item if year is lower then items comparing if comparing item is lower check has item been added to list
            currentItem = subItem;
          }
        }
        if (!storedListId.includes(currentItem.contactId)) {
          //only stored compared and returned lowest if item is not in list
          sortedList.push(currentItem);
          storedListId.push(currentItem.contactId);
        }
      }
    }
    console.log("years filter");
    console.log(sortedList);
    filterByMonthInYearLowsetFirst([...sortedList]);
  }
  //filterDublicate(expectedData);
  console.log(filterByYearLowestFirst(expectedData));
  function filterByMonthInYearLowsetFirst(list: any[]) {
    /*
    
    */
    //sort by months in year lowest first
    const clonedList = [...list];
    let sortedListByMonths: any = [];
    let monthList = []; //month array
    let validatedMonthAndYear = undefined;
    //first loop
    for (const data of clonedList) {
      const dataValue = data; // data value
      const [__, _, dY] = dataValue.date.split("/");
      if (`${dY}` === validatedMonthAndYear) continue;
      //nested array to compire all value to datavalue
      for (const dataCompare of clonedList) {
        const [_, __, dcY] = dataCompare.date.split("/");
        if (Number(dY) === Number(dcY)) {
          monthList.push(dataCompare); // push to month array
        }
      }
      //new block of code (filter stored monthlist data lowest first)
      const tembMonth = [];
      const tembMonthId: string[] = [];
      while (tembMonth.length < monthList.length) {
        // while tembMonth is less the month array
        //new block first loop
        for (const newDataValue of monthList) {
          let timeMonthDay = newDataValue; // new block loop value
          const [newTM, __, _] = timeMonthDay.date.split("/");
          //nested loop
          for (const newDataCompare of monthList) {
            const newTimeMonthDay = newDataCompare;
            const [newTCM, __, _] = newTimeMonthDay.date.split("/");
            if (
              Number(newTCM) < Number(newTM) && // sort by month lowest month in same year
              !tembMonthId.includes(newTimeMonthDay.contactId)
            ) {
              //console.log(`${newTCM} < ${newTM}`);
              timeMonthDay = newTimeMonthDay; // asign lowest value in list
            }
          }
          //when nested loop is done comparing  if timeMonthDay at current newDataValue index is not already added add it
          if (!tembMonthId.includes(timeMonthDay.contactId)) {
            tembMonth.push(timeMonthDay);
            tembMonthId.push(timeMonthDay.contactId);
          }
        }
        if (tembMonth.length === monthList.length) {
          // set validatedMonth and year  to already calculated logic for months
          monthList = [];
          validatedMonthAndYear = `${dY}`;
          //push to sortedlist
          for (const fliterList of tembMonth) {
            sortedListByMonths.push(fliterList);
          }
        }
      } //end of new bloock code/logic
    }
    console.log("months in year filter");
    console.log(sortedListByMonths);
    filterByDaysInMonthLowestFirst(sortedListByMonths);
  }
  function filterByDaysInMonthLowestFirst(list: any) {
    //sort by days in months lowest first
    const clonedMonthList = [...list];
    let sortedListByDay: any = [];
    let dayList = []; //month array
    let validatedDayMonthAndYear = undefined;
    //first loop
    for (const data of clonedMonthList) {
      const dataValue = data; // data value
      const [dM, _, dY] = dataValue.date.split("/");
      if (`${dM}${dY}` === validatedDayMonthAndYear) continue;
      //nested array to compire all value to datavalue
      for (const dataCompare of clonedMonthList) {
        const [dcM, _, dcY] = dataCompare.date.split("/");
        if (Number(dY) === Number(dcY) && Number(dM) === Number(dcM)) {
          dayList.push(dataCompare); // push to month array
        }
      }
      //new block of code (filter stored dayList data lowest first)
      const tembMonth = [];
      const tembMonthId: string[] = [];
      while (tembMonth.length < dayList.length) {
        // while tembMonth is less the month array
        //new block first loop
        for (const newDataValue of dayList) {
          let timeMonthDay = newDataValue; // new block loop value
          const [__, newTD, _] = timeMonthDay.date.split("/");
          //nested loop
          for (const newDataCompare of dayList) {
            const newTimeMonthDay = newDataCompare;
            const [__, newTCD, _] = newTimeMonthDay.date.split("/");
            if (
              Number(newTCD) < Number(newTD) && /// sort by day lowest day in same month
              !tembMonthId.includes(newTimeMonthDay.contactId)
            ) {
              timeMonthDay = newTimeMonthDay; // asign lowest value in list
            }
          }
          //when nested loop is done comparing  if timeMonthDay at current newDataValue index is not already added add it
          if (!tembMonthId.includes(timeMonthDay.contactId)) {
            tembMonth.push(timeMonthDay);
            tembMonthId.push(timeMonthDay.contactId);
          }
        }
        if (tembMonth.length === dayList.length) {
          // set validatedMonth month and year  to already calculated logic
          dayList = [];
          validatedDayMonthAndYear = `${dM}${dY}`;
          //push to sortedListByDay
          for (const fliterList of tembMonth) {
            sortedListByDay.push(fliterList);
          }
        }
      } //end of new bloock code/logic
    }
    console.log("days in month filter");
    console.log(sortedListByDay);
    filterByHoursInDays(sortedListByDay);
  }
  function filterByHoursInDays(list: any) {
    //sort by days in months lowest first
    const clonedList = [...list];
    let sortedListByHours: any = [];
    let dayList = []; //month array
    let validatedDayMonthAndYear = undefined;
    //first loop
    for (const data of clonedList) {
      const dataValue = data; // data value
      const [dM, dD, dY] = dataValue.date.split("/");
      if (`${dM}${dD}${dY}` === validatedDayMonthAndYear) continue;
      //nested array to compire all value to datavalue
      for (const dataCompare of clonedList) {
        const [dcM, dcD, dcY] = dataCompare.date.split("/");
        if (
          Number(dY) === Number(dcY) &&
          Number(dM) === Number(dcM) &&
          Number(dD) === Number(dcD)
        ) {
          dayList.push(dataCompare); // push to month array
        }
      }
      //new block of code (filter stored dayList data lowest first)
      const tembHour = [];
      const tembHourId: string[] = [];
      while (tembHour.length < dayList.length) {
        // while tembHour is less the month array
        //new block first loop
        for (const newDataValue of dayList) {
          let timeMonthDay = newDataValue; // new block loop value
          const [newTH, _] = timeMonthDay.time.split(":");
          //nested loop
          for (const newDataCompare of dayList) {
            const newTimeMonthDay = newDataCompare;
            const [newTCH, _] = newTimeMonthDay.time.split(":");
            if (
              Number(newTCH) < Number(newTH) && /// sort by day lowest day in same month
              !tembHourId.includes(newTimeMonthDay.contactId)
            ) {
              timeMonthDay = newTimeMonthDay; // asign lowest value in list
            }
          }
          //when nested loop is done comparing  if timeMonthDay at current newDataValue index is not already added add it
          if (!tembHourId.includes(timeMonthDay.contactId)) {
            tembHour.push(timeMonthDay);
            tembHourId.push(timeMonthDay.contactId);
          }
        }
        if (tembHour.length === dayList.length) {
          // set validatedMonth month and year  to already calculated logic
          dayList = [];
          validatedDayMonthAndYear = `${dM}${dD}${dY}`;
          //push to sortedListByHours
          for (const fliterList of tembHour) {
            sortedListByHours.push(fliterList);
          }
        }
      } //end of new bloock code/logic
    }
    console.log("hours in days filter");
    console.log(sortedListByHours);
    filterByMinituesInHours(sortedListByHours);
  }
  function filterByMinituesInHours(list: any) {
    const clonedList = [...list];
    let sortedListByMinites: any = [];
    let dayList = []; //month array
    let validatedDayMonthAndYear = undefined;
    //first loop
    for (const data of clonedList) {
      const dataValue = data; // data value
      const [dM, dD, dY] = dataValue.date.split("/");
      const [dH, _] = dataValue.time.split(":");
      if (`${dM}${dD}${dY}${dH}` === validatedDayMonthAndYear) continue;
      //nested array to compire all value to datavalue
      for (const dataCompare of clonedList) {
        const [dcM, dcD, dcY] = dataCompare.date.split("/");
        const [dcH, _] = dataCompare.time.split(":");
        if (
          Number(dY) === Number(dcY) &&
          Number(dM) === Number(dcM) &&
          Number(dD) === Number(dcD) &&
          Number(dH) === Number(dcH)
        ) {
          dayList.push(dataCompare); // push to month array
        }
      }
      //new block of code (filter stored dayList data lowest first)
      const tembHour = [];
      const tembHourId: string[] = [];
      while (tembHour.length < dayList.length) {
        // while tembHour is less the month array
        //new block first loop
        for (const newDataValue of dayList) {
          let timeMonthDay = newDataValue; // new block loop value
          const [_, newTMn] = timeMonthDay.time.split(":");
          //nested loop
          for (const newDataCompare of dayList) {
            const newTimeMonthDay = newDataCompare;
            const [_, newTCMn] = newTimeMonthDay.time.split(":");
            if (
              Number(newTCMn) < Number(newTMn) && /// sort by day lowest day in same month
              !tembHourId.includes(newTimeMonthDay.contactId)
            ) {
              timeMonthDay = newTimeMonthDay; // asign lowest value in list
            }
          }
          //when nested loop is done comparing  if timeMonthDay at current newDataValue index is not already added add it
          if (!tembHourId.includes(timeMonthDay.contactId)) {
            tembHour.push(timeMonthDay);
            tembHourId.push(timeMonthDay.contactId);
          }
        }
        if (tembHour.length === dayList.length) {
          // set validatedMonth month and year  to already calculated logic
          dayList = [];
          validatedDayMonthAndYear = `${dM}${dD}${dY}${dH}`;
          //push to sortedListByMinites
          for (const fliterList of tembHour) {
            sortedListByMinites.push(fliterList);
          }
        }
      } //end of new bloock code/logic
    }
    console.log("minites in hours filter");
    console.log(sortedListByMinites);
  }
  //doSomeLogic();
}
