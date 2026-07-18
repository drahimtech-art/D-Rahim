import { MessageTimeStamp } from "./MessageTimeStamp";
import MessageMe from "./MessageMe";
import MessageFrom from "./MessageFrom";
type Messages = {
  from: string;
  to: string;
  type: string;
  imgUrl: string;
  sentAt: Date;
  text: string;
  _id?: string;
};
function MessageContent({
  messages,
  contactId,
}: {
  messages: Messages[];
  contactId: string;
}) {
  return (
    <div className="pt-7.5 pb-7.5 w-full h-full flex flex-col gap-7.5 ">
      {messages.map((e, i) => {
        if (contactId !== e.from)
          return (
            <MessageMe
              text={e.text}
              timePassed={MessageTimeStamp(e.sentAt)}
              type={e.type}
              imgUrl={e.imgUrl}
              key={`messages-key-${i}`}
            />
          );
        return (
          <MessageFrom
            text={e.text}
            timePassed={MessageTimeStamp(e.sentAt)}
            type={e.type}
            imgUrl={e.imgUrl}
            key={`messages-key-${i}`}
          />
        );
      })}
    </div>
  );
}
export default MessageContent;
