import { useState } from "react";
import Content from "./features/Content/Content";
import Connections from "./features/Connections/Connections";
import FriendsRequst from "./features/Content/features/Connections/components/FriendsRequst";
function Community() {
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
    <div className="w-full max-h-full flex overflow-hidden gap-10">
      {/**content */}
      <div className="mr-auto w-full ">
        <Content
          feedsState={feedState}
          groupState={groupState}
          connectionsState={connectionsState}
          toConnectionsPage={toConnectionsPage}
          toFeedsPage={toFeedsPage}
          toGroupsPage={toGroupsPage}
        />
      </div>
      {/**connections */}
      <div className="min-w-fit">
        {feedState && <Connections />}
        {groupState && <Connections />}
        {connectionsState && <FriendsRequst />}
      </div>
    </div>
  );
}
export default Community;
