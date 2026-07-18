import { useEffect, useState } from "react";
import { StudentsAppData } from "../../../../ContextApi/StudentsApi";
import { FeedContextApi } from "../../../../ContextApi/FeedsContext";
import { MessagesApi } from "../../../../ContextApi/MessagesApi";
import Head from "./Head";
import PostTypeText from "./Components/PostTypeText";
import UserPost from "../UserPost";
import PostTypePhoto from "./Components/PostTypePhoto";
import { TableVirtuoso } from "react-virtuoso";
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
  isPostLiked: boolean;
  topPostComments: PostCommets[] | [];
  postId: string;
  hashTages: string[];
  postedAt: Date;
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
  sentAt?: Date;
};
type CommunityPagesControl = {
  feedsState: boolean;
  groupState: boolean;
  connectionsState: boolean;
  toFeedsPage: () => void;
  toGroupsPage: () => void;
  toConnectionsPage: () => void;
};
function Feed(prop: CommunityPagesControl) {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  const feedsMediaData = FeedContextApi();
  const messagesContextData = MessagesApi();
  if (!userDetails || !feedsMediaData || !messagesContextData) return;
  const { userInfo } = userDetails;
  const { conections, setConections } = messagesContextData;
  const { feedsPost, setFeedsPost, getFeedsControl, setGetFeedsControl } =
    feedsMediaData;
  const [feedsPostStore, setFeedsPostStore] = useState<FeedsPostData[] | any[]>(
    [
      {
        postId:
          "04162727-0a8e-4dbc-a55c-395e5349ca3a$2aadd1df-8154-403b-8ec6-26bec47e7c87",
      },
    ],
  );
  //get userConnections list
  useEffect(() => {
    if (!conections) return;
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
      setFeedsPostStore([
        {
          postId:
            "04162727-0a8e-4dbc-a55c-395e5349ca3a$2aadd1df-8154-403b-8ec6-26bec47e7c87",
        },
        ...feedsPost,
      ]);
    }
    console.log(feedsPost);
  }, [feedsPost]);
  //get feeds function
  async function getFeed() {
    console.log(`called feedpost ${feedsPost}`);
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
        setGetFeedsControl(false);
        const feeds =
          feedsPost && feedsPost?.length !== 0
            ? [...feedsPost, ...responds.feeds]
            : [...responds.feeds];
        setFeedsPost(feeds);
      }
      setGetFeedsControl(false);
    } catch (error) {
      setGetFeedsControl(false);
      console.log(error);
    }
  }

  //handle fecth more feeds
  function handleFeacthMoreFeeds() {
    console.log("fecthing data");
    if (getFeedsControl) return;
    getFeed();
    setGetFeedsControl(true);
  }
  //update list
  function updateItemAtIndexInList(
    index: number,
    data: FeedsPostData,
    value: boolean,
  ) {
    if (!feedsPost) return;
    console.log(value);
    const list = [...feedsPost];
    const postData = { ...data };
    console.log(postData.isPostLiked);
    if (postData.isPostLiked === value) return;
    postData.engament.likes = value
      ? postData.engament.likes + 1
      : postData.engament.likes - 1;
    postData.isPostLiked = value;
    const updatedPostData = { ...postData };
    const updatedList = [
      ...list.slice(0, index - 1),
      updatedPostData,
      ...list.slice(index),
    ];
    setFeedsPost([...updatedList]);
  }
  return (
    <div className="w-full h-full ">
      {/**post card */}
      {feedsPostStore && (
        <TableVirtuoso
          className="w-full! h-full!  relative! virtuoso"
          data={feedsPostStore}
          endReached={handleFeacthMoreFeeds}
          fixedFooterContent={
            getFeedsControl
              ? () => (
                  <tr>
                    <td className="w-full h-full bg-green-500 font-bold text-2xl">
                      Loading....
                    </td>
                  </tr>
                )
              : undefined
          }
          computeItemKey={(_, post) =>
            `key-${post.postId}-&-id-${crypto.randomUUID()}`
          }
          itemContent={(index, post) => {
            if (index === 0)
              return (
                <>
                  <Head
                    feedsSate={prop.feedsState}
                    groupState={prop.groupState}
                    connectionsState={prop.connectionsState}
                    toFeedsPage={prop.toFeedsPage}
                    toGroupsPage={prop.toGroupsPage}
                    toConnectionsPage={prop.toConnectionsPage}
                  />
                  <UserPost />
                </>
              );
            if (index !== 0 && post.content.type === "image")
              return (
                <td className="w-full  block h-fit mt-3.5">
                  <PostTypePhoto
                    body={post}
                    arrayIndex={index}
                    updateItemAtIndexInList={updateItemAtIndexInList}
                  />
                </td>
              );
            if (index !== 0 && post.content.type === "text")
              return (
                <td className="w-full block h-fit mt-3.5">
                  <PostTypeText
                    body={post}
                    arrayIndex={index}
                    updateItemAtIndexInList={updateItemAtIndexInList}
                  />
                </td>
              );
          }}
        ></TableVirtuoso>
      )}
    </div>
  );
}
export default Feed;
