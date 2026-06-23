import MessageMe from "./MessageMe";
import MessageFrom from "./MessageFrom";

function MessageContent() {
  return (
    <div className="pt-7.5 pb-7.5 w-full h-full flex flex-col gap-7.5 ">
      {/**message from and to */}
      {/**from */}
      <MessageFrom />
      {/**me */}
      <MessageMe />
      {/**from */}
      <MessageFrom />
      {/**me */}
      <MessageMe />
      {/**from */}
      <MessageFrom />
      {/**me */}
      <MessageMe />
      {/**end */}
    </div>
  );
}
export default MessageContent;
