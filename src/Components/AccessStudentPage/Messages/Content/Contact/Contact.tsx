import contactImg1 from "/images/contact.png";
import contactImg2 from "/images/contact_1.png";
import contactImg3 from "/images/contact_2.png";
import contactImg4 from "/images/contact_3.png";
import ContactComponent from "./ContactComponent";
import GroupContactComponet from "./GroupContactComponet";
function Contact() {
  return (
    <div className="w-full h-full  bg-white  pl-2 pr-2 flex flex-col pb-20 gap-7.5 overflow-y-scroll">
      {/**contact components */}
      <ContactComponent />
      {/**Group contact componets */}
      <GroupContactComponet />
      {/**contact components */}
      <div className="w-full h-fit p-2.5 pr-5.5  flex items-center gap-2.5  rounded-2xl pointer ">
        {/**profile image */}
        <span className="min-w-12.5 max-w-12.5 h-12.5">
          <img className="w-full h-full" src={contactImg2}></img>
        </span>
        {/**name, message & time */}
        <div className="w-full flex flex-col gap-1.25">
          {/**name & time */}
          <span className="flex items-center">
            {/**name */}
            <h5 className="font-sans font-bold text-[16px] text-black line-clamp-1">
              Mentor Support
            </h5>
            {/**time */}
            <h5 className="ml-auto font-normal font-sans text-[13px] text-black">
              2m
            </h5>
          </span>
          {/**message */}
          <span>
            <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
              Hi Abdulbasit, how can I...
            </h5>
          </span>
        </div>
      </div>
      {/**contact components */}
      <div className="w-full h-fit p-2.5 pr-5.5  flex items-center gap-2.5  rounded-2xl pointer">
        {/**profile image */}
        <span className="min-w-12.5 max-w-12.5 h-12.5">
          <img className="w-full h-full" src={contactImg1}></img>
        </span>
        {/**name, message & time */}
        <div className="w-full flex flex-col gap-1.25">
          {/**name & time */}
          <span className="flex items-center">
            {/**name */}
            <h5 className="font-sans font-bold text-[16px] text-black line-clamp-1">
              Product Design Group
            </h5>
            {/**time */}
            <h5 className="ml-auto font-normal font-sans text-[13px] text-black">
              2m
            </h5>
          </span>
          {/**message */}
          <span>
            <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
              Tolu: Thanks for the upd....
            </h5>
          </span>
        </div>
      </div>
      {/**contact components */}
      <div className="w-full h-fit p-2.5 pr-5.5  flex items-center gap-2.5  rounded-2xl pointer">
        {/**profile image */}
        <span className="min-w-12.5 max-w-12.5 h-12.5">
          <img className="w-full h-full" src={contactImg3}></img>
        </span>
        {/**name, message & time */}
        <div className="w-full flex flex-col gap-1.25">
          {/**name & time */}
          <span className="flex items-center">
            {/**name */}
            <h5 className="font-sans font-bold text-[16px] text-black line-clamp-1">
              Mentor Support
            </h5>
            {/**time */}
            <h5 className="ml-auto font-normal font-sans text-[13px] text-black">
              2m
            </h5>
          </span>
          {/**message */}
          <span>
            <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
              Hi Abdulbasit, how can I...
            </h5>
          </span>
        </div>
      </div>
      {/**contact components */}
      <div className="w-full h-fit p-2.5 pr-5.5  flex items-center gap-2.5  rounded-2xl pointer">
        {/**profile image */}
        <span className="min-w-12.5 max-w-12.5 h-12.5">
          <img className="w-full h-full" src={contactImg4}></img>
        </span>
        {/**name, message & time */}
        <div className="w-full flex flex-col gap-1.25">
          {/**name & time */}
          <span className="flex items-center">
            {/**name */}
            <h5 className="font-sans font-bold text-[16px] text-black line-clamp-1">
              Mentor Support
            </h5>
            {/**time */}
            <h5 className="ml-auto font-normal font-sans text-[13px] text-black">
              1h
            </h5>
          </span>
          {/**message */}
          <span>
            <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
              Hi Abdulbasit, how can I...
            </h5>
          </span>
        </div>
      </div>
      {/**contact components */}
      <div className="w-full h-fit p-2.5 pr-5.5  flex items-center gap-2.5  rounded-2xl pointer">
        {/**profile image */}
        <span className="min-w-12.5 max-w-12.5 h-12.5">
          <img className="w-full h-full" src={contactImg2}></img>
        </span>
        {/**name, message & time */}
        <div className="w-full flex flex-col gap-1.25">
          {/**name & time */}
          <span className="flex items-center">
            {/**name */}
            <h5 className="font-sans font-bold text-[16px] text-black line-clamp-1">
              Mentor Support
            </h5>
            {/**time */}
            <h5 className="ml-auto font-normal font-sans text-[13px] text-black">
              2h
            </h5>
          </span>
          {/**message */}
          <span>
            <h5 className="font-sans font-normal text-[16px] text-black line-clamp-1">
              Hi Abdulbasit, how can I...
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Contact;
