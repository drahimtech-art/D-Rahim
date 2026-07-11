import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";
type FeedsPostData = {
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
    comments: string[];
  };
  postId: string;
  hashTages: string[];
  date: string;
  time: string;
  createdAt: Date;
};
type FeedData = {
  postText: string;
  setPostText: React.Dispatch<SetStateAction<string>>;
  postPhotoMedia: Blob | undefined;
  setPostPhotoMedia: React.Dispatch<SetStateAction<Blob | undefined>>;
  postVideoMedia: Blob | undefined;
  setPostVideoMedia: React.Dispatch<SetStateAction<Blob | undefined>>;
  uploadPost: boolean;
  setUploadPost: React.Dispatch<SetStateAction<boolean>>;
  feedsPost: FeedsPostData[] | undefined;
  setFeedsPost: React.Dispatch<SetStateAction<FeedsPostData[] | undefined>>;
};

const FeedContext = createContext<FeedData>({
  postText: "",
  setPostText: () => {},
  postPhotoMedia: undefined,
  setPostPhotoMedia: () => {},
  postVideoMedia: undefined,
  setPostVideoMedia: () => {},
  uploadPost: false,
  setUploadPost: () => {},
  feedsPost: undefined,
  setFeedsPost: () => {},
});
export const FeedContextProvider = ({ children }: { children: ReactNode }) => {
  const [feedsPost, setFeedsPost] = useState<FeedsPostData[] | undefined>();
  const [postText, setPostText] = useState<string>("");
  const [postPhotoMedia, setPostPhotoMedia] = useState<Blob | undefined>();
  const [postVideoMedia, setPostVideoMedia] = useState<Blob | undefined>();
  const [uploadPost, setUploadPost] = useState<boolean>(false);

  return (
    <FeedContext.Provider
      value={{
        feedsPost,
        setFeedsPost,
        postText,
        setPostText,
        postPhotoMedia,
        setPostPhotoMedia,
        postVideoMedia,
        setPostVideoMedia,
        uploadPost,
        setUploadPost,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export const FeedContextApi = () => useContext(FeedContext);
