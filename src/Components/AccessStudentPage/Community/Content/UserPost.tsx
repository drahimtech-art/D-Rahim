import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import noProfileImg from "/images/noProfileImage.jpeg";
import videoIcon from "/images/icons/video_icon.png";
import photoIcon from "/images/icons/photo_icon.png";
import writeIcon from "/images/icons/write_icon.png";
import PostPopUp from "./PostPopUp";
function UserPost() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  const profileImage = userInfo.imageUrl;
  //postPopUp control
  function handlePostPopUp() {
    setPopUpControl(true);
    setPopUpCard(<PostPopUp />);
  }
  return (
    <>
      <td className="w-full flex gap-5 mt-7.5  h-fit pl-4 pt-5 pb-5 pr-4 border-[1.5px] border-[#11AC76] rounded-2xl">
        {/**profile image */}
        <span className="w-full flex  max-w-12.5 h-12.5  ">
          <img
            className="max-w-15 h-15    rounded-full"
            src={profileImage ? profileImage : noProfileImg}
          ></img>
        </span>
        {/**post text and upload actions button */}
        <div className="w-full h-full flex flex-col gap-2">
          {/**post text*/}
          <span className="w-full h-10">
            <input
              className="w-full h-full pl-5 border-[1.5px] border-[#11AC76] rounded-full"
              placeholder="Start a post"
              defaultValue={""}
              readOnly={true}
              onClick={handlePostPopUp}
            ></input>
          </span>
          {/**upload action button */}
          <div className="grid grid-cols-3">
            <span className="flex gap-2 items-center">
              <img
                className="w-fit h-fit pointer"
                src={videoIcon}
                onClick={handlePostPopUp}
              ></img>
              <h5 className="pointer" onClick={handlePostPopUp}>
                Video
              </h5>
            </span>
            <span className="flex gap-2 relative items-center">
              <img
                className="w-fit h-fit pointer"
                src={photoIcon}
                onClick={handlePostPopUp}
              ></img>
              <h5 className="pointer" onClick={handlePostPopUp}>
                Photo
              </h5>
            </span>
            <span className="flex gap-2 items-center">
              <img
                className="w-fit h-fit pointer"
                src={writeIcon}
                onClick={handlePostPopUp}
              ></img>
              <h5 className="pointer" onClick={handlePostPopUp}>
                Write
              </h5>
            </span>
          </div>
        </div>
      </td>
    </>
  );
}
export default UserPost;
