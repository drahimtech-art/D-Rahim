import { useState, useEffect, useRef, memo } from "react";
import { StudentsAppData } from "../../../../../../../../../storage/StudentsApi";
import { MessagesApi } from "../../../../../../../../../storage/MessagesApi";
import { TotalTimePassed } from "../../../../../../../shared/TotalTimePassed";
import likeIcon from "/images/icons/like_icon.png";
import commentIcon from "/images/icons/comment_icon.png";
import shareIcon from "/images/icons/share_icon.png";
import noProfileImg from "/images/noProfileImage.jpeg";
import CommentsPopUp from "./Comments/CommentsPopUp";
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
};
type FeedsPostData = {
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  bio: string;
  connectionId: string;
  engament: {
    likes: number;
    comments: number;
    shares: number;
  };
  content: {
    type: string;
    caption: string;
    content: string;
  };
  isPostLiked: boolean;

  topPostComments: PostCommets[] | [];
  postId: string;
  hashTages: string[];
  postedAt: string;
  createdAt: Date;
  listId: string;
};
type Body = {
  body: FeedsPostData;
  arrayIndex: number;
  updateItemAtIndexInList: (
    index: number,
    data: FeedsPostData,
    value: boolean,
  ) => void;
};
const PostTypePhoto = memo((props: Body) => {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  const messagesContextData = MessagesApi();
  if (!userDetails) return;

  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  const { conections } = messagesContextData;
  const [likes, setLikes] = useState<number>(props.body.engament.likes);
  const [isPostLiked, setIsPostLiked] = useState<boolean>(
    props.body.isPostLiked,
  );
  const [commentsCount, _] = useState<number>(props.body.engament.comments);
  const [viewMoreCaption, setViewMoreCaption] = useState<boolean>(false);
  const [postDate, setPostDate] = useState<string>("");
  const postLikeRef = useRef<HTMLHeadingElement | null>(null);
  const [sendConectionRequst, setSendConectionRequst] =
    useState<boolean>(false);
  const contectionSate = useRef<string>("Connect");

  //check post author connections state
  useEffect(() => {
    const authorId = props.body.connectionId;
    if (conections.length !== 0) {
      for (const contact of conections) {
        if (contact.contactId === authorId && contact.invite) {
          if (contact.isConnected) {
            contectionSate.current = "Connected";
            setSendConectionRequst(true);
          } else {
            contectionSate.current = "Requst Sent";
            setSendConectionRequst(true);
          }
        } else if (userInfo.connectionId === authorId) {
          contectionSate.current = "View Post";
          setSendConectionRequst(true);
        }
      }
    } else {
      if (userInfo.connectionId === authorId) {
        contectionSate.current = "View Post";
        setSendConectionRequst(true);
      }
    }
  }, []);
  //update post liked buttion ux
  useEffect(() => {
    if (!postLikeRef.current) return;
    if (isPostLiked) {
      postLikeRef.current.classList.remove("font-normal");
      postLikeRef.current.classList.add("font-medium");
    } else {
      postLikeRef.current.classList.remove("font-medium");
      postLikeRef.current.classList.add("font-normal");
    }
  }, [isPostLiked]);
  //
  async function addLike() {
    setIsPostLiked(!isPostLiked);
    if (isPostLiked) {
      setLikes((prevCount) => (prevCount -= 1));
    } else {
      setLikes((prevCount) => (prevCount += 1));
    }
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      const connectionId = userInfo.connectionId;
      if (!connectionId)
        throw new Error(`user connectionId not found ${connectionId}`);
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const postId = props.body.postId;
      const requst = await fetch(
        `${serverPort}/feeds/intaraction/like/post/${postId}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ connectionId: connectionId }),
        },
      );
      const responds = await requst.json();
      if (responds.ok) {
        console.log(responds);
      }
      props.updateItemAtIndexInList(props.arrayIndex, props.body, !isPostLiked);
    } catch (error) {
      console.log(error);
    }
  }
  function handleViewMoreCaption() {
    setViewMoreCaption((prevState) => !prevState);
  }
  //get update feed of post upload time every minite
  useEffect(() => {
    console.log("mounts");
    if (!props.body) return;
    const postedAt = props.body.postedAt;
    const timer = setInterval(() => {
      const timePassed = TotalTimePassed(postedAt);
      if (timePassed) {
        setPostDate(timePassed);
      }
    }, 10000);
    (() => {
      const timePassed = TotalTimePassed(postedAt);
      if (timePassed) {
        setPostDate(timePassed);
      }
    })();
    return () => clearInterval(timer);
  }, []);
  //send post author connection requst
  async function addConnection() {
    if (sendConectionRequst) return;
    contectionSate.current = "Requst Sent";
    setSendConectionRequst(true);
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const author = props.body.connectionId;
      const requst = await fetch(
        `${serverPort}/connection/user/add/${author}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ connectionId: userInfo.connectionId }),
        },
      );
      const responds = await requst.json();
      if (responds.ok) {
        console.log(responds);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //add comments
  function handleAddComments() {
    setPopUpCard(
      <CommentsPopUp
        postId={props.body.postId}
        body={props.body.topPostComments}
        commentsCount={props.body.engament.comments}
      />,
    );
    setPopUpControl(true);
  }
  return (
    <div className="w-full flex flex-col border-[1.5px] border-[#11AC76] rounded-2xl pl-4 pr-4 p-2.5 h">
      {/**image heading and connect action button */}
      <div className="w-full flex ">
        <div className="flex gap-4.25 mr-auto items-center max-w-75">
          {/**image */}
          <span className="min-w-12.5 max-w-12.5 min-h-12.5 max-h-12.5">
            {
              <img
                className="rounded-full min-w-12.5 max-w-12.5 min-h-12.5 max-h-12.5"
                src={props.body.imageUrl ? props.body.imageUrl : noProfileImg}
              ></img>
            }
          </span>
          {/**heading */}
          <span className="fle flex-col gap-1.25">
            {/**full name */}
            <h5 className="font-sans font-medium text-[20px] line-clamp-1">
              {`${props.body.firstName} ${props.body.lastName}`}
            </h5>
            {/**bio */}
            <h5 className="font-sans font-medium text-[16px] line-clamp-1 text-gray-500">
              {props.body.bio}
            </h5>
            {/**post time */}
            <h5 className="font-sans font-normal text-[16px] line-clamp-1 text-gray-500">
              {postDate} ago
            </h5>
          </span>
        </div>
        {/**connnections and menu */}
        <div className="w-fit flex h-fit ">
          <span className="w-26.25 h-6">
            <h5
              className="font-sans text-[14px] pointer font-medium text-[#11AC76]"
              onClick={addConnection}
            >
              {contectionSate.current}
            </h5>
          </span>
        </div>
      </div>
      {/**caption and hastages */}
      <div className="mt-3 flex flex-col gap-10 w-full">
        {/**caption */}
        {viewMoreCaption ? (
          <div
            className="w-full flex flex-col gap-2 -mb-5 pointer"
            onClick={handleViewMoreCaption}
          >
            <h5 className=" font-sans font-medium text-[16px] max-w-[95%]">
              {props.body.content.caption}
            </h5>
            <span className="flex gap-2 font-sans font-medium text-[16px] items-center text-[#505AE2]">
              {props.body.hashTages.map((e, i) => {
                return <h5 key={`hashTag-key-${i}`}>{e}</h5>;
              })}
            </span>
          </div>
        ) : (
          <span className="w-full flex items-center ">
            <h5 className="line-clamp-1 font-sans font-medium text-[16px] max-w-[70%] mr-auto">
              {props.body.content.caption}
            </h5>
            <h5
              className="font-sans font-medium text-[16px]  pointer"
              onClick={handleViewMoreCaption}
            >
              see more
            </h5>
          </span>
        )}
        <span className="w-full h-fit">
          <img
            className="w-full h-fit max-h-125 rounded-[20px]"
            src={props.body.content.content}
          ></img>
        </span>
      </div>
      {/***like comment and share button */}
      <div className="mt-3 pt-2.5 pb-2.5 w-full grid grid-cols-3 border-t-[1.5px] border-[#11AC76]">
        {/**like */}
        <span className="flex gap-2 items-center justify-start">
          <img
            className="w-10.75 h-8 pointer"
            src={likeIcon}
            onClick={addLike}
          ></img>
          <h5
            className="font-sans font-normal text-[16px] pointer"
            onClick={addLike}
            ref={postLikeRef}
          >
            {likes} Likes
          </h5>
        </span>
        {/**comment */}
        <span className="flex gap-2 items-center justify-center">
          <img
            className="w-10.75 h-8 pointer"
            src={commentIcon}
            onClick={handleAddComments}
          ></img>
          <h5
            className="font-sans font-normal text-[16px] pointer line-clamp-1"
            onClick={handleAddComments}
          >
            {commentsCount} Comments
          </h5>
        </span>
        {/**shares */}
        <span className="flex gap-2 items-center justify-end">
          <img className="w-10.75 h-8 pointer" src={shareIcon}></img>
          <h5 className="font-sans font-normal text-[16px] pointer">Share</h5>
        </span>
      </div>
    </div>
  );
});
export default PostTypePhoto;
