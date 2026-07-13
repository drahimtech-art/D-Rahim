import { useEffect, useState } from "react";
import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import ConnectionCard from "./ConnectionCard";
type ConnectionsRequst = {
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  bio: string;
  contactId: string;
  invite: boolean;
  isConnected: boolean;
};
function FriendsRequst() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  const [connectionsRequstList, setConnectionsRequstList] = useState<
    ConnectionsRequst[]
  >([]);
  const [displayConnectionList, setDisplayConnectionList] = useState<
    ConnectionsRequst[]
  >([]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  //get friend requst
  useEffect(() => {
    async function getConnectionsRequst() {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(
          `${serverPort}/connection/requst/${userInfo.connectionId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "X-Frontend-Key": `${key}`,
              "Content-Type": "application/json",
            },
          },
        );
        const responds = await requst.json();
        if (responds.ok) {
          const list: ConnectionsRequst[] = responds.requsts;
          setConnectionsRequstList(list);
          const listLimit4 = [];
          for (let i = 0; i < list.length; i++) {
            const data = list[i];
            if (i <= 4) {
              listLimit4.push(data);
            }
          }
          setDisplayConnectionList(listLimit4);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getConnectionsRequst();
  }, []);
  function handleSeeMore() {
    const allRequst = [...connectionsRequstList];
    setDisplayConnectionList(allRequst);
    setSeeMore(true);
  }
  //remove requst from display list after been validated on the backend
  function removeRequst(requstId: string) {
    const mainList = [...connectionsRequstList];
    const isFullDisplay = displayConnectionList.length > 4 ? true : false;
    const filtedList = mainList.filter((e) => {
      if (e.contactId !== requstId) return e;
    });
    setConnectionsRequstList(filtedList);
    if (isFullDisplay) {
      setDisplayConnectionList(filtedList);
    } else {
      const listLimit4 = [];
      for (let i = 0; i < filtedList.length; i++) {
        const data = filtedList[i];
        if (i <= 4) {
          listLimit4.push(data);
        }
      }
      setDisplayConnectionList(listLimit4);
    }
  }
  return (
    <div className="w-full h-full max-h-fit min-w-65   bg-[#FFFFFF] overflow-y-auto">
      <span>
        <h5 className="font-medium font-sans min20Max24px">Friend Request</h5>
      </span>
      {/**content */}
      <div className="flex flex-col gap-2.5">
        <div className="mt-5 rounded-2xl border-[1.5px] border-[#11AC76] p-2.5">
          <span className="mt-3.75 block pb-2 border-b border-[#11AC76] font-sans font-medium min18pxMax20px">
            <h5>Accept requests to grow network</h5>
          </span>
          {/**body */}
          <div className="mt-2.5 flex flex-col gap-3 ">
            {/**card */}
            {displayConnectionList.map((e) => {
              return (
                <ConnectionCard
                  firstName={e.firstName}
                  lastName={e.lastName}
                  contactId={e.contactId}
                  bio={e.bio}
                  isConnected={e.isConnected}
                  imageUrl={e.imageUrl}
                  removeRequst={removeRequst}
                  key={`connection-requst-key-${e.contactId}`}
                />
              );
            })}
          </div>
          {/*see more*/}
          {!seeMore && (
            <button
              className="flex justify-center items-center w-full h-fit pt-1.25 pb-3.25 pointer"
              onClick={handleSeeMore}
            >
              <h5 className="font-medium font-sans text-[16px] text-gray-500">
                See more{" "}
              </h5>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default FriendsRequst;
