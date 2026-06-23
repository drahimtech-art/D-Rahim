import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { useState, useEffect, useRef } from "react";
import Head from "./Head";
import MessageContent from "./Content/MessageContent";
import SendMessageAndFiles from "./SendMessageAndFiles";
function MessageBox() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { chatContact } = userDetails;
  const [scrollToLastMessage, setScrollToLastMessage] = useState<boolean>(true);
  const scrollDiv = useRef<HTMLDivElement | null>(null);
  function controlScroll() {
    const container = scrollDiv.current;
    if (!container || !scrollToLastMessage) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    console.log(container.scrollHeight);
    setScrollToLastMessage(!scrollToLastMessage);
  }
  useEffect(() => {
    controlScroll();
  }, []);
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
      <SendMessageAndFiles />
    </div>
  );
}
export default MessageBox;
