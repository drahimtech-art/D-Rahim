import { useState, useEffect, type ChangeEvent } from "react";
//import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { MessagesApi } from "../../../../ContextApi/MessagesApi";
import Head from "./Head";
import HeadMenu from "../Head";
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
type CommunityPagesControl = {
  feedsState: boolean;
  groupState: boolean;
  connectionsState: boolean;
  toFeedsPage: () => void;
  toGroupsPage: () => void;
  toConnectionsPage: () => void;
};
function Connections(props: CommunityPagesControl) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  //const userDetails = StudentsAppData();
  const messagesContextData = MessagesApi();
  const { conections, setConections } = messagesContextData;
  const [connectionList, setConectionList] =
    useState<Connections[]>(conections);
  const [search, setSearch] = useState<string>("");
  //filter connections list by search
  function toFilterConnectionsList(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
    const filtedConnection = conections.filter((e) => {
      const fullName = `${e.contactFirstName.toLocaleLowerCase().trim()} ${e.contactLastName.toLocaleLowerCase().trim()}`;
      if (
        e.contactFirstName
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        e.contactLastName
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        fullName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
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
      {/**head  */}
      <HeadMenu
        feedsSate={props.feedsState}
        groupState={props.groupState}
        connectionsState={props.connectionsState}
        toFeedsPage={props.toFeedsPage}
        toGroupsPage={props.toGroupsPage}
        toConnectionsPage={props.toConnectionsPage}
      />
      {/**head, search bar and filter bar */}
      <Head search={search} toFilterConnectionsList={toFilterConnectionsList} />
      {/**connections list */}
      <ConectionsList connectionList={connectionList} />
    </div>
  );
}
export default Connections;
