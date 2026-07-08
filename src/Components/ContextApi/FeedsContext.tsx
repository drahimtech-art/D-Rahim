import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";

type FeedData = {
  postText: string;
  setPostText: React.Dispatch<SetStateAction<string>>;
  postPhotoMedia: Blob | undefined;
  setPostPhotoMedia: React.Dispatch<SetStateAction<Blob | undefined>>;
  postVideoMedia: Blob | undefined;
  setPostVideoMedia: React.Dispatch<SetStateAction<Blob | undefined>>;
  uploadPost: boolean;
  setUploadPost: React.Dispatch<SetStateAction<boolean>>;
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
});
export const FeedContextProvider = ({ children }: { children: ReactNode }) => {
  const [postText, setPostText] = useState<string>("");
  const [postPhotoMedia, setPostPhotoMedia] = useState<Blob | undefined>();
  const [postVideoMedia, setPostVideoMedia] = useState<Blob | undefined>();
  const [uploadPost, setUploadPost] = useState<boolean>(false);

  return (
    <FeedContext.Provider
      value={{
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
