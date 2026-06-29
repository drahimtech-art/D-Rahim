import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
export function newMessageToTop() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { conections, setConections } = userDetails;
  const expectedData = [
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc11",
      date: "06/28/2026",
      time: "07:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6648",
      date: "06/11/2020",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c88f83cc6648",
      date: "11/09/2020",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1144",
      date: "05/15/2026",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6642",
      date: "06/11/2025",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6641",
      date: "06/11/2025",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1145",
      date: "12/10/2026",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc4325",
      date: "06/10/2012",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc6681",
      date: "06/11/2027",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc115",
      date: "10/07/2028",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c77-49dd-a157-115c9f83cc175",
      date: "02/10/2010",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-fiibf8c-49dd-a157-115c9f83cc175",
      date: "2/7/2028",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc175",
      date: "04/11/2026",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc175",
      date: "06/10/2028",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "08/10/2018",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "05/10/2018",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "09/10/2018",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "0/10/2018",
      time: "08:55",
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
          const [subMonth, subDay, subYear] = subItem.date.split("/");
          const [cMonth, cDay, cYear] = currentItem.date.split("/");
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
    console.log("year filter");
    console.log(sortedList);
    filterByMonthDayandTime([...sortedList]);
  }
  //filterDublicate(expectedData);
  console.log(filterByYearLowestFirst(expectedData));
  function filterByMonthDayandTime(list: any[]) {
    /*
    step1: get array list 
    step2: create sorted empty array 
    step3: create a while loop with condition if sorted array is < less then array list loop else break
    step4: create month empty array
    step5: create a month and year validation varible and give it undefind
    step6: first loop. loop all array list
    step7: for the first value in step 6 loop set it as a value to be compaired 
    bonus: if step 7 value condition is same as step 5 value skip rest line of code and continue loop5tr
    step8: creat a nested loop to compare month and year to step 7 value
    step9: if step 8 compare value macth step 7 condition  push step 8 compairing value to step 4 array
    step10: if step 8 compire value did not macth then it hits our break point and continue to the next block of code
    step11: create a tembMonth empty array
    step12: create a tembMonthId empty array
    step13: create a whileLoop with condition if step 11 length is < less then step 4 array loop else break
    step14: loop step 4 array 
    step15: create a varable timeMonthDay
    step16: for first loop in step 14 asign step 15 its value 
    step17: create a nested  loop to compare with step 15
    step18: create a compara varible and asign it step 17 value
    step19: if month < less then step 18 month and day is < less then step 18 day and hour is < less then step 18 hour  and miniutes is < less the step 18 minitue and step 18 contactId does not include in step 12 asign step 15 step 19 value
    step20: if step 17 has run/looped finsih and set the lowst value to step 15 check if value id already exsit step 12 array if not push step 15 to step 11 and push step 15 contact id to step 12
    step21: continue with step 14 loop
    step22: if step 14 has complited continue with step 13 loop chek its condition if not meat repeat step 13 to step 22 else if meat continue to next block of code
    step23: if step 13  is resolved set  step 5 varible value to step 7 compaired value 
    step24: copy step 11 array to step 2 sorted array exp step2 =[...step 11];
    step25: continue step 6 loop and repeat code blocks
    */
    const clonedList = [...list];
    let sortedList: any = [];
    let monthList = []; //month array
    let validatedMonthAndYear = undefined;
    //first loop
    for (const data of clonedList) {
      const dataValue = data; // data value
      const [dM, _, dY] = dataValue.date.split("/");
      if (`${dM}/${dY}` === validatedMonthAndYear) continue;
      //nested array to compire all value to datavalue
      for (const dataCompare of clonedList) {
        const [dcM, dcD, dcY] = dataCompare.date.split("/");
        if (`${dM}/${dY}` === `${dcM}/${dcY}`) {
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
          const [newTM, newTD, _] = timeMonthDay.date.split("/");
          const [newTH, newTMn] = timeMonthDay.time.split(":");
          //nested loop
          for (const newDataCompare of monthList) {
            const newTimeMonthDay = newDataCompare;
            const [newTCM, newTCD, _] = newTimeMonthDay.date.split("/");
            const [newTCH, newTCMn] = newTimeMonthDay.time.split("/");
            if (
              Number(newTCM) == Number(newTM) &&
              Number(newTCD) < Number(newTD) &&
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
        if (tembMonth.length === monthList.length) {
          // set validatedMonth and year  to already calculated logic
          monthList = [];
          validatedMonthAndYear = `${dM}/${dY}`;
          //push to sortedlist
          for (const fliterList of tembMonth) {
            sortedList.push(fliterList);
          }
        }
      } //end of new bloock code/logic
    }
    console.log("total filter");
    console.log(sortedList);
  }
  //doSomeLogic();
}
