import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import noProfileImg from "/images/noProfileImage.jpeg";
import canculeIcon from "/images/icons/proicons_cancel.png";
import videoIcon from "/images/icons/video_icon.png";
import photoIcon from "/images/icons/photo_icon.png";
import writeIcon from "/images/icons/write_icon.png";
type CommentData = {
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  connectionId: string;
  comment: string;
  likes: number;
  disLikes: number;
  date: string;
  time: string;
};
type PostCommets = {
  connectionId: string;
  comment: string;
  likes: number;
  disLikes: number;
  date: string;
  time: string;
  createdAt: string;
  subComments: CommentData[] | [];
  _id: string;
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
  engamentStates: {
    likesId: string[];
    comments: PostCommets[] | [];
  };
  postId: string;
  hashTages: string[];
  date: string;
  time: string;
  createdAt: Date;
};
type UpdatePost = {
  updatePost: (post: FeedsPostData) => void;
};
function PostPopUp(props: UpdatePost) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo, setPopUpControl } = userDetails;
  const [photoDisplay, setPhotoDisplay] = useState<string | undefined>();
  const [postPhotoMedia, setPostPhotoMedia] = useState<Blob | undefined>();
  const [postVideoMedia, setPostVideoMedia] = useState<Blob | undefined>();
  const [postText, setPostText] = useState<string>("");
  const photoRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (!postPhotoMedia) return;
    (() => {
      const photo = URL.createObjectURL(postPhotoMedia);
      setPhotoDisplay(photo);
    })();
  }, [postPhotoMedia]);
  //
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
  async function uploadPostFunc() {
    if (textToPost.trim() === "") return;
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
        const postMedia: FeedsPostData = {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          imageUrl: userInfo.imageUrl,
          bio: userInfo.bio,
          ...responds.post,
        };
        props.updatePost(postMedia);
      } else {
        alert(responds.message);
      }
    } catch (error) {
      alert(error);
      console.log(error);
      setPopUpControl(false);
    }
  }
  //

  //
  function handlePostMediaClear() {
    if (photoDisplay) {
      setPostPhotoMedia(undefined);
      setPhotoDisplay(undefined);
    }
  }
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
  }
  return (
    <div className="w-[60%] max-w-219.75 h-[80%] relative max-h-145.5 p-10 border border-[#56D566] bg-white rounded-2xl">
      <div className="w-full h-full flex flex-col overflow-hidden  relative">
        {/**profil picture name and cancule button */}
        <div className="flex">
          {/** profil picture and name*/}
          <span className="w-fit mr-auto flex gap-4.25 items-center">
            {/**profile image */}
            <img
              className="w-17.5 h-17.5 rounded-[30px]"
              src={userInfo.imageUrl ? userInfo.imageUrl : noProfileImg}
            ></img>
            {/**name */}
            <span className="flex flex-col gap-1">
              <span className="flex gap-2">
                <h5 className="font-sans font-medium min18pxMax20px">
                  {userInfo.firstName}
                </h5>
                <h5 className="font-sans font-medium min18pxMax20px">
                  {userInfo.lastName}
                </h5>
              </span>
              <h5 className="font-sans text-[16px] font-normal">
                Post to Anyone
              </h5>
            </span>
          </span>
          {/**cancule button */}
          <span className="w-fit pointer">
            <img
              className="w-fit h-fit"
              src={canculeIcon}
              onClick={() => {
                handlePostMediaClear;
                setPopUpControl(false);
              }}
            ></img>
          </span>
        </div>
        {/**text input */}
        <div className="w-full h-full  relative mt-7.5">
          <textarea
            className="w-full resize-none  h-full postPopUpPlacholder placeholder:text-gray-500 placeholder:font-sans placeholder:font-medium"
            placeholder="What do you want  to talk about?"
            value={postText}
            onChange={handlePostTextChange}
          ></textarea>
        </div>
        {/**photo and image display */}
        {photoDisplay && (
          <div className="w-full h-[250%]  mb-5">
            <div className="w-[50%] relative h-full ">
              <span className="p-2 absolute w-full flex justify-end">
                <i
                  className="fa fa-xmark text-2xl pointer text-gray-200"
                  onClick={handlePostMediaClear}
                ></i>
              </span>
              <img
                className="w-full h-full rounded-2xl"
                src={photoDisplay}
              ></img>
            </div>
          </div>
        )}
        {/**upload action button */}
        <div className="grid grid-cols-4 w-full h-fit mt-5 pl-5 pr-5">
          <span className="flex justify-start gap-2 items-center">
            <img className="w-fit h-fit pointer" src={videoIcon}></img>
            <h5 className="pointer font-sans font-normal min18pxMax20px">
              Video
            </h5>
          </span>
          <span className="flex gap-2 justify-center relative items-center">
            <img
              className="w-fit h-fit pointer"
              src={photoIcon}
              onClick={handlePhotoButtonClick}
            ></img>
            <h5
              className="pointer font-sans font-normal min18pxMax20px"
              onClick={handlePhotoButtonClick}
            >
              Photo
            </h5>
            <input
              className="w-0 h-0 absolute"
              type="file"
              onChange={handleImagePost}
              ref={photoRef}
            ></input>
          </span>
          <span className="flex gap-2 justify-end items-center">
            <img className="w-fit h-fit pointer" src={writeIcon}></img>
            <h5 className="pointer font-sans font-normal min18pxMax20px">
              Write
            </h5>
          </span>
          {/**post action buttons*/}
          <span className="w-full flex justify-end">
            <button
              className="w-25 h-fit pl-2.5 pr-2.5 pt-1.5 pb-1.5 flex justify-center items-center pointer rounded-2xl bg-[#11AC76]"
              onClick={uploadPostFunc}
            >
              <h5 className="text-white font-sans text-[14px] font-medium">
                Post
              </h5>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default PostPopUp;
