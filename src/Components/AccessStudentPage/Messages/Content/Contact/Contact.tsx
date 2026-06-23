import { useState, useEffect } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
//import contactImg1 from "/images/contact.png";
//import contactImg2 from "/images/contact_1.png";
//import contactImg3 from "/images/contact_2.png";
//import contactImg4 from "/images/contact_3.png";
import ContactComponent from "./ContactComponent";
//import GroupContactComponet from "./GroupContactComponet";
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string;
};
function Contact() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { conections, setConections } = userDetails;
  const [connnectionList, setConectionList] =
    useState<Connections[]>(conections);
  console.log(connnectionList);
  //getConnections
  useEffect(() => {
    //update temb list if main list change
    setConectionList(conections);
  }, [conections]);
  useEffect(() => {
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
  }, []);
  return (
    <div className="w-full h-full  bg-white  pl-2 pr-2 flex flex-col pb-20 gap-7.5 overflow-y-scroll">
      {connnectionList.map((e: Connections, i: number) => {
        return (
          <ContactComponent
            connectionInfo={e}
            key={`connection-index-key-${i}`}
          />
        );
      })}
    </div>
  );
}
export default Contact;
