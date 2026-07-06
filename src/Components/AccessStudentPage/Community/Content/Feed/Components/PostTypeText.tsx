import { useState, useEffect } from "react";
import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import likeIcon from "/images/like_icon.png";
import commentIcon from "/images/comment_icon.png";
import shareIcon from "/images/share_icon.png";
import noProfileImg from "/images/noProfileImage.jpeg";
type PostData = {
  author: string;
  engament: {
    likes: number;
    comments: number;
    shares: number;
  };
  caption: string;
  content: string;
  engamentStates: {
    likesId: string[];
    comments: string[];
  };
  postId: string;
  hashTages: string[];
  date: string;
  time: string;
  createdAt: Date;
};
type AuthorInfo = {
  firstName: string;
  lastName: string;
  profileImg: string | null;
  bio: string;
};
function PostTypeText(props: PostData) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  const [authorInfo, setAuthorInfo] = useState<AuthorInfo | undefined>();
  const [likes, setLikes] = useState<number>(props.engament.likes);
  const [isPostLiked, setIsPostLiked] = useState<boolean>(false);
  const [commentsCount, setCommentsCount] = useState<number>(
    props.engament.comments,
  );
  const [viewMoreCaption, setViewMoreCaption] = useState<boolean>(false);
  useEffect(() => {
    async function getAuthorInfo() {
      const authorId = props.author;
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(
          `${serverPort}/feeds/get/author/info/${authorId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "X-Frontend-Key": `${key}`,
            },
          },
        );
        const responds = await requst.json();
        if (responds.ok) {
          setAuthorInfo(responds.author);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAuthorInfo();
  }, []);
  function addLike() {
    if (isPostLiked) return;
    setIsPostLiked(true);
    setLikes((prevCount) => (prevCount += 1));
  }
  function handleViewMoreCaption() {
    setViewMoreCaption((prevState) => !prevState);
  }
  return (
    <div className="w-full flex flex-col border-[1.5px] border-[#11AC76] rounded-2xl pl-4 pr-4 p-2.5">
      {/**image heading and connect action button */}
      <div className="w-full flex">
        <div className="flex gap-4.25 mr-auto items-center max-w-75">
          {/**image */}
          <span className="min-w-12.5 max-w-12.5 min-h-12.5 max-h-12.5 ">
            {authorInfo ? (
              <img
                className="rounded-full w-full h-full"
                src={
                  authorInfo.profileImg ? authorInfo.profileImg : noProfileImg
                }
              ></img>
            ) : (
              <img
                className="rounded-full w-full h-full"
                src={noProfileImg}
              ></img>
            )}
          </span>
          {/**heading */}
          <span className="fle flex-col gap-1.25">
            {/**full name */}
            <h5 className="font-sans font-medium text-[20px] line-clamp-1">
              {authorInfo
                ? `${authorInfo.firstName} ${authorInfo.lastName}`
                : "....."}
            </h5>
            {/**bio */}
            <h5 className="font-sans font-medium text-[16px] line-clamp-1 text-gray-500">
              {authorInfo ? authorInfo.bio : "...."}
            </h5>
            {/**post time */}
            <h5 className="font-sans font-normal text-[16px] line-clamp-1 text-gray-500">
              1hour ago
            </h5>
          </span>
        </div>
        {/**connnections and menu */}
        <div className="w-fit flex h-fit ">
          <span className="w-26.25 h-6">
            <h5 className="font-sans text-[14px] pointer font-medium text-[#11AC76]">
              {props.author === userInfo.connectionId ? "view post" : "Connect"}
            </h5>
          </span>
        </div>
      </div>
      {/**caption and hastages */}
      <div className="mt-3 flex flex-col gap-5 w-full">
        {/**caption */}
        {viewMoreCaption ? (
          <div className="w-full  pointer" onClick={handleViewMoreCaption}>
            <h5 className=" font-sans font-medium text-[16px] max-w-[70%]">
              {props.caption}
            </h5>
          </div>
        ) : (
          <span className="w-full flex items-center ">
            <h5 className="line-clamp-1 font-sans font-medium text-[16px] max-w-[70%] mr-auto">
              {props.caption}
            </h5>
            <h5
              className="font-sans font-medium text-[16px] pointer"
              onClick={handleViewMoreCaption}
            >
              see more
            </h5>
          </span>
        )}
        {/**hashtag */}
        <span className="flex gap-2 font-sans font-medium text-[16px] items-center text-[#505AE2]">
          {props.hashTages.map((e, i) => {
            return <h5 key={`hashTag-key-${i}`}>{e}</h5>;
          })}
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
          >
            {likes} Likes
          </h5>
        </span>
        {/**comment */}
        <span className="flex gap-2 items-center justify-center">
          <img className="w-10.75 h-8 pointer" src={commentIcon}></img>
          <h5 className="font-sans font-normal text-[16px] pointer line-clamp-1">
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
export default PostTypeText;
