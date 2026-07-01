import { useSearchParams } from "react-router-dom";
import { StudentsAppData } from "../ContextApi/StudentsApi";
import LogoImg from "/images/logo.png";
import noProfileImg from "/images/noProfileImage.jpeg";
function Top() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  const profileImage = userInfo.imageUrl;
  const [searchParems] = useSearchParams();
  const page = searchParems.get("page");
  const renderSearchIcon = page == "overview" ? true : false;
  return (
    <div className="">
      <div className="flex w-full h-25 pt-2.5 pb-2.5 items-center  border-b border-gray-500">
        <div className="flex gap-2  items-center mr-auto">
          <span className="w-8 h-12.5">
            <img className="w-full h-full" src={LogoImg}></img>
          </span>
          <span>
            <h5 className="font-semibold font-inter min18pxMax20px">D’RAHIM</h5>
            <h5 className="font-semibold font-inter text-[9.04px] -mt-0.5">
              TECH INNOVATION
            </h5>
          </span>
        </div>
        {/**search bar */}
        <div className="flex gap-8 items-center">
          {renderSearchIcon && (
            <span className=" w-92.75 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px]">
              <i className="fa fa-search text-2xl"></i>
              <input
                className="w-full h-full pl-2"
                placeholder="Search..."
              ></input>
            </span>
          )}
          <span className="h-full flex">
            <span className="ml-5 mr-5 flex justify-center items-center w-12.5 h-12.5 border border-gray-500 rounded-full">
              <i className="fa fa-bell text-2xl text-gray-500"></i>
            </span>
            <span className="block mr-5  w-12.5 h-12.5   rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={profileImage ? profileImage : noProfileImg}
              ></img>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Top;
