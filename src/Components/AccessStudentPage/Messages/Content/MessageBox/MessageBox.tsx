import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
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
    setFiles,
    isFiles,
    setIsFiles,
  } = userDetails;
  if (!chatContact) return;
  const [parentHeight, setPrarentHeight] = useState<number>(0);
  const parentContainerRef = useRef<HTMLDivElement | null>(null);
  const [displayImage, setDisplayImage] = useState<string>("");
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
  //upload image files logic
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    console.log(typeof file);
    const url = URL.createObjectURL(file);
    console.log(file);
    file.arrayBuffer().then((e) => {
      console.log(encodeURI(url));
    });
    setDisplayImage(url);
    setFiles(file);
    setIsFiles(true);
  }
  function canculeFileInput() {
    setDisplayImage("");
    setFiles(undefined);
    setIsFiles(false);
  }
  //set image max height
  useEffect(() => {
    if (!parentContainerRef.current) return;
    setPrarentHeight(parentContainerRef.current.scrollHeight);
  }, [parentContainerRef.current?.scrollHeight]);
  //remove image if contact change
  useEffect(() => {
    canculeFileInput();
  }, [chatContact.contactId]);
  return (
    <div
      className="w-full flex flex-col p-1.25 h-full bg-[#DBFFDF] rounded-2xl overflow-hidden"
      ref={parentContainerRef}
    >
      {/**head */}
      <Head
        firstName={chatContact?.contactFirstName}
        lastName={chatContact?.contactLastName}
        status={"online"}
      />
      {/**content */}
      {!isFiles && (
        <div className="w-full h-full  overflow-y-auto" ref={scrollDiv}>
          <div className=" max-h-full">
            <MessageContent
              messages={contactMessages}
              contactId={chatContact.contactId}
            />
          </div>
        </div>
      )}
      {/**image view */}
      {isFiles && (
        <div className="w-full relative h-full bg-[#DBFFDF] ">
          <img
            className=" w-fit h-fit rounded-2xl"
            style={{
              maxHeight: parentHeight - 140,
            }}
            src={displayImage}
          ></img>
        </div>
      )}
      {/**end/ send message & files action buttion */}
      <SendMessageAndFiles
        input={inputMessage}
        inputChange={handleInputChange}
        sendMessageAndFiles={sendMessageAndFiles}
        setIsFiles={setIsFiles}
        fileChage={handleFileChange}
        isFiles={isFiles}
        canculeFileInput={canculeFileInput}
      />
    </div>
  );
}
export default MessageBox;
