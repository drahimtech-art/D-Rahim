import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import { FeedContextApi } from "../../../ContextApi/FeedsContext";
import noProfileImg from "/images/noProfileImage.jpeg";
import canculeIcon from "/images/icons/proicons_cancel.png";
import videoIcon from "/images/icons/video_icon.png";
import photoIcon from "/images/icons/photo_icon.png";
import writeIcon from "/images/icons/write_icon.png";
function PostPopUp() {
  const userDetails = StudentsAppData();
  const feedsContext = FeedContextApi();
  if (!userDetails) return;
  const { userInfo, setPopUpControl } = userDetails;
  const {
    postText,
    setPostText,
    postPhotoMedia,
    setPostPhotoMedia,
    postVideoMedia,
    setPostVideoMedia,
    setUploadPost,
  } = feedsContext;
  const [photoDisplay, setPhotoDisplay] = useState<string | undefined>();
  const photoRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (!postPhotoMedia) return;
    (() => {
      const photo = URL.createObjectURL(postPhotoMedia);
      setPhotoDisplay(photo);
    })();
  }, [postPhotoMedia]);
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
              onClick={() => setUploadPost(true)}
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
