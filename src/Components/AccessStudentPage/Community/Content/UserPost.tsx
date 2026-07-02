import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import noProfileImg from "/images/noProfileImage.jpeg";
import videoIcon from "/images/video_icon.png";
import photoIcon from "/images/photo_icon.png";
import writeIcon from "/images/write_icon.png";
function UserPost() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  const profileImage = userInfo.imageUrl;
  return (
    <div className="w-full flex gap-5  h-fit pl-5 pt-5 pb-5 pr-2.5 border-[1.5px] border-[#11AC76] rounded-2xl">
      {/**profile image */}
      <span className="w-full flex  max-w-12.5 h-12.5  ">
        <img
          className="max-w-12.5 h-12.5    rounded-full"
          src={profileImage ? profileImage : noProfileImg}
        ></img>
      </span>
      {/**search bar and upload actions button */}
      <div className="w-full h-full flex flex-col gap-2">
        {/**seacrh bar */}
        <span className="w-full h-10">
          <input
            className="w-full h-full pl-5 border-[1.5px] border-[#11AC76] rounded-full"
            placeholder="Start a post"
          ></input>
        </span>
        {/**upload action button */}
        <div className="grid grid-cols-3">
          <span className="flex gap-2 items-center">
            <img className="w-fit h-fit" src={videoIcon}></img>
            <h5>Video</h5>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-fit h-fit" src={photoIcon}></img>
            <h5>Photo</h5>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-fit h-fit" src={writeIcon}></img>
            <h5>Write</h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default UserPost;
