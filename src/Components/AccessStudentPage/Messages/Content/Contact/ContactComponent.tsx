import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { SocketApi } from "../../../../ContextApi/SocketApi";
import { useEffect, useState } from "react";
import noProfileImg from "/images/noProfileImage.jpeg";
import { newMessageToTopMultipleTimes } from "./newMessageToTop/newMessageToTop";
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
  contactImage: string | null;
  chatGroupId: string;
  isConnected: boolean;
};

function ContactComponent({ connectionInfo }: { connectionInfo: Connections }) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const socketApi = SocketApi();
  const { socket, receiveMessage, clearRecivedMessage } = socketApi;
  const {
    setChatContact,
    chatContact,
    userInfo,
    inputMessage,
    setInputMessage,
    sendMessage,
    setSendMessage,
    setContactMessages,
    files,
    setFiles,
    isFiles,
    setIsFiles,
    setSortedConections,
    setConectionsWithTimeStap,
  } = userDetails;
  const [contactMessagesTemb, setContactMessagesTemb] = useState<Messages[]>(
    [],
  );
  const [lastMessageTime, setLastMessageTime] = useState<string>("");
  //
  const lastMessageIndex = contactMessagesTemb.length;
  const [lastMessageTimeAndDate, setLastMessageTimeAndDate] = useState({
    date: "",
    time: "",
  });
  const [isMessagesLoaded, setIsMessagesLoaded] = useState<boolean>(false);
  //
  //start chat with contact
  function obenChatBox() {
    const data: ChatContact = {
      contactId: connectionInfo.contactId,
      contactFirstName: connectionInfo.contactFirstName,
      contactLastName: connectionInfo.contactLastName,
      contactImage: connectionInfo.contactImage,
      chatGroupId: connectionInfo.chatGroupId,
      isConnected: connectionInfo.isConnected,
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
  //update connections with dataAndTime and move latest time and date to top
  function updateMoveContactToTopOnce() {
    const lastTimeStap = { ...lastMessageTimeAndDate };
    const contactInfor = { ...connectionInfo };
    if (
      lastTimeStap.date.trim() === "" ||
      lastTimeStap.time.trim() === "" ||
      isMessagesLoaded
    )
      return;
    setIsMessagesLoaded(true);
    //contact info with new timeStap
    const replaceData: SortingData = {
      contactFirstName: contactInfor.contactFirstName,
      contactLastName: contactInfor.contactLastName,
      contactId: contactInfor.contactId,
      contactImage: contactInfor.contactImage,
      chatGroupId: contactInfor.chatGroupId,
      invite: contactInfor.invite,
      isConnected: contactInfor.isConnected,
      bio: contactInfor.bio,
      date: lastTimeStap.date,
      time: lastTimeStap.time,
    };
    //filter and replace list with replace data
    setConectionsWithTimeStap((prevConnections) => {
      const contactId = [];
      const newUpdatedLIstData: Connections[] = [];
      for (const contact of prevConnections) {
        //check if connection is in list and update it with new infor
        if (contact.contactId === replaceData.contactId) {
          //this only run if connection alredy esist
          newUpdatedLIstData.push(replaceData);
          contactId.push(replaceData.contactId);
        } else {
          // add everthing else
          newUpdatedLIstData.push(contact);
          contactId.push(contact.contactId);
        }
        if (newUpdatedLIstData.length === prevConnections.length) {
          //check if connection is not in list add
          if (!contactId.includes(replaceData.contactId)) {
            // this run if connection is not in list
            newUpdatedLIstData.push(replaceData);
            contactId.push(replaceData.contactId);
          }
        }
      }
      return [...newUpdatedLIstData];
    });
  }
  //call to top funtion if hole list is updated
  //get messages on mount
  useEffect(() => {
    if (!connectionInfo.chatGroupId) return;
    const getContactChatHistory = async (groupId: string) => {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);

        const requstBody = {
          groupId: groupId,
        };
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
          setContactMessagesTemb(responds.chatHistory);
        } else {
          console.log(responds.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getContactChatHistory(connectionInfo.chatGroupId);
  }, []);
  //move contact to top on new message
  async function updateMoveContactToTopMulitipleTimes(
    contactInfo: Connections,
  ) {
    newMessageToTopMultipleTimes({
      contactInfo: contactInfo,
      setSortedConections: setSortedConections,
    });
  }
  // update chatHistory
  function saveNewChat(message: Messages) {
    const from = message.from;
    if (from !== connectionInfo.contactId) return;
    console.log(`from ${from}`, `to ${connectionInfo.contactId}`);
    setContactMessagesTemb((prevMessages) => {
      return [...prevMessages, message];
    });
    clearRecivedMessage();
    updateMoveContactToTopMulitipleTimes(connectionInfo);
  }
  // listion on new message
  useEffect(() => {
    if (!receiveMessage) return;
    saveNewChat(receiveMessage);
  }, [receiveMessage]);
  //send files(images);
  async function sendFiles(
    message: Messages,
    room: { chatId: string; connection: string },
  ) {
    if (!files) return;
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      const newFile = files;
      const body = {
        message: {
          from: message.from,
          to: message.to,
          type: message.type,
          imgUrl: "",
          date: message.date,
          time: message.time,
          text: "",
        },
        room: room,
      };
      setFiles(undefined);
      setIsFiles(false);
      const formData = new FormData();
      formData.append("image", newFile);
      formData.append("message", JSON.stringify(body));
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const requst = await fetch(`${serverPort}/connection/upload/file`, {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
        },
        body: formData,
      });
      const responds = await requst.json();
      console.log(responds);
    } catch (error) {
      console.log(error);
    }
  }
  //send message
  function sendChat(
    message: Messages,
    room: { chatId: string; connection: string },
  ) {
    if (!socket) return;
    socket.emit("send-message", message, room);
  }
  //save message
  function saveChat(message: Messages) {
    if (!chatContact) return;
    setContactMessagesTemb([...contactMessagesTemb, message]);
    setInputMessage("");
    updateMoveContactToTopMulitipleTimes(connectionInfo);
  }
  function sendMessageAndFiles() {
    if (!chatContact) return;
    if (inputMessage.trim() === "" && !isFiles) return;
    const date = new Date();
    const month =
      date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : `0${date.getMonth() + 1}`;
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    const year = date.getFullYear();
    const dateFomart = `${month}/${day}/${year}`;
    const hour =
      date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    const minites =
      date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    const timeFomart = `${hour}:${minites}`;
    const messageFomart: Messages = {
      from: userInfo.connectionId,
      to: chatContact.contactId,
      type: isFiles ? "image" : "text",
      imgUrl: isFiles ? (files ? URL.createObjectURL(files as Blob) : "") : "",
      date: dateFomart,
      time: timeFomart,
      text: inputMessage,
    };
    if (chatContact.contactId !== connectionInfo.contactId) return;
    saveChat(messageFomart);
    if (isFiles)
      return sendFiles(messageFomart, {
        chatId: chatContact.chatGroupId,
        connection: chatContact.contactId,
      });
    sendChat(messageFomart, {
      chatId: chatContact.chatGroupId,
      connection: chatContact.contactId,
    });
  }
  //sendMessage
  useEffect(() => {
    if (!chatContact) return;
    if (
      sendMessage === true &&
      connectionInfo.contactId === chatContact.contactId
    ) {
      sendMessageAndFiles();
      setSendMessage(false);
    }
  }, [sendMessage, chatContact]);
  //add data to chat box
  useEffect(() => {
    if (!chatContact) return;
    if (chatContact.contactId !== connectionInfo.contactId) return;
    setContactMessages([...contactMessagesTemb]);
  }, [chatContact, contactMessagesTemb]);
  //lastmessageTime logic
  function getLastMessageTime(time: string, date: string) {
    const newDate = new Date();
    const newHour = Number(newDate.getHours());
    const newMinites = Number(newDate.getMinutes());
    const newMonth = Number(newDate.getMonth() + 1);
    const newDay = Number(newDate.getDate());
    const newYear = newDate.getFullYear().toString();
    //
    const oldMonth = Number(date.split("/")[0]);
    const oldDay = Number(date.split("/")[1]);
    const oldYear = date.split("/")[2];
    let oldHour = Number(time.split(":")[0]);
    let oldMinites = Number(time.split(":")[1]);
    let timePassed;
    //minites passed
    if (
      oldHour === newHour &&
      oldMonth === newMonth &&
      oldDay === newDay &&
      oldYear === newYear
    ) {
      timePassed = newMinites - oldMinites;
      if (timePassed === 0) return "just now";
      return `${timePassed}m`;
    }
    //hours passed
    if (
      oldHour !== newHour &&
      oldMonth === newMonth &&
      oldDay === newDay &&
      oldYear === newYear
    ) {
      timePassed = newHour - oldHour;
      return `${timePassed}h`;
    }
    //days passed
    if (oldMonth === newMonth && oldYear === newYear && oldDay !== newDay) {
      timePassed = newDay - oldDay;
      return `${timePassed}d`;
    }
    //months passed
    if (oldMonth !== newMonth && oldYear === newYear) {
      timePassed = newMonth - oldMonth;
      return `${timePassed}M`;
    }
    //years
    if (oldYear !== newYear) {
      timePassed = newMonth - oldMonth;
      return `>0y`;
    }
    console.log(timePassed);
  }
  //last message time control logic
  useEffect(() => {
    //call back to update last message time ux every 1min
    const updateTimeEverMinites = setInterval(() => {
      if (lastMessageIndex === 0) return;
      const timeStap = getLastMessageTime(
        contactMessagesTemb[lastMessageIndex - 1].time,
        contactMessagesTemb[lastMessageIndex - 1].date,
      );
      setLastMessageTime(timeStap ? timeStap : "");
    }, 10000);
    //on change message funtion
    if (lastMessageIndex === 0) return;
    const date = contactMessagesTemb[lastMessageIndex - 1].date;
    const time = contactMessagesTemb[lastMessageIndex - 1].time;
    const timeStap = getLastMessageTime(time, date);
    setLastMessageTime(timeStap ? timeStap : "");
    setLastMessageTimeAndDate({ date: date, time: time });
    //
    return () => clearInterval(updateTimeEverMinites);
  }, [lastMessageIndex, contactMessagesTemb]);
  //call message to top if lastMessage time and date changes
  useEffect(() => {
    updateMoveContactToTopOnce();
  }, [lastMessageTimeAndDate]);
  return (
    <div
      className="w-full h-fit p-2.5 pr-5.5 flex items-center gap-2.5  rounded-2xl pointer transition-all"
      style={activeAndNotActiveButtonStyle}
      onClick={obenChatBox}
    >
      {/**profile image */}
      <span className="min-w-12.5 max-w-12.5 h-12.5">
        <img
          className="w-full h-full rounded-full"
          src={
            connectionInfo.contactImage
              ? connectionInfo.contactImage
              : noProfileImg
          }
        ></img>
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
          <h5 className="ml-auto font-normal font-sans text-[13px] ">
            {lastMessageTime}
          </h5>
        </span>
        {/**message */}
        <span>
          <h5 className="font-sans font-normal text-[16px]  line-clamp-1">
            {lastMessageIndex !== 0
              ? contactMessagesTemb[lastMessageIndex - 1].type === "text"
                ? contactMessagesTemb[lastMessageIndex - 1].text
                : "photo"
              : "..."}
          </h5>
        </span>
      </div>
    </div>
  );
}
export default ContactComponent;
