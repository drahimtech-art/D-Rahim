import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import { FeedContextApi } from "../../../ContextApi/FeedsContext";
import { useState, useEffect } from "react";
import noProfileImg from "/images/noProfileImage.jpeg";
import videoIcon from "/images/video_icon.png";
import photoIcon from "/images/photo_icon.png";
import writeIcon from "/images/write_icon.png";
import PostPopUp from "./PostPopUp";
/*
type FeedsData = {
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
*/
function UserPost() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  const feedsContext = FeedContextApi();
  if (!userDetails || !feedsContext) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  const {
    postText,
    setPostText,
    postPhotoMedia,
    setPostPhotoMedia,
    postVideoMedia,
    setPostVideoMedia,
    uploadPost,
    setUploadPost,
  } = feedsContext;
  const profileImage = userInfo.imageUrl;
  const [hashTages, setHashTags] = useState<string[]>([]);
  const [textToPost, setTextToPost] = useState<string>("");
  //const videoRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    (() => {
      setTextToPost(postText);
      //get hastages
      const hashTagesInPost = postText.split("#");
      if (hashTagesInPost.length > 1) {
        const Tages: string[] = [];
        for (let i = 1; i < hashTagesInPost.length; i++) {
          const tages = `#${hashTagesInPost[i].split(" ")[0]}`;
          Tages.push(tages);
        }
        setHashTags(Tages);
      } else {
        setHashTags([]);
      }
    })();
  }, [postText]);
  //upload post
  useEffect(() => {
    if (!uploadPost) return;
    uploadPostFunc();
  }, [uploadPost]);
  async function uploadPostFunc() {
    if (textToPost.trim() === "") return setUploadPost(false);
    const hashTagesInPost = textToPost.split("#");
    let filtedPostText = textToPost;
    if (hashTagesInPost.length > 1) {
      const textWithOutHashTages = hashTagesInPost[0];
      filtedPostText = textWithOutHashTages;
    }
    if (!filtedPostText) return;
    setPopUpControl(false);
    try {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatedDate = `${year}/${month >= 10 ? month : `0${month}`}/${day >= 10 ? day : `0${day}`}`;
      const time = `${date.getHours() >= 10 ? `${date.getHours()}` : `0${date.getHours()}`}:${date.getMinutes() > 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`}`;
      let contentType;
      if (postPhotoMedia) {
        contentType = "image";
      } else if (postVideoMedia) {
        contentType = "video";
      } else {
        contentType = "text";
      }
      const postTextData = {
        connectionId: userInfo.connectionId,
        hashTages: hashTages,
        caption: filtedPostText,
        type: contentType,
        date: formatedDate,
        time: time,
      };
      const formData = new FormData();
      if (postPhotoMedia) {
        formData.append("media", postPhotoMedia);
      }
      formData.append("postContent", JSON.stringify(postTextData));
      setPostText("");
      setHashTags([]);
      setPostPhotoMedia(undefined);
      setPostVideoMedia(undefined);
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const requst = await fetch(`${serverPort}/feeds/upload/content`, {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
        },
        body: formData,
      });
      const responds = await requst.json();
      if (responds.ok) {
        alert(responds.message);
        console.log(responds.post);
      } else {
        alert(responds.message);
      }
      setUploadPost(false);
    } catch (error) {
      alert(error);
      console.log(error);
      setUploadPost(false);
      setPopUpControl(false);
    }
  }
  //postPopUp control
  function handlePostPopUp() {
    setPopUpControl(true);
    setPopUpCard(<PostPopUp />);
  }
  return (
    <>
      <div className="w-full flex gap-5  h-fit pl-4 pt-5 pb-5 pr-4 border-[1.5px] border-[#11AC76] rounded-2xl">
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
              value={""}
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
      </div>
    </>
  );
}
export default UserPost;
