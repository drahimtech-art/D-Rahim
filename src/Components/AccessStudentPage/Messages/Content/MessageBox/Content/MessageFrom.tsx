type Messages = {
  timePassed: string;
  text: string;
  type: string;
  imgUrl: string;
};
function MessageFrom(props: Messages) {
  return (
    <div className="w-full flex justify-start">
      <div className="p-2.5 pl-4 pr-4 max-w-80.5 h-fit rounded-2xl rounded-bl-none bg-[#11AC76]">
        <span className="flex flex-col gap-2.5">
          {/**message */}
          {props.type === "text" ? (
            <h5 className="font-normal font-sans text-[16px] text-[#FFFFFF] ">
              {props.text}
            </h5>
          ) : (
            <img className="w-full h-fit rounded-2xl" src={props.imgUrl}></img>
          )}
          {/**time */}
          <h5 className="font-normal text-[12px] font-sans text-[#FFFFFF]">
            {props.timePassed}
          </h5>
        </span>
      </div>
    </div>
  );
}
export default MessageFrom;
