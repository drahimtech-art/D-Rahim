import type { SetStateAction } from "react";

type SortingData = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  sentAt: Date;
};
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  sentAt?: Date;
};
export function newMessageToTopOnce({
  connections,
}: {
  connections: SortingData[];
}) {
  if (!connections) return;
  function filterDublicate(list: SortingData[]) {
    // save swicth to stop dublication
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
    return [...dublicateFreeList];
  }

  const sortByDataAndTime = (message: SortingData[]) => {
    return message.sort((a, b) => {
      const getTime = (m: SortingData) => {
        const [date, time] = m.sentAt.toLocaleString().split("T");
        const [year, month, day] = date.split("-").map(Number);
        const [hour, miniute] = time.split(":").map(Number);
        return new Date(year, month - 1, day, hour, miniute).getTime();
      };
      return getTime(b) - getTime(a);
    });
  };
  const sortedList = sortByDataAndTime(filterDublicate(connections));
  return [...sortedList];
}
//
export function newMessageToTopMultipleTimes({
  contactInfo,
  setSortedConections,
}: {
  contactInfo: Connections;
  setSortedConections: React.Dispatch<SetStateAction<Connections[]>>;
}) {
  if (!contactInfo) return;
  setSortedConections((prevConnections) => {
    const removeContactFromList = [...prevConnections].filter(
      (e: Connections) => e.contactId !== contactInfo.contactId,
    );
    const newList = [contactInfo, ...removeContactFromList];
    return [...newList];
  });
}
