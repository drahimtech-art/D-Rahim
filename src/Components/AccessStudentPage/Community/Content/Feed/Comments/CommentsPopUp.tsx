import { useState, useEffect, type ChangeEvent } from "react";
import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import canculeIcon from "/images/icons/proicons_cancel.png";
import attachment from "/images/icons/attachment.png";
import album from "/images/icons/album.png";
import emoji from "/images/icons/smile.png";
import sortIcon from "/images/icons/sort_icon.png";
import downArrowIcon from "/images/icons/arrow-down.png";
import CommentsComponets from "./CommentsComponets/CommentsComponets";
type PostCommets = {
  connectionId: string;
  comment: string;
  likes: number;
  disLikes: number;
  date: string;
  time: string;
  createdAt: string;
  subComments: object[] | [];
};
type CommentsData = {
  body: PostCommets[] | [];
  postId: string;
};
type CommentsAuthors = {
  firstName: string;
  lastName: string;
  bio: string;
  connectionId: string;
  imageUrl: string | null;
};
function CommentsPopUp(props: CommentsData) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  const [comment, setComment] = useState<string>("");
  const [isCommentsSent, setIsCommentsSent] = useState<boolean>(false);
  const [commentsAuthors, setCommentsAuthors] = useState<CommentsAuthors[]>([]);
  //get comments authors infor
  useEffect(() => {
    if (props.body.length === 0 || commentsAuthors.length > 0) return;
    //get all top comments infor not nested
    async function getAuthorsInfor(authorsId: string[]) {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const authorsIds = [...authorsId];
        const requst = await fetch(
          `${serverPort}/feeds/intaraction/author/info`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "X-Frontend-Key": `${key}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(authorsIds),
          },
        );
        const responds = await requst.json();
        if (responds.ok) {
          const authors: CommentsAuthors[] = responds.author;
          console.log(authors);
          setCommentsAuthors(authors);
        }
      } catch (error) {
        console.log(error);
      }
    }
    //loop all comments and get comment id
    function handleAuthorsIds(comments: PostCommets[]) {
      if (commentsAuthors.length > 0) return;
      const authorIds: string[] = [];
      const postComments = comments;
      for (const comment of postComments) {
        const id = comment.connectionId;
        if (!authorIds.includes(id)) {
          authorIds.push(id);
        }
      }
      if (authorIds.length !== 0) return getAuthorsInfor(authorIds);
    }
    handleAuthorsIds(props.body);
  }, []);
  // handle type comment
  function handleAddComments(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setComment(value);
  }
  //upload comment
  async function handlePostComments() {
    if (comment.length < 1 || isCommentsSent) return;
    setIsCommentsSent(true);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formatedDate = `${year}/${month >= 10 ? month : `0${month}`}/${day >= 10 ? day : `0${day}`}`;
    const time = `${date.getHours() >= 10 ? `${date.getHours()}` : `0${date.getHours()}`}:${date.getMinutes() > 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`}`;
    const newComment = {
      connectionId: userInfo.connectionId,
      comment: comment,
      date: formatedDate,
      time: time,
    };
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const postId = props.postId;
      const requst = await fetch(
        `${serverPort}/feeds/intaraction/comments/post/${postId}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        },
      );
      const responds = await requst.json();
      alert(responds.message);
      setComment("");
      setIsCommentsSent(false);
    } catch (error) {
      console.log(error);
      setIsCommentsSent(false);
    }
  }
  function canculeAddComments() {
    setPopUpCard(undefined);
    setPopUpControl(false);
  }
  return (
    <div className="w-[60%] max-w-219.75 h-[80%] relative max-h-145.5 pl-7 pr-7 pb-7 pt-4  bg-white rounded-[20px] overflow-hidden">
      <div className="w-full h-fit flex flex-col overflow-hidden  relative">
        <span className="flex w-full justify-end">
          <img
            className="w-fit h-fit pointer"
            src={canculeIcon}
            onClick={canculeAddComments}
          ></img>
        </span>
        {/**text area and upload action buttons */}
        <div className="mt-2.25 w-full h-34.5  rounded-[20px] pl-4 pr-4 pt-2.5  bg-[#DBFFDF] flex flex-col">
          {/*input box*/}
          <div className="w-full h-full">
            <textarea
              className="w-full h-full resize-none placeholder:text-[16px] placeholder:font-sans placeholder:font-normal placeholder:text-gray-300"
              placeholder="Add comment"
              value={comment}
              onChange={handleAddComments}
            ></textarea>
          </div>
          {/**upload action buttons */}
          <div className="w-full h-fit flex items-center mt-auto ">
            <span className="w-fit flex gap-4.5 ">
              <img className="w-fit h-fit" src={album}></img>
              <img className="w-fit h-fit" src={attachment}></img>
              <img className="w-fit h-fit" src={emoji}></img>
            </span>
            {/*post action*/}
            <span className="w-full h-fit pb-1.5">
              <button
                className="ml-auto border-2  border-gray-500 rounded-[20px] w-13.5 h-9 flex justify-center items-center pointer"
                onClick={handlePostComments}
              >
                <i className="fa fa-arrow-up"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      {/*comments body */}
      <div className="w-full  h-full max-h-[55%] overflow-hidden border-t-[1.5px] border-t-gray-400 mt-7">
        {/**head comments count and filter bar */}
        <div className="pt-2.5 pb-2.5 flex items-center">
          {/**comments text */}
          <span className="flex gap-2 items-center">
            <h5 className="font-sans font-normal text-[16px]">Comments</h5>
            {/**comments count */}
            <span className="w-9 h-5.5 bg-[#11AC76] pl-1 pr-1 pt-0.5 pb-0.5 rounded-[14px] text-gray-200 flex justify-center items-center">
              <h5 className="font-sans font-normal text-[16px]">
                {props.body.length}
              </h5>
            </span>
          </span>
          {/**filter bar */}
          <span className="w-fit flex gap-2 items-center ml-auto pointer">
            <img className="w-fit h-fit" src={sortIcon}></img>
            <h5 className="font-sans font-normal text-[16px]">Most recent</h5>
            <img className="w-fit h-fit" src={downArrowIcon}></img>
          </span>
        </div>
        {commentsAuthors.length !== 0 && (
          <CommentsComponets body={props.body} authorsInfor={commentsAuthors} />
        )}
      </div>
      {/**end action button */}
      <div className="flex h-fit  justify-center items-center mt-4">
        <h5 className="font-sans text-[12px] font-normal font-gray-400 pointer">
          -view more comments-
        </h5>
      </div>
    </div>
  );
}
export default CommentsPopUp;
