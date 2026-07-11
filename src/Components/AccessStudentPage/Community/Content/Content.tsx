import { useState, lazy, Suspense } from "react";
import Head from "./Head";
import UserPost from "./UserPost";
import Feed from "./Feed/Feed";
const Group = lazy(() => import("./Groups/Group"));
const Connections = lazy(() => import("./Connections/Connections"));
function Content() {
  const [feedState, setFeedState] = useState<boolean>(true);
  const [groupState, setGroupState] = useState<boolean>(false);
  const [connectionsState, setConnectionsSate] = useState<boolean>(false);
  function toFeedsPage() {
    setConnectionsSate(false);
    setGroupState(false);
    setFeedState(true);
  }
  function toGroupsPage() {
    setConnectionsSate(false);
    setFeedState(false);
    setGroupState(true);
  }
  function toConnectionsPage() {
    setFeedState(false);
    setGroupState(false);
    setConnectionsSate(true);
  }
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      {/**head  */}
      <Head
        feedsSate={feedState}
        groupState={groupState}
        connectionsState={connectionsState}
        toFeedsPage={toFeedsPage}
        toGroupsPage={toGroupsPage}
        toConnectionsPage={toConnectionsPage}
      />
      <div className="mt-7.5 flex flex-col gap-3.75">
        {/**content */}
        <Suspense
          fallback={
            <div className="w-full h-full bg-green-500 font-bold text-2xl">
              Loading....
            </div>
          }
        >
          {feedState && (
            <>
              <UserPost /> <Feed />
            </>
          )}
          {groupState && <Group />}
          {connectionsState && <Connections />}
        </Suspense>
      </div>
    </div>
  );
}
export default Content;
