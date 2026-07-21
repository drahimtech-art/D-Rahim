import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { StudentsAppData } from "../../../../../../../../../../storage/StudentsApi";
import canculeIcon from "/images/icons/proicons_cancel.png";
import attachment from "/images/icons/attachment.png";
import album from "/images/icons/album.png";
import emoji from "/images/icons/smile.png";
import sortIcon from "/images/icons/sort_icon.png";
import downArrowIcon from "/images/icons/arrow-down.png";
import CommentsComponets from "./CommentsComponets/CommentsComponets";
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
type CommentsData = {
  body: PostCommets[] | [];
  postId: string;
  commentsCount: Number;
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
  const [postComments, setPostComments] = useState<PostCommets[] | []>(
    props.body,
  );
  const [comment, setComment] = useState<string>("");
  const [placeholder, setPlacholder] = useState<string>("Add comment");
  const [isCommentsSent, setIsCommentsSent] = useState<boolean>(false);
  const [isReply, setIsReply] = useState<boolean>(false);
  const [commentReplyId, setCommentReplyId] = useState<string | undefined>(
    undefined,
  );
  const [commentsAuthors, setCommentsAuthors] = useState<CommentsAuthors[]>([]);
  const [reRenderComments, setReRenderComments] = useState<boolean>(true);
  const commentsCount = useRef(props.commentsCount);
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
        const id = comment.authorId;
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
  //handle add comment type eg reply or global comment
  function handleReplayComment(placehoder: string, replyId: string) {
    setPlacholder(placehoder);
    setIsReply(true);
    setCommentReplyId(replyId);
  }
  //upload comment
  async function handlePostComments() {
    if (comment.length < 1 || isCommentsSent) return;
    setIsCommentsSent(true);

    const newComment = {
      connectionId: userInfo.connectionId,
      comment: comment,
      commentedAt: new Date().toISOString(),
    };
    const replyComment = {
      ...newComment,
      commentToReplyId: commentReplyId,
    };
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const postId = props.postId;
      const requst = await fetch(
        `${serverPort}/feeds/intaraction/${isReply ? `reply/comments/${postId}` : `comments/post/${postId}`}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(isReply ? replyComment : newComment),
        },
      );
      const responds = await requst.json();
      if (!responds.ok) return console.log(responds.message);
      alert(responds.message);
      if (isReply) {
        setIsReply(false);
        if (!commentReplyId) return;
        const author = {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          bio: userInfo.bio,
          connectionId: userInfo.connectionId,
          imageUrl: userInfo.imageUrl,
        };
        const updatedAuthorsInfo =
          commentsAuthors.length > 0 ? [author, ...commentsAuthors] : [author];
        const updatedPostedComments = [];
        const postedComments = props.body;
        const commentToReplyId = commentReplyId;
        for (let i = 0; i < postedComments.length; i++) {
          const comment = postedComments[i];
          console.log(comment._id.trim() === commentToReplyId.trim());
          if (comment._id.trim() === commentToReplyId.trim()) {
            const commentData = {
              _id: comment._id,
              postId: comment.postId,
              parentId: comment.parentId,
              depth: comment.depth,
              authorId: comment.authorId,
              comment: comment.comment,
              likesCount: comment.likesCount,
              dislikeCount: comment.dislikeCount,
              replyCount: comment.replyCount,
              commentedAt: comment.commentedAt,
            };
            const updatedComment = { ...commentData };
            updatedPostedComments.push(updatedComment);
          } else {
            updatedPostedComments.push(comment);
          }
        }
        setCommentReplyId(undefined);
        setComment("");
        setIsCommentsSent(false);
        setPostComments(updatedPostedComments);
        setCommentsAuthors(updatedAuthorsInfo);
        setReRenderComments(true);
        commentsCount.current = Number(commentsCount.current) + 1;
      } else {
        const author = {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          bio: userInfo.bio,
          connectionId: userInfo.connectionId,
          imageUrl: userInfo.imageUrl,
        };
        const upLoadedComment = { ...responds.comment };
        const updatedAuthorsInfo =
          commentsAuthors.length > 0 ? [author, ...commentsAuthors] : [author];
        const upDatedComments =
          props.body.length > 0
            ? [upLoadedComment, ...props.body]
            : [upLoadedComment];
        setComment("");
        setIsCommentsSent(false);
        setPostComments(upDatedComments);
        setCommentsAuthors(updatedAuthorsInfo);
        setReRenderComments(true);
        commentsCount.current = Number(commentsCount.current) + 1;
      }
    } catch (error) {
      console.log(error);
      setIsCommentsSent(false);
      if (isReply) {
        setIsReply(false);
        setCommentReplyId(undefined);
      }
    }
  }
  function canculeAddComments() {
    setPopUpCard(undefined);
    setPopUpControl(false);
    if (isReply) {
      setIsReply(false);
      setCommentReplyId(undefined);
    }
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
              placeholder={placeholder}
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
                {`${commentsCount.current}`}
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
          <CommentsComponets
            body={postComments}
            authorsInfor={commentsAuthors}
            reRenderComments={reRenderComments}
            setReRenderComments={setReRenderComments}
            replayToCommentControl={handleReplayComment}
          />
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
