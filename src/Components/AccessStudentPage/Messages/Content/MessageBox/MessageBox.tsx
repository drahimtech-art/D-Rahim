import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { SocketApi } from "../../../../ContextApi/SocketApi";
import { useState, useEffect, useRef, type ChangeEvent } from "react";
import Head from "./Head";
import MessageContent from "./Content/MessageContent";
import SendMessageAndFiles from "./SendMessageAndFiles";

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
function MessageBox() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const { chatContact, userInfo, setChatContact } = userDetails;
  const [input, setInput] = useState<string>("");
  const scrollDiv = useRef<HTMLDivElement | null>(null);
  function controlScroll() {
    const container = scrollDiv.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }
  useEffect(() => {
    controlScroll();
  }, []);
  //reacive message logic
  useEffect(() => {
    if (!socket) return;
    console.log("receive message mount");
    socket.on("receive-message", (message) => saveChat(message));
    //
    return () => {
      socket.off("receive-message");
      console.log("receive message clean up");
    };
  }, [socket, chatContact]);
  //send message logic
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const data: string = e.target.value;
    setInput(data);
  }
  function sendChat(message: Messages, room: string) {
    if (!socket) return;
    socket.emit("send-message", message, room);
  }
  function saveChat(message: Messages) {
    if (!chatContact) return;
    const contactFirstName = chatContact.contactFirstName;
    const contactLastName = chatContact.contactLastName;
    const contactId = chatContact.contactId;
    const oldChat = chatContact.messages;
    const newChat = [...oldChat, message];
    const newChatInfo: ChatContact = {
      contactId: contactId,
      contactFirstName: contactFirstName,
      contactLastName: contactLastName,
      messages: [...newChat],
    };
    setChatContact(newChatInfo);
    setInput("");
    setTimeout(() => {
      controlScroll();
    }, 300);
  }
  function sendMessageAndFiles() {
    if (!chatContact) return;
    if (input.trim() === "") return;
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
      type: "text",
      imgUrl: "",
      date: dateFomart,
      time: timeFomart,
      text: input,
    };
    saveChat(messageFomart);
    sendChat(messageFomart, chatContact.contactId);
  }
  return (
    <div className="w-full flex flex-col p-1.25 h-full bg-[#DBFFDF] rounded-2xl overflow-hidden">
      {/**head */}
      <Head
        firstName={chatContact?.contactFirstName}
        lastName={chatContact?.contactLastName}
        status={"online"}
      />
      {/**content */}
      <div className="w-full relative h-full  overflow-y-auto" ref={scrollDiv}>
        <div className=" max-h-full">
          <MessageContent />
        </div>
      </div>
      {/**end/ send message & files action buttion */}
      <SendMessageAndFiles
        input={input}
        inputChange={handleInputChange}
        sendMessageAndFiles={sendMessageAndFiles}
      />
    </div>
  );
}
export default MessageBox;
