import { useSearchParams } from "react-router-dom";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import noProfileImg from "/images/noProfileImage.jpeg";
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
type ChatContact = {
  contactId: string;
  contactFirstName: string;
  contactLastName: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
};
function ConnectionsCard(props: Connections) {
  const [searchParems, setSearchParems] = useSearchParams();
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { setChatContact } = userDetails;
  //start chat with contact
  function setChatBoxInfo() {
    const data: ChatContact = {
      contactId: props.contactId,
      contactFirstName: props.contactFirstName,
      contactLastName: props.contactLastName,
      contactImage: props.contactImage,
      chatGroupId: props.chatGroupId,
      invite: props.invite,
      isConnected: props.isConnected,
    };
    setChatContact(data);
  }
  function toMessagePage() {
    setChatBoxInfo();
    setSearchParems({
      verified: "true",
      page: "messages",
    });
  }
  return (
    <div className="pl-1 pr-1 pt-2.5 pb-2.5 flex items-center border-b-[1.5px] border-gray-400">
      {/**profile image and info */}
      <div className="w-fit flex gap-4.25 items-center max-w-[70%]">
        {/**profile image */}
        <span className="w-15 h-15 ">
          {props.contactImage ? (
            <img
              className="min-w-15 min-h-15 max-w-15 max-h-15 rounded-full"
              src={props.contactImage}
            ></img>
          ) : (
            <img
              className="min-w-15 min-h-15 max-w-15 max-h-15 rounded-full"
              src={noProfileImg}
            ></img>
          )}
        </span>
        {/**info */}
        <span>
          <span className="flex w-fit gap-1.5 items-center">
            <h5 className="font-sans min18pxMax20px font-medium mr-auto">
              {props.contactFirstName}
            </h5>
            <h5 className="font-sans min18pxMax20px font-medium mr-auto">
              {props.contactLastName}
            </h5>
          </span>
          <h5 className=" font-medium text-[16px] text-gray-500 line-clamp-2">
            {props.bio}
          </h5>
        </span>
      </div>
      {/**action button */}
      <span className="w-fit h-fit flex justify-center items-center ml-auto">
        <button
          className="w-fit h-9.75 pl-3.75 pr-3.75 pt-2.5 pb-2.5 rounded-[30px] border border-[#11AC76] bg-[#deffe3] flex justify-center items-center pointer"
          onClick={toMessagePage}
        >
          <h5 className="font-medium font-sans text-[16px] text-[#11AC76]">
            Message
          </h5>
        </button>
      </span>
    </div>
  );
}
export default ConnectionsCard;
