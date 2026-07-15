import { useState, useRef } from "react";
import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import noProfileImg from "/images/noProfileImage.jpeg";
type RequstInfo = {
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  bio: string;
  contactId: string;
  isConnected: boolean;
  removeRequst: (requstId: string) => void;
};
function ConnectionCard(props: RequstInfo) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  const [acceptRequst, setAcceptRequst] = useState<boolean>(false);
  const acceptRequstRef = useRef<HTMLButtonElement | null>(null);
  const rejectRequstRef = useRef<HTMLButtonElement | null>(null);
  async function acceptConnectionRequst() {
    if (acceptRequst || !acceptRequstRef.current) return;
    setAcceptRequst(true);
    acceptRequstRef.current.classList.remove("AllowedPointerForButton");
    acceptRequstRef.current.classList.add("notallowedPointerForButton");
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const connectionId = userInfo.connectionId;
      const requst = await fetch(
        `${serverPort}/connection/accept/requst/${props.contactId}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ connectionId: connectionId }),
        },
      );
      const responds = await requst.json();
      if (responds.ok) {
        alert(responds.message);
        acceptRequstRef.current.classList.remove("notallowedPointerForButton");
        acceptRequstRef.current.classList.add("AllowedPointerForButton");
        props.removeRequst(props.contactId);
      }
      setAcceptRequst(false);
    } catch (error) {
      console.log(error);
      setAcceptRequst(false);
      acceptRequstRef.current.classList.remove("notallowedPointerForButton");
      acceptRequstRef.current.classList.add("AllowedPointerForButton");
    }
  }
  return (
    <div className="w-full grid grid-cols-[15%_40%_45%] items-center   pb-1 border-b border-gray-500">
      {/**profileImage */}
      <span className="w-10 h-10 mr-auto ml-1.5 ">
        <img
          className="min-w-10 max-w-10 min-h-10 max-h-10 rounded-full"
          src={props.imageUrl ? props.imageUrl : noProfileImg}
        ></img>
      </span>
      {/**name and info */}
      <span className="flex flex-col  mr-auto  pr-2">
        <span className="flex line-clamp-1 w-full">
          <h5 className="font-medium text-[20px] ml-1 line-clamp-1 w-fit ">
            {props.firstName} {props.lastName}
          </h5>
        </span>
        <h5 className="font-medium  text-[16px] line-clamp-1 text-gray-500">
          {props.bio}
        </h5>
      </span>
      {/**action button */}
      <span className="flex gap-1.75 items-center ">
        <button className="flex h-8.75 justify-center items-center p-2 mr-1.5 rounded-full border border-[#C0392B] bg-[#f1e3e1] AllowedPointerForButton">
          <h5 className="text-[#C0392B] font-sans font-medium text-[16px]">
            Decline
          </h5>
        </button>
        <button
          className="flex h-8.75 justify-center items-center p-2 mr-1.5 rounded-full bg-[#11AC76] AllowedPointerForButton"
          onClick={acceptConnectionRequst}
          ref={acceptRequstRef}
        >
          <h5 className="text-gray-100 font-sans font-medium text-[16px]">
            Accept
          </h5>
        </button>
      </span>
    </div>
  );
}
export default ConnectionCard;
