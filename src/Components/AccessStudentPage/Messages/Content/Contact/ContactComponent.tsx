import contactImg1 from "/images/contact.png";
function ContactComponent() {
  return (
    <div className="w-full h-fit p-2.5 pr-5.5 flex items-center gap-2.5 bg-[#11AC76] rounded-2xl pointer">
      {/**profile image */}
      <span className="min-w-12.5 max-w-12.5 h-12.5">
        <img className="w-full h-full" src={contactImg1}></img>
      </span>
      {/**name, message & time */}
      <div className="w-full flex flex-col gap-1.25">
        {/**name & time */}
        <span className="flex items-center">
          {/**name */}
          <h5 className="font-sans font-bold text-[16px] text-[#FFFFFF] line-clamp-1">
            Mentor Support
          </h5>
          {/**time */}
          <h5 className="ml-auto font-normal font-sans text-[13px] text-[#FFFFFF]">
            2m
          </h5>
        </span>
        {/**message */}
        <span>
          <h5 className="font-sans font-normal text-[16px] text-[#FFFFFF] line-clamp-1">
            Hi Abdulbasit, how can I...
          </h5>
        </span>
      </div>
    </div>
  );
}
export default ContactComponent;
