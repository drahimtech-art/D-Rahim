import { lazy, Suspense } from "react";
import Head from "./Head";
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
    <div className="flex flex-col min-w-full h-full relative">
      <div className="  h-full flex flex-col gap-3.75 overflow-y-auto">
        {/**content */}
        <Suspense
          fallback={
            <div className="w-full h-full bg-green-500 font-bold text-2xl">
              Loading....
            </div>
          }
        >
          {props.feedsState && (
            <div className="w-full min-h-full ">
              <Feed
                feedsState={props.feedsState}
                groupState={props.groupState}
                connectionsState={props.connectionsState}
                toFeedsPage={props.toFeedsPage}
                toGroupsPage={props.toGroupsPage}
                toConnectionsPage={props.toConnectionsPage}
              />
            </div>
          )}
          {props.groupState && (
            <Group
              feedsState={props.feedsState}
              groupState={props.groupState}
              connectionsState={props.connectionsState}
              toFeedsPage={props.toFeedsPage}
              toGroupsPage={props.toGroupsPage}
              toConnectionsPage={props.toConnectionsPage}
            />
          )}
          {props.connectionsState && (
            <Connections
              feedsState={props.feedsState}
              groupState={props.groupState}
              connectionsState={props.connectionsState}
              toFeedsPage={props.toFeedsPage}
              toGroupsPage={props.toGroupsPage}
              toConnectionsPage={props.toConnectionsPage}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
}
export default Content;
