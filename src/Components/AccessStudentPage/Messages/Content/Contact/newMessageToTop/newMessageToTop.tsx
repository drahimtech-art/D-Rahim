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
      date: "06/09/2020",
      time: "06:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1144",
      date: "06/15/2026",
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
      date: "06/10/2026",
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
      date: "06/07/2028",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc175",
      date: "06/10/2028",
      time: "08:55",
    },
    {
      contactId: "8531f3d4-ff8c-49dd-a157-115c9f83cc1325",
      date: "06/10/2018",
      time: "08:55",
    },
  ];

  function filterByYearLowestFirst() {
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
    const contactList = [...expectedData];
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
      console.log(sortedList);
      console.log(storedListId);
    }
  }
  filterByYearLowestFirst();
  //doSomeLogic();
}
