import { lazy, Suspense, useState } from "react";
import thumpsDownIcon from "/images/icons/thumbs-down.png";
import thumpsUpIcon from "/images/icons/thumbs-up.png";
import commentsIcon from "/images/icons/comment-1.png";
import moreIcon from "/images/icons/moreIcon.png";
import noProfileImg from "/images/noProfileImage.jpeg";
const SubComments = lazy(() => import("./SubComments"));
type FormatedPostComments = {
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  connectionId: string;
  comment: string;
  likes: number;
  disLikes: number;
  date: string;
  time: string;
  subComments: object[] | [];
};
function CommentCard(props: FormatedPostComments) {
  const [subComments, setSubComments] = useState<boolean>(false);
  //comments posted date & time
  function getPostUpLoadTime(time: string, date: string) {
    const newDate = new Date();
    const newHour = Number(newDate.getHours());
    const newMinites = Number(newDate.getMinutes());
    const newMonth = Number(newDate.getMonth() + 1);
    const newDay = Number(newDate.getDate());
    const newYear = newDate.getFullYear().toString();
    //
    const oldMonth = Number(date.split("/")[1]);
    const oldDay = Number(date.split("/")[2]);
    const oldYear = date.split("/")[0];
    let oldHour = Number(time.split(":")[0]);
    let oldMinites = Number(time.split(":")[1]);
    let timePassed;
    //minites passed
    if (
      oldHour === newHour &&
      oldMonth === newMonth &&
      oldDay === newDay &&
      oldYear === newYear
    ) {
      timePassed = newMinites - oldMinites;
      return timePassed > 1
        ? `${timePassed}  minutes`
        : `${timePassed}  minute`;
    }
    //hours passed
    if (
      oldHour !== newHour &&
      oldMonth === newMonth &&
      oldDay === newDay &&
      oldYear === newYear
    ) {
      timePassed = newHour - oldHour;
      return timePassed > 1 ? `${timePassed}  hours` : `${timePassed}  hour`;
    }
    //days passed
    if (oldMonth === newMonth && oldYear === newYear && oldDay !== newDay) {
      timePassed = newDay - oldDay;
      return timePassed > 1 ? `${timePassed}  days` : `${timePassed}  day`;
    }
    //months passed
    if (oldMonth !== newMonth && oldYear === newYear) {
      timePassed = newMonth - oldMonth;
      return timePassed > 1 ? `${timePassed}  months` : `${timePassed}  month`;
    }
    //years
    if (oldYear !== newYear) {
      timePassed = newMonth - oldMonth;
      return timePassed > 1 ? `${timePassed}  years` : `${timePassed}  year`;
    }
  }
  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      {/**head profile image name and time stamp */}
      <span className="w-fit flex items-center gap-2">
        {/**profile image */}
        <span className="w-6.5 h-6.5">
          <img
            className="min-w-6.5 min-h-6.5 max-w-6.5 max-h-6.5 rounded-full"
            src={props.imageUrl ? props.imageUrl : noProfileImg}
          ></img>
        </span>
        {/**name */}
        <span className="flex gap-1">
          <h5 className="font-sans font-medium text-[16px]">
            {props.firstName}
          </h5>
          <h5 className="font-sans font-medium text-[16px]">
            {props.lastName}
          </h5>
        </span>
        {/**time stap */}
        <span className="flex gap-2">
          <h5 className="font-sans text-[12px] font-light">
            {getPostUpLoadTime(props.time, props.date)}
          </h5>
          <h5 className="font-sans text-[12px] font-light"> ago</h5>
        </span>
      </span>
      {/*comments text and actions button*/}
      <div className="flex flex-col gap-2 ml-7 ">
        <span className="w-full max-w-[82%]">
          <h5 className="font-sans text-[16px] font-normal">{props.comment}</h5>
        </span>
        <span className="w-fit flex gap-2.75 items-center">
          {/**action buttons */}
          {/**like button */}
          <span className="flex items-center pointer">
            <img className="w-fit h-fit" src={thumpsUpIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              {props.likes}
            </h5>
          </span>
          {/**dislike button */}
          <span className="flex items-center pointer">
            <img className="w-fit h-fit" src={thumpsDownIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              {props.disLikes}
            </h5>
          </span>
          {/**reply button */}
          <span
            className="flex items-center gap-0.5 pointer"
            onClick={() => setSubComments(true)}
          >
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
        <Suspense
          fallback={
            <div className="w-full h-full bg-green-500 font-bold text-2xl">
              Loading....
            </div>
          }
        >
          {subComments &&
            props.subComments.map((e, i) => {
              return <SubComments />;
            })}
        </Suspense>
      </div>
    </div>
  );
}
export default CommentCard;
