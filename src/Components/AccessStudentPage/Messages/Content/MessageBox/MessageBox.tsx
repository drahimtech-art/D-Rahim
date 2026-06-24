import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { useEffect, useRef, type ChangeEvent } from "react";
import Head from "./Head";
import MessageContent from "./Content/MessageContent";
import SendMessageAndFiles from "./SendMessageAndFiles";
function MessageBox() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const {
    chatContact,
    inputMessage,
    setInputMessage,
    contactMessages,
    setSendMessage,
  } = userDetails;
  if (!chatContact) return;
  const scrollDiv = useRef<HTMLDivElement | null>(null);
  function controlScroll() {
    const container = scrollDiv.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }
  useEffect(() => {
    controlScroll();
  }, [contactMessages]);
  //send message logic
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const data: string = e.target.value;
    setInputMessage(data);
  }
  function sendMessageAndFiles() {
    setSendMessage(true);
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
          <MessageContent
            messages={contactMessages}
            contactId={chatContact.contactId}
          />
        </div>
      </div>
      {/**end/ send message & files action buttion */}
      <SendMessageAndFiles
        input={inputMessage}
        inputChange={handleInputChange}
        sendMessageAndFiles={sendMessageAndFiles}
      />
    </div>
  );
}
export default MessageBox;
