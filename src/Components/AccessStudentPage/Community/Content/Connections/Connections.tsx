import { useState, useEffect, type ChangeEvent } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import Head from "./Head";
import ConectionsList from "./ConectionsList";
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  date?: string;
  time?: string;
};
function Connections() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { conections, setConections } = userDetails;
  const [connectionList, setConectionList] =
    useState<Connections[]>(conections);
  const [search, setSearch] = useState<string>("");
  //filter connections list by search
  function toFilterConnectionsList(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
    const filtedConnection = conections.filter((e) => {
      if (
        e.contactFirstName
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        e.contactLastName
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
      ) {
        return e;
      }
    });
    setConectionList([...filtedConnection]);
  }
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
    <div className="w-full h-full">
      {/**head, search bar and filter bar */}
      <Head search={search} toFilterConnectionsList={toFilterConnectionsList} />
      {/**connections list */}
      <ConectionsList connectionList={connectionList} />
    </div>
  );
}
export default Connections;
