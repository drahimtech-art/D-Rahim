import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";
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
  const [getFeedsControl, setGetFeedsControl] = useState<boolean>(true);
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
