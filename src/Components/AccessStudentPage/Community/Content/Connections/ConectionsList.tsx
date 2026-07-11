import { useState, useEffect } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import ConnectionsCard from "./ConnectionsCard";
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  bio: string;
  date?: string;
  time?: string;
};
type ChatContact = {
  contactId: string;
  contactFirstName: string;
  contactLastName: string;
  contactImage: string | null;
  chatGroupId: string;
};
function ConectionsList() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { conections, setConections } = userDetails;
  const [connectionList, setConectionList] =
    useState<Connections[]>(conections);
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
          setConectionList(data);
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
    <div className="mt-4.5">
      {/***total connectsCount */}
      <span>
        <h5 className="font-semibold font-sans min18pxMax20px">
          {conections.length} Connections
        </h5>
      </span>
      {/**connectionsList */}
      <div className="mt-5.25 flex flex-col ga-2.5 border border-[#11AC76] rounded-2xl pl-1.5 pr-1.5 pt-4 pb-4">
        {/**connections card */}
        {connectionList.map((e: Connections) => {
          return (
            <ConnectionsCard
              contactId={e.contactId}
              contactFirstName={e.contactFirstName}
              contactLastName={e.contactLastName}
              chatGroupId={e.chatGroupId}
              contactImage={e.contactImage}
              bio={e.bio}
              key={`connection-key-${e.contactId}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ConectionsList;
