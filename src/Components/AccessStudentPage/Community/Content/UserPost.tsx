import { StudentsAppData } from "../../../ContextApi/StudentsApi";
import { FeedContextApi } from "../../../ContextApi/FeedsContext";
import noProfileImg from "/images/noProfileImage.jpeg";
import videoIcon from "/images/icons/video_icon.png";
import photoIcon from "/images/icons/photo_icon.png";
import writeIcon from "/images/icons/write_icon.png";
import PostPopUp from "./PostPopUp";
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

function UserPost() {
  const userDetails = StudentsAppData();
  const feedsContext = FeedContextApi();
  if (!userDetails) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  const { setFeedsPost } = feedsContext;
  const profileImage = userInfo.imageUrl;
  function updatePost(post: FeedsPostData) {
    setFeedsPost((prevsPosts) => {
      if (!prevsPosts) return [post];
      if (prevsPosts) return [post, ...prevsPosts];
    });
  }
  //postPopUp control
  function handlePostPopUp() {
    setPopUpControl(true);
    setPopUpCard(<PostPopUp updatePost={updatePost} />);
  }
  return (
    <>
      <td className="w-full flex gap-5 mt-7.5  h-fit pl-4 pt-5 pb-5 pr-4 border-[1.5px] border-[#11AC76] rounded-2xl">
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
              defaultValue={""}
              readOnly={true}
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
      </td>
    </>
  );
}
export default UserPost;
