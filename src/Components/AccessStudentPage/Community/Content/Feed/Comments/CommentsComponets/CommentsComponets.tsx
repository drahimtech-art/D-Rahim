import { useState, useEffect } from "react";
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
    if (props.body.length === comments.length) return;
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
          break;
        }
      }
    }
    setComments(orderedComments);
  }, [props.body, props.authorsInfor]);
  return (
    <div className="w-full  max-h-full overflow-y-auto pb-20">
      {/***contents */}
      <div className="p-2.5 h-full w-full flex flex-col gap-4 ">
        {/*comments card*/}
        {comments.map((e) => {
          const id = crypto.randomUUID();
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
              key={`comments-key-${e.connectionId}-${id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CommentsComponets;
