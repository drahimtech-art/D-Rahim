import contactImg4 from "/images/contact_3.png";
function GroupContactComponet() {
  return (
    <div className="w-full h-fit p-2.5  flex items-center gap-2.5 rounded-2xl pointer">
      {/**profile image */}
      <span className="min-w-12.5 max-w-12.5 h-12.5">
        <img className="w-full h-full" src={contactImg4}></img>
      </span>
      {/**name, from, message & time */}
      <div className="w-full flex flex-col gap-1.25">
        {/**name & time */}
        <span className="flex items-center">
          {/**name */}
          <h5 className="font-sans font-bold text-[16px] text-black line-clamp-1">
            Ui/Ux Bootcamp Group
          </h5>
          {/**time */}
          <h5 className="ml-auto font-normal font-sans text-[13px] text-black">
            20m
          </h5>
        </span>
        {/**form & message */}
        <span className="flex items-center gap-2">
          <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
            John:
          </h5>
          <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
            Please check the...
          </h5>
        </span>
      </div>
    </div>
  );
}
export default GroupContactComponet;
