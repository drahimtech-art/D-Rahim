import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
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
  reRenderComments: boolean;
  setReRenderComments: React.Dispatch<React.SetStateAction<boolean>>;
  replayToCommentControl: (plachorder: string, id: string) => void;
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
  subComments: CommentData[] | [];
  _id: string;
};
function CommentsComponets(props: CommentsData) {
  const [comments, setComments] = useState<FormatedPostComments[]>([]);
  //order post with authors infor
  useEffect(() => {
    if (!props.reRenderComments) return;
    props.setReRenderComments(false);
    const allComments = props.body;
    const allAuthors = props.authorsInfor;
    const orderedComments = [];
    for (let i = 0; i < allComments.length; i++) {
      // for top comments
      const comment = allComments[i];
      for (let j = 0; j < allAuthors.length; j++) {
        const author = allAuthors[j];
        if (comment.connectionId === author.connectionId) {
          // for top comments
          const authorWithOutConnectionId = {
            firstName: author.firstName,
            lastName: author.lastName,
            imageUrl: author.imageUrl,
          };
          const commentData = {
            connectionId: comment.connectionId,
            comment: comment.comment,
            likes: comment.likes,
            disLikes: comment.disLikes,
            date: comment.date,
            time: comment.time,
            createdAt: comment.createdAt,
            _id: comment._id,
          };
          const orderedSubComments = [];
          for (let s = 0; s < comment.subComments.length; s++) {
            // for sub comments
            const subCommentData = comment.subComments[s];
            for (let a = 0; a < allAuthors.length; a++) {
              if (subCommentData.connectionId === allAuthors[a].connectionId) {
                const subAuthor = {
                  firstName: allAuthors[a].firstName,
                  lastName: allAuthors[a].lastName,
                  imageUrl: allAuthors[a].imageUrl,
                };
                const subData = {
                  ...subAuthor,
                  ...subCommentData,
                };
                orderedSubComments.push(subData);
                break;
              }
            }
          }
          const formatedComment = {
            ...authorWithOutConnectionId,
            ...commentData,
            subComments: orderedSubComments,
          };
          orderedComments.push(formatedComment);
          break;
        }
      }
    }
    //console.log(orderedComments);
    setComments(orderedComments);
  }, [props.body, props.authorsInfor, props.reRenderComments]);
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
              _id={e._id}
              replayToCommentControl={props.replayToCommentControl}
              key={`comments-key-${e.connectionId}-${id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CommentsComponets;
