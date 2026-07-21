import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
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
type CommentsAuthors = {
  firstName: string;
  lastName: string;
  bio: string;
  connectionId: string;
  imageUrl: string | null;
};
type FormatedPostComments = {
  _id: string;
  firstName: string;
  lastName: string;
  imageUrl: string | null;
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
  authorsInfor: CommentsAuthors[];
  reRenderComments: boolean;
  setReRenderComments: React.Dispatch<React.SetStateAction<boolean>>;
  replayToCommentControl: (plachorder: string, id: string) => void;
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
        if (comment.authorId === author.connectionId) {
          // for top comments
          const authorWithOutConnectionId = {
            firstName: author.firstName,
            lastName: author.lastName,
            imageUrl: author.imageUrl,
          };
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
          const formatedComment = {
            ...authorWithOutConnectionId,
            ...commentData,
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
              body={e}
              replayToCommentControl={props.replayToCommentControl}
              key={`comments-key-${e.authorId}-${id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CommentsComponets;
