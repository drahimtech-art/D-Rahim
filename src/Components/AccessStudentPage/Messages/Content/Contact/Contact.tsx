import { useState, useEffect } from "react";
//import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { MessagesApi } from "../../../../ContextApi/MessagesApi";
//import contactImg1 from "/images/contact.png";
//import contactImg2 from "/images/contact_1.png";
//import contactImg3 from "/images/contact_2.png";
//import contactImg4 from "/images/contact_3.png";
import ContactComponent from "./ContactComponent";
//import GroupContactComponet from "./GroupContactComponet";
import { newMessageToTopOnce } from "./newMessageToTop/newMessageToTop";
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  chatGroupId: string;
  contactImage: string | null;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  date?: string;
  time?: string;
};
type SortingData = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  date: string;
  time: string;
};
function Contact() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const messagesContextData = MessagesApi();
  const {
    conections,
    setConections,
    conectionsWithTimeStap,
    setConectionsWithTimeStap,
    sortedConections,
    setSortedConections,
  } = messagesContextData;
  const [connectionList, setConectionList] =
    useState<Connections[]>(conections);
  //getConnections
  useEffect(() => {
    //update temb list if main list change
    setConectionList(conections);
    //add to connections to be updated array/
    setConectionsWithTimeStap(conections);
  }, [conections]);
  useEffect(() => {
    //check if all connections info has a last message time and date stap
    if (conectionsWithTimeStap.length === 0) return;
    function validateAllTimeStapHasBeenCollected() {
      let pass = true;
      for (const data of conectionsWithTimeStap) {
        if (!data.date || data.date.trim() === "") {
          pass = false;
        }
      }
      if (pass) {
        const sortedConnectionsList = newMessageToTopOnce({
          connections: conectionsWithTimeStap as SortingData[],
        });
        if (sortedConnectionsList) {
          setSortedConections(sortedConnectionsList);
        }
      } else {
        setSortedConections(conectionsWithTimeStap);
      }
    }
    validateAllTimeStapHasBeenCollected();
  }, [conectionsWithTimeStap]);
  //
  useEffect(() => {
    if (sortedConections.length === 0) return;
    setConectionList(sortedConections);
  }, [sortedConections]);
  //
  useEffect(() => {
    if (conections.length !== 0) return;
    async function getConnectionsList() {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(`${serverPort}/connection/user/contacts`, {
          method: "GET",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
          },
        });
        const responds = await requst.json();
        if (responds.ok) {
          const data: Connections[] = responds.connections;
          setConections(data);
        } else {
          console.log(responds.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getConnectionsList();
  }, [conections]);
  return (
    <div className="w-full h-full  bg-white  pl-2 pr-2 flex flex-col pb-20 gap-7.5 overflow-y-scroll">
      {connectionList.map((e: Connections) => {
        return (
          <ContactComponent
            connectionInfo={e}
            key={`connection-index-key-${e.contactId}`}
          />
        );
      })}
    </div>
  );
}
export default Contact;
