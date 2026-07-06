import { useEffect, useState } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import PostTypeText from "./Components/PostTypeText";
import PostTypePhoto from "./Components/PostTypePhoto";
type FeedsData = {
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
function Feed() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  const [feedsPost, setFeedsPost] = useState<FeedsData[] | undefined>();
  //get posts
  useEffect(() => {
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
  }, []);
  return (
    <div className="flex flex-col gap-3.5 w-full h-fit">
      {/**post card */}
      {feedsPost &&
        feedsPost.map((e, _) => {
          if (e.content.type === "image")
            return (
              <PostTypePhoto
                author={e.connectionId}
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
                author={e.connectionId}
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
