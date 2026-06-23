import contactImg1 from "/images/contact.png";
import threeDotsMenu from "/images/ThreeDots.png";

function Head({
  firstName,
  lastName,
  status,
}: {
  firstName?: string;
  lastName?: string;
  status: string;
}) {
  return (
    <div className="w-full p-2.5 flex gap-2.5 items-center bg-[#DBFFDF] rounded-2xl">
      {/**profile img */}
      <span className="max-w-12.5 max-h-12.5 w-full h-full">
        <img className="w-full h-full" src={contactImg1}></img>
      </span>
      {/**name & active status */}
      <div className="flex flex-col gap-1.25 max-w-58 w-full">
        <h5 className="font-sans font-bold text-black text-[16px] text-start">
          {firstName} {lastName}
        </h5>
        <h5 className="font-sans font-normal text-black text-[16px] text-start">
          {status}
        </h5>
      </div>
      {/**menu bar */}
      <div className="ml-auto">
        <img className="w-6 h-6 pointer" src={threeDotsMenu}></img>
      </div>
    </div>
  );
}
export default Head;
