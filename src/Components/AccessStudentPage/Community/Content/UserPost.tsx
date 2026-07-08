import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import { useState, useRef, type ChangeEvent } from "react";
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
  if (!userDetails) return;
  const {
    userInfo,
    setPopUpCard,
    setPopUpControl,
    postText,
    setPostText,
    postPhotoMedia,
    setPostPhotoMedia,
    postVideoMedia,
    setPostVideoMedia,
  } = userDetails;
  const profileImage = userInfo.imageUrl;
  const [hashTages, setHashTags] = useState<string[]>([]);
  const photoRef = useRef<HTMLInputElement | null>(null);
  //const videoRef = useRef<HTMLInputElement | null>(null);

  //upload photo post
  function handleImagePost(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    if (!file) return;
    if (file[0].type.split("/")[0] !== "image")
      return alert("Only upload image in photo section");
    setPostPhotoMedia(file[0]);
  }
  //handle upload photo click
  function handlePhotoButtonClick() {
    if (!photoRef.current) return;
    photoRef.current.click();
  }
  //write a post
  function handlePostTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setPostText(value);
    //get hastages
    const hashTagesInPost = value.split("#");
    if (hashTagesInPost.length > 1) {
      const Tages = [];
      for (let i = 1; i < hashTagesInPost.length; i++) {
        const tages = `#${hashTagesInPost[i].split(" ")[0]}`;
        Tages.push(tages);
      }
      setHashTags(Tages);
    } else {
      setHashTags([]);
    }
  }
  //upload post
  async function uploadPost() {
    console.log("upload data");
    try {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatedDate = `${year}/${month > 10 ? month : `0${month}`}/${day > 10 ? day : `0${day}`}`;
      const time = `${date.getHours()}:${date.getMinutes()}`;
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
        caption: postText,
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
      }
      console.log(postTextData);
    } catch (error) {
      console.log(error);
    }
  }
  //postPopUp control
  function handlePostPopUp() {
    setPopUpControl(true);
    setPopUpCard(
      <PostPopUp
        handleImagePost={handleImagePost}
        handlePhotoButtonClick={handlePhotoButtonClick}
        photoRef={photoRef}
        handlePostTextChange={handlePostTextChange}
        uploadPost={uploadPost}
      />,
    );
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
