import noProfileImg from "/images/noProfileImage.jpeg";

function ConnectionsCard() {
  return (
    <div className="pl-1 pr-1 pt-2.5 pb-2.5 flex items-center border-b-[1.5px] border-gray-400">
      {/**profile image and info */}
      <div className="w-fit flex gap-4.25 items-center max-w-[70%]">
        {/**profile image */}
        <span className="w-15 h-15 ">
          <img
            className="min-w-15 min-h-15 max-h-15 max-w-15 rounded-full"
            src={noProfileImg}
          ></img>
        </span>
        {/**info */}
        <span>
          <h5 className="font-sans min18pxMax20px font-medium mr-auto">
            David Abiodun
          </h5>
          <h5 className=" font-medium text-[16px] text-gray-500 line-clamp-2">
            Full-Stack Dev @ Microtek Construction Company Full-Stack Dev @
            Microtek Construction Company
          </h5>
        </span>
      </div>
      {/**action button */}
      <span className="w-fit h-fit flex justify-center items-center ml-auto">
        <button className="w-fit h-9.75 pl-3.75 pr-3.75 pt-2.5 pb-2.5 rounded-[30px] border border-[#11AC76] bg-[#deffe3] flex justify-center items-center pointer">
          <h5 className="font-medium font-sans text-[16px] text-[#11AC76]">
            Message
          </h5>
        </button>
      </span>
    </div>
  );
}
export default ConnectionsCard;
