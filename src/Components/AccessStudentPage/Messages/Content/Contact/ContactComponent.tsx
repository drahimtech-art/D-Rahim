import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { SocketApi } from "../../../../ContextApi/SocketApi";
import { useEffect, useState } from "react";
import contactImg1 from "/images/contact.png";
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string;
};
type Messages = {
  from: string;
  to: string;
  type: string;
  imgUrl: string;
  date: string;
  time: string;
  text: string;
};
type ChatContact = {
  contactId: string;
  contactFirstName: string;
  contactLastName: string;
  messages: Messages[];
};
type ContactMessages = {
  contactId: string;
  messages: Messages[];
};
function ContactComponent({ connectionInfo }: { connectionInfo: Connections }) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const { setChatContact, chatContact, userInfo } = userDetails;
  const [contactMessages, setContactMessages] = useState<ContactMessages>({
    contactId: "",
    messages: [],
  });
  //
  const lastMessageIndex = contactMessages.messages.length;
  //start chat with contact
  function obenChatBox() {
    const data: ChatContact = {
      contactId: connectionInfo.contactId,
      contactFirstName: connectionInfo.contactFirstName,
      contactLastName: connectionInfo.contactLastName,
      messages: [...contactMessages.messages],
    };
    setChatContact(data);
  }
  //
  const buttonStyle = (contactId: string): object => {
    const buttonContactId = connectionInfo.contactId;
    const chatBoxContactId = contactId;
    if (chatBoxContactId === buttonContactId)
      return {
        color: "#FFFFFF",
        backgroundColor: "#11AC76",
      };
    return {
      color: "black",
      backgroundColor: "transparent",
    };
  };
  const activeAndNotActiveButtonStyle = chatContact
    ? buttonStyle(chatContact.contactId)
    : {
        color: "black",
        backgroundColor: "transparent",
      };
  //get messages on mount
  useEffect(() => {
    if (!userInfo.connectionId || !connectionInfo.contactId) return;
    const getContactChatHistory = async (
      connectionId: string,
      contactId: string,
    ) => {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);

        const requstBody = {
          connectionId: connectionId,
          contactId: contactId,
        };
        console.log(JSON.stringify(requstBody));
        const requst = await fetch(
          `${serverPort}/connection/contact/messages`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "X-Frontend-Key": `${key}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requstBody),
          },
        );
        const responds = await requst.json();
        if (responds.ok) {
          setContactMessages(responds.chatHistory);
        } else {
          console.log(responds.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getContactChatHistory(userInfo.connectionId, connectionInfo.contactId);
  }, [connectionInfo.contactId, userInfo.connectionId]);
  // update chatHistory
  function saveChat(message: Messages) {
    const from = message.from;
    if (from !== connectionInfo.contactId) return;
    const newData = {
      contactId: contactMessages.contactId,
      messages: [...contactMessages.messages, message],
    };
    setContactMessages(newData);
  }
  // listion on new message
  useEffect(() => {
    if (!socket) return;
    console.log("receive message mount");
    socket.on("receive-message", (message) => saveChat(message));
    //
    return () => {
      socket.off("receive-message", (message) => saveChat(message));
      console.log("receive message clean up");
    };
  }, [socket, chatContact, contactMessages]);
  return (
    <div
      className="w-full h-fit p-2.5 pr-5.5 flex items-center gap-2.5  rounded-2xl pointer transition-all"
      style={activeAndNotActiveButtonStyle}
      onClick={obenChatBox}
    >
      {/**profile image */}
      <span className="min-w-12.5 max-w-12.5 h-12.5">
        <img className="w-full h-full" src={contactImg1}></img>
      </span>
      {/**name, message & time */}
      <div className="w-full flex flex-col gap-1.25">
        {/**name & time */}
        <span className="flex items-center">
          {/**name */}
          <h5 className="font-sans font-bold text-[16px]  line-clamp-1">
            {connectionInfo.contactFirstName} {connectionInfo.contactLastName}
          </h5>
          {/**time */}
          <h5 className="ml-auto font-normal font-sans text-[13px] ">2m</h5>
        </span>
        {/**message */}
        <span>
          <h5 className="font-sans font-normal text-[16px]  line-clamp-1">
            {lastMessageIndex !== 0
              ? contactMessages.messages[lastMessageIndex - 1].text
              : "..."}
          </h5>
        </span>
      </div>
    </div>
  );
}
export default ContactComponent;
