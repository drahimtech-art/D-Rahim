import { useState, useEffect, useRef } from "react";
import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import { MessagesApi } from "../../../../../ContextApi/MessagesApi";
import { TotalTimePassed } from "../../../../TotalTimePassed";
import likeIcon from "/images/icons/like_icon.png";
import commentIcon from "/images/icons/comment_icon.png";
import shareIcon from "/images/icons/share_icon.png";
import noProfileImg from "/images/noProfileImage.jpeg";
import CommentsPopUp from "../Comments/CommentsPopUp";
type PostCommets = {
  postId: string;
  parentId: string;
  depth: number;
  authorId: string;
  comment: string;
  likesCount: number;
  dislikeCount: number;
  replyCount: number;
  commentedAt: Date;
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
  caption: string;
  content: string;

  isPostLiked: boolean;
  comments: PostCommets[] | [];

  postId: string;
  hashTages: string[];
  postedAt: Date;
  createdAt: Date;
};
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  sendsentAt?: string;
};
function PostTypePhoto(props: FeedsPostData) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  const messagesContextData = MessagesApi();
  if (!userDetails) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  const { conections } = messagesContextData;
  const [likes, setLikes] = useState<number>(props.engament.likes);
  const [isPostLiked, setIsPostLiked] = useState<boolean>(props.isPostLiked);
  const [commentsCount, _] = useState<number>(props.engament.comments);
  const [viewMoreCaption, setViewMoreCaption] = useState<boolean>(false);
  const [postDate, setPostDate] = useState<string>("");
  const postLikeRef = useRef<HTMLHeadingElement | null>(null);
  const [sendConectionRequst, setSendConectionRequst] =
    useState<boolean>(false);
  const contectionSate = useRef<string>("Connect");
  //check post author connections state
  useEffect(() => {
    if (conections.length === 0) return;
    for (const contact of conections) {
      const authorId = props.connectionId;
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
  }, [conections]);
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
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const postId = props.postId;
      const requst = await fetch(
        `${serverPort}/feeds/intaraction/like/post/${postId}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ connectionId: userInfo.connectionId }),
        },
      );
      const responds = await requst.json();
      console.log(responds);
    } catch (error) {
      console.log(error);
    }
  }
  function handleViewMoreCaption() {
    setViewMoreCaption((prevState) => !prevState);
  }
  //get update feed of post upload time every minite
  useEffect(() => {
    if (!props) return;
    const postedAt = props.postedAt;
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
      const author = props.connectionId;
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
        postId={props.postId}
        body={props.engamentStates.comments}
        commentsCount={props.engament.comments}
      />,
    );
    setPopUpControl(true);
  }
  return (
    <div className="w-full flex flex-col border-[1.5px] border-[#11AC76] rounded-2xl pl-4 pr-4 p-2.5">
      {/**image heading and connect action button */}
      <div className="w-full flex ">
        <div className="flex gap-4.25 mr-auto items-center max-w-75">
          {/**image */}
          <span className="min-w-12.5 max-w-12.5 min-h-12.5 max-h-12.5">
            {
              <img
                className="rounded-full min-w-12.5 max-w-12.5 min-h-12.5 max-h-12.5"
                src={props.imageUrl ? props.imageUrl : noProfileImg}
              ></img>
            }
          </span>
          {/**heading */}
          <span className="fle flex-col gap-1.25">
            {/**full name */}
            <h5 className="font-sans font-medium text-[20px] line-clamp-1">
              {`${props.firstName} ${props.lastName}`}
            </h5>
            {/**bio */}
            <h5 className="font-sans font-medium text-[16px] line-clamp-1 text-gray-500">
              {props.bio}
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
              {props.caption}
            </h5>
            <span className="flex gap-2 font-sans font-medium text-[16px] items-center text-[#505AE2]">
              {props.hashTages.map((e, i) => {
                return <h5 key={`hashTag-key-${i}`}>{e}</h5>;
              })}
            </span>
          </div>
        ) : (
          <span className="w-full flex items-center ">
            <h5 className="line-clamp-1 font-sans font-medium text-[16px] max-w-[70%] mr-auto">
              {props.caption}
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
            className="w-full h-fit rounded-[20px]"
            src={props.content}
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
}
export default PostTypePhoto;
