import { lazy, Suspense, useState, useEffect } from "react";
import thumpsDownIcon from "/images/icons/thumbs-down.png";
import thumpsUpIcon from "/images/icons/thumbs-up.png";
import commentsIcon from "/images/icons/comment-1.png";
//import moreIcon from "/images/icons/moreIcon.png";
import noProfileImg from "/images/noProfileImage.jpeg";
import { TotalTimePassed } from "../../../../../../../../../shared/TotalTimePassed";
const SubComments = lazy(() => import("./SubComments"));
/*
type PostCommets = {
  _id: string;
  postId: string;
  parentId: string;
  depth: number;
  authorId: string;
  comment: string;
  likesCount: number;
  dislikeCount: number;
  replyCount: number;
  commentedAt: string;
};*/
type FormatedPostComments = {
  body: {
    _id: string;
    firstName: string;
    lastName: string;
    imageUrl: string | null;
    postId: string;
    parentId: string;
    depth: number;
    authorId: string;
    comment: string;
    likesCount: number;
    dislikeCount: number;
    replyCount: number;
    commentedAt: string;
  };
  replayToCommentControl: (plachorder: string, id: string) => void;
};
type SubComments = {
  _id: string;
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  postId: string;
  parentId: string;
  depth: number;
  authorId: string;
  comment: string;
  likesCount: number;
  dislikeCount: number;
  replyCount: number;
  commentedAt: string;
};
function CommentCard(props: FormatedPostComments) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const [viewSubComments, setViewSubComments] = useState<boolean>(false);
  const [isRequstSent, setIsRequstSent] = useState<boolean>(false);
  const [supComments, setSubComments] = useState<SubComments[]>([]);
  //get subReplays
  async function getSubComments() {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      setIsRequstSent(true);
      const key = JSON.parse(data);
      const postId = props.body.postId;
      const commentsParentId = props.body._id;
      const requst = await fetch(
        `${serverPort}/feeds/intaraction/post/sub/comments/${postId}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ commentsParentId: commentsParentId }),
        },
      );
      const responds = await requst.json();
      if (responds.ok) {
        const data: SubComments[] = responds.subComments;
        setSubComments(data);
        setIsRequstSent(false);
        console.log(responds.message);
      }
    } catch (error) {
      console.log(error);
      setIsRequstSent(false);
    }
  }
  //call get subReplays
  useEffect(() => {
    if (isRequstSent || supComments.length !== 0 || !viewSubComments) return;
    getSubComments();
  }, [viewSubComments]);
  function handleReplayComment() {
    props.replayToCommentControl(
      `reply to ${props.body.firstName} ${props.body.lastName}`,
      props.body._id,
    );
  }
  function handlViewCommentReply() {
    setViewSubComments(!viewSubComments);
  }
  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      {/**head profile image name and time stamp */}
      <span className="w-fit flex items-center gap-2">
        {/**profile image */}
        <span className="w-6.5 h-6.5">
          <img
            className="min-w-6.5 min-h-6.5 max-w-6.5 max-h-6.5 rounded-full"
            src={props.body.imageUrl ? props.body.imageUrl : noProfileImg}
          ></img>
        </span>
        {/**name */}
        <span className="flex gap-1">
          <h5 className="font-sans font-medium text-[16px]">
            {props.body.firstName}
          </h5>
          <h5 className="font-sans font-medium text-[16px]">
            {props.body.lastName}
          </h5>
        </span>
        {/**time stap */}
        <span className="flex gap-2">
          <h5 className="font-sans text-[12px] font-light">
            {TotalTimePassed(props.body.commentedAt)}
          </h5>
          <h5 className="font-sans text-[12px] font-light"> ago</h5>
        </span>
      </span>
      {/*comments text and actions button*/}
      <div className="flex flex-col gap-2 ml-7 ">
        <span className="w-full max-w-[82%]">
          <h5 className="font-sans text-[16px] font-normal">
            {props.body.comment}
          </h5>
        </span>
        <span className="w-fit flex gap-2.75 items-center">
          {/**action buttons */}
          {/**like button */}
          <span className="flex items-center pointer">
            <img className="w-fit h-fit" src={thumpsUpIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              {props.body.likesCount}
            </h5>
          </span>
          {/**dislike button */}
          <span className="flex items-center pointer">
            <img className="w-fit h-fit" src={thumpsDownIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              {props.body.dislikeCount}
            </h5>
          </span>
          {/**reply button */}
          <span
            className="flex items-center gap-0.5 pointer"
            onClick={handleReplayComment}
          >
            <img className="w-fit h-fit" src={commentsIcon}></img>
            <h5 className="font-sans text-[12px] font-normal text-gray-400">
              Reply
            </h5>
          </span>
          {/**more button */}
          <span className="flex items-center ">
            <h5
              className="font-sans text-[10px] font-normal text-gray-400 pointer"
              onClick={handlViewCommentReply}
            >
              -View Reply- {props.body.replyCount}
            </h5>
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
          {supComments.length !== 0 &&
            viewSubComments &&
            supComments.map((e) => {
              const id = crypto.randomUUID();
              return (
                <SubComments
                  body={e}
                  replayToCommentControl={handleReplayComment}
                  key={`comments-key-${e.authorId}-${id}`}
                />
              );
            })}
        </Suspense>
      </div>
    </div>
  );
}
export default CommentCard;
