type Messages = {
  date: string;
  time: string;
  text: string;
  type: string;
  imgUrl: string;
};
function MessageMe(props: Messages) {
  return (
    <div className="w-full flex justify-end">
      <div className="p-2.5 pl-4 pr-4 max-w-80.5 h-fit rounded-2xl rounded-br-none bg-[#004A3C]">
        <span className="flex flex-col gap-2.5">
          {props.type === "text" ? (
            <h5 className="font-normal font-sans text-[16px] text-[#FFFFFF] ">
              {props.text}
            </h5>
          ) : (
            <img className="w-full h-fit" src={props.imgUrl}></img>
          )}
          {/**time */}
          <h5 className="font-normal text-[12px] font-sans text-[#FFFFFF]">
            {props.time} AM
          </h5>
        </span>
      </div>
    </div>
  );
}
export default MessageMe;
