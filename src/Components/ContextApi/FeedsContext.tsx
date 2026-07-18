import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";
type PostCommets = {
  postId: string;
  parentId: string;
  depth: number;
  authorId: string;
  comment: string;
  likesCount: number;
  dislikeCount: number;
  replyCount: number;
  commentedAt: Date;
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
    isPostLiked: boolean;
    comments: PostCommets[] | [];
  };
  postId: string;
  hashTages: string[];
  postedAt: Date;
  createdAt: Date;
};
type FeedData = {
  feedsPost: FeedsPostData[] | undefined;
  setFeedsPost: React.Dispatch<SetStateAction<FeedsPostData[] | undefined>>;
  getFeedsControl: boolean;
  setGetFeedsControl: React.Dispatch<SetStateAction<boolean>>;
};

const FeedContext = createContext<FeedData>({
  feedsPost: undefined,
  setFeedsPost: () => {},
  getFeedsControl: true,
  setGetFeedsControl: () => {},
});
export function FeedContextProvider({ children }: { children: ReactNode }) {
  const [feedsPost, setFeedsPost] = useState<
    FeedsPostData[] | undefined | []
  >();
  const [getFeedsControl, setGetFeedsControl] = useState<boolean>(false);
  return (
    <FeedContext.Provider
      value={{
        feedsPost,
        setFeedsPost,
        getFeedsControl,
        setGetFeedsControl,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}

export const FeedContextApi = () => useContext(FeedContext);
