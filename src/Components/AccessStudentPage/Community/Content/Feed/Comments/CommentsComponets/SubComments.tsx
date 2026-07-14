import { lazy, Suspense, useState } from "react";
import thumpsDownIcon from "/images/icons/thumbs-down.png";
import thumpsUpIcon from "/images/icons/thumbs-up.png";
import commentsIcon from "/images/icons/comment-1.png";
import moreIcon from "/images/icons/moreIcon.png";
import noProfileImg from "/images/noProfileImage.jpeg";
const CommentCard = lazy(() => import("./CommentCard"));
function SubComments() {
  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      {/**head profile image name and time stamp */}
      <span className="w-fit flex items-center gap-2">
        {/**profile image */}
        <span className="w-6.5 h-6.5 bg-gray-400 rounded-full"></span>
        {/**name */}
        <span className="flex gap-1">
          <h5 className="font-sans font-medium text-[16px]">Kolade </h5>
          <h5 className="font-sans font-medium text-[16px]">Owolabi</h5>
        </span>
        {/**time stap */}
        <span className="flex gap-2">
          <h5 className="font-sans text-[12px] font-light">49</h5>
          <h5 className="font-sans text-[12px] font-light">minutes</h5>
          <h5 className="font-sans text-[12px] font-light"> ago</h5>
        </span>
      </span>
      {/*comments text and actions button*/}
      <div className="flex flex-col gap-2 ml-7 ">
        <span className="w-full max-w-[82%]">
          <h5 className="font-sans text-[16px] font-normal">
            This redesign is a huge improvement from the previous NYSC platform.
            I really like how organized and easy to navigate everything feels
            now.
          </h5>
        </span>
        <span className="w-fit flex gap-2.75 items-center">
          {/**action buttons */}
          {/**like button */}
          <span className="flex items-center">
            <img className="w-fit h-fit" src={thumpsUpIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              14
            </h5>
          </span>
          {/**dislike button */}
          <span className="flex items-center">
            <img className="w-fit h-fit" src={thumpsDownIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              2
            </h5>
          </span>
          {/**reply button */}
          <span className="flex items-center gap-0.5">
            <img className="w-fit h-fit" src={commentsIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              Reply
            </h5>
          </span>
          {/**more button */}
          <span className="flex items-center ">
            <img className="w-fit h-fit" src={moreIcon}></img>
          </span>
        </span>
        {/**sub comments */}
      </div>
    </div>
  );
}
export default SubComments;
