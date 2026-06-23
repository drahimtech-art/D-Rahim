import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import MessageMe from "./MessageMe";
import MessageFrom from "./MessageFrom";

function MessageContent() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { chatContact } = userDetails;
  return (
    <div className="pt-7.5 pb-7.5 w-full h-full flex flex-col gap-7.5 ">
      {chatContact?.messages.map((e, i) => {
        if (chatContact.contactId !== e.from)
          return (
            <MessageMe
              text={e.text}
              date={e.date}
              time={e.time}
              key={`messages-key-${i}`}
            />
          );
        return (
          <MessageFrom
            text={e.text}
            date={e.date}
            time={e.time}
            key={`messages-key-${i}`}
          />
        );
      })}
    </div>
  );
}
export default MessageContent;
