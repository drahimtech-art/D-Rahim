import { useState, useEffect } from "react";
import sortIcon from "/images/icons/sort_icon.png";
import downArrowIcon from "/images/icons/arrow-down.png";
import CommentCard from "./CommentCard";
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
type CommentsAuthors = {
  firstName: string;
  lastName: string;
  bio: string;
  connectionId: string;
  imageUrl: string | null;
};
type CommentsData = {
  body: PostCommets[] | [];
  authorsInfor: CommentsAuthors[];
};
type FormatedPostComments = {
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  connectionId: string;
  comment: string;
  likes: number;
  disLikes: number;
  date: string;
  time: string;
  createdAt: string;
  subComments: object[] | [];
};
function CommentsComponets(props: CommentsData) {
  const [comments, setComments] = useState<FormatedPostComments[]>([]);
  //order post with authors infor
  useEffect(() => {
    const allComments = props.body;
    const allAuthors = props.authorsInfor;
    const orderedComments = [];
    for (let i = 0; i < allComments.length; i++) {
      const comment = allComments[i];
      for (let j = 0; j < allAuthors.length; j++) {
        const author = allAuthors[j];
        if (comment.connectionId === author.connectionId) {
          const authorWithOutConnectionId = {
            firstName: author.firstName,
            lastName: author.lastName,
            imageUrl: author.imageUrl,
          };
          const formatedComment = {
            ...authorWithOutConnectionId,
            ...comment,
          };
          orderedComments.push(formatedComment);
        }
      }
    }
    setComments(orderedComments);
  }, []);
  return (
    <div className="w-full  max-h-full overflow-y-auto">
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
      {/***contents */}
      <div className="p-2.5 h-full w-full flex flex-col gap-4 ">
        {/*comments card*/}
        {comments.map((e, i) => {
          return (
            <CommentCard
              connectionId={e.connectionId}
              comment={e.comment}
              likes={e.likes}
              disLikes={e.disLikes}
              subComments={e.subComments}
              date={e.date}
              time={e.time}
              firstName={e.firstName}
              lastName={e.lastName}
              imageUrl={e.imageUrl}
              key={`comments-key-${e.connectionId}-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CommentsComponets;
