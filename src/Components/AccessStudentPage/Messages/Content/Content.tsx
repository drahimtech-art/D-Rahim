import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import Contact from "./Contact/Contact";
import MessageBox from "./MessageBox/MessageBox";
function Content() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { chatContact } = userDetails;
  return (
    <div className="mt-7.5 w-full h-full max-h-full overflow-hidden flex gap-10 ">
      {/**left contact panel */}
      <div className=" h-full max-h-full overflow-y-auto w-full max-w-80.25  border-r border-[#5DD963]">
        <Contact />
      </div>
      {/**Message box */}
      {chatContact && (
        <div className="w-full max-h-full pb-20">
          <MessageBox />
        </div>
      )}
    </div>
  );
}
export default Content;
