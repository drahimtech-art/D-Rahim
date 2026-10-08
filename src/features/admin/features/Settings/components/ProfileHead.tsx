import companyImg from "/images/icons/companyImg.png";
import editIcon from "/images/icons/edit_icon.png";
function ProfileHead(): React.ReactElement {
  return (
    <article className="pl-[20px] pt-3.25 pb-3.25 pr-[20px] flex items-center gap-4.75 border border-[#eeeded] rounded-[16px]">
      <img className="w-[80px] h-[80px]" src={companyImg}></img>
      <span className="flex flex-col">
        <h5 className="font-inter font-medium text-[18px]">
          D’RAHIM TECH INNOVATION
        </h5>
        <h5 className="font-inter font-normal text-[16px] mt-2">
          Software Company
        </h5>
      </span>
      <span className="pointer ml-auto">
        <img className="w-fit h-fit" src={editIcon}></img>
      </span>
    </article>
  );
}
export default ProfileHead;
