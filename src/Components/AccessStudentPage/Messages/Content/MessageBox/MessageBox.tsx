import Head from "./Head";
import MessageContent from "./Content/MessageContent";
import SendMessageAndFiles from "./SendMessageAndFiles";
function MessageBox() {
  return (
    <div className="w-full  flex flex-col p-1.25 h-full bg-[#DBFFDF] rounded-2xl overflow-hidden">
      {/**head */}
      <Head />
      {/**content */}
      <div className="w-full relative h-full  overflow-y-auto">
        <MessageContent />
      </div>
      {/**end/ send message & files action buttion */}
      <SendMessageAndFiles />
    </div>
  );
}
export default MessageBox;
