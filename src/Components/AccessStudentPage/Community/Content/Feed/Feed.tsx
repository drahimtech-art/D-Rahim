import { useEffect, useState } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { FeedContextApi } from "../../../../ContextApi/FeedsContext";
import PostTypeText from "./Components/PostTypeText";
import PostTypePhoto from "./Components/PostTypePhoto";
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
  connectionId: string;
  comment: string;
  likes: number;
  disLikes: number;
  date: string;
  time: string;
  createdAt: string;
  subComments: PostCommets[] | [];
};
type FeedsData = {
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
    comments: CommentsData[] | [];
  };
  postId: string;
  hashTages: string[];
  date: string;
  time: string;
  createdAt: Date;
};
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  invite: boolean;
  isConnected: boolean;
  bio: string;
  date?: string;
  time?: string;
};
function Feed() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  const feedsMediaData = FeedContextApi();
  if (!userDetails || !feedsMediaData) return;
  const { userInfo, conections, setConections } = userDetails;
  const { feedsPost, setFeedsPost } = feedsMediaData;
  const [feedsPostStore, setFeedsPostStore] = useState<
    FeedsData[] | undefined
  >();
  //get userConnections list
  useEffect(() => {
    if (conections.length !== 0) return;
    async function getConnectionsList() {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(`${serverPort}/connection/user/contacts`, {
          method: "GET",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
          },
        });
        const responds = await requst.json();
        if (responds.ok) {
          const data: Connections[] = responds.connections;
          setConections(data);
        } else {
          console.log(responds.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getConnectionsList();
  }, [conections]);
  //listen on feeds post media change to add it to sate to be rendered
  useEffect(() => {
    if (feedsPost && feedsPost.length !== 0) {
      setFeedsPostStore(feedsPost);
    }
  }, [feedsPost]);
  //get posts
  useEffect(() => {
    if (feedsPost) if (feedsPost.length !== 0) return; // get post once and only once on this section
    async function getFeed() {
      const connectionId = userInfo.connectionId;
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(
          `${serverPort}/feeds/get/content/${connectionId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "X-Frontend-Key": `${key}`,
            },
          },
        );
        const responds = await requst.json();
        if (responds.ok) {
          setFeedsPost(responds.feeds);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getFeed();
  }, [feedsPost]);
  return (
    <div className="flex flex-col gap-3.5 w-full h-fit">
      {/**post card */}
      {feedsPostStore &&
        feedsPostStore.map((e, _) => {
          if (e.content.type === "image")
            return (
              <PostTypePhoto
                firstName={e.firstName}
                lastName={e.lastName}
                profileImg={e.imageUrl}
                bio={e.bio}
                connectionId={e.connectionId}
                engament={e.engament}
                engamentStates={e.engamentStates}
                caption={e.content.caption}
                content={e.content.content}
                postId={e.postId}
                date={e.date}
                time={e.time}
                hashTages={e.hashTages}
                createdAt={e.createdAt}
                key={e.postId}
              />
            );
          if (e.content.type === "text")
            return (
              <PostTypeText
                firstName={e.firstName}
                lastName={e.lastName}
                profileImg={e.imageUrl}
                bio={e.bio}
                connectionId={e.connectionId}
                engament={e.engament}
                engamentStates={e.engamentStates}
                caption={e.content.caption}
                content={e.content.content}
                postId={e.postId}
                date={e.date}
                time={e.time}
                hashTages={e.hashTages}
                createdAt={e.createdAt}
                key={e.postId}
              />
            );
        })}
    </div>
  );
}
export default Feed;
