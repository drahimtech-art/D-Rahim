function MessageFrom() {
  return (
    <div className="w-full flex justify-start">
      <div className="p-2.5 pl-4 pr-4 max-w-80.5 h-fit rounded-2xl rounded-bl-none bg-[#11AC76]">
        <span className="flex flex-col gap-2.5">
          {/**message */}
          <h5 className="font-normal font-sans text-[16px] text-[#FFFFFF] ">
            Hi Abdulbasit, how can I assist you today?
          </h5>
          {/**time */}
          <h5 className="font-normal text-[12px] font-sans text-[#FFFFFF]">
            10:30 AM
          </h5>
        </span>
      </div>
    </div>
  );
}
export default MessageFrom;
