import { lazy, Suspense } from "react";
import Head from "./Head";
import UserPost from "./UserPost";
import Feed from "./Feed/Feed";
const Group = lazy(() => import("./Groups/Group"));
const Connections = lazy(() => import("./Connections/Connections"));
type CommunityPagesControl = {
  feedsState: boolean;
  groupState: boolean;
  connectionsState: boolean;
  toFeedsPage: () => void;
  toGroupsPage: () => void;
  toConnectionsPage: () => void;
};
function Content(props: CommunityPagesControl) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      {/**head  */}
      <Head
        feedsSate={props.feedsState}
        groupState={props.groupState}
        connectionsState={props.connectionsState}
        toFeedsPage={props.toFeedsPage}
        toGroupsPage={props.toGroupsPage}
        toConnectionsPage={props.toConnectionsPage}
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
          {props.feedsState && (
            <>
              <UserPost /> <Feed />
            </>
          )}
          {props.groupState && <Group />}
          {props.connectionsState && <Connections />}
        </Suspense>
      </div>
    </div>
  );
}
export default Content;
