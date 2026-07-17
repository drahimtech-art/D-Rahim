import Head from "../Head";
type CommunityPagesControl = {
  feedsState: boolean;
  groupState: boolean;
  connectionsState: boolean;
  toFeedsPage: () => void;
  toGroupsPage: () => void;
  toConnectionsPage: () => void;
};
function Group(props: CommunityPagesControl) {
  return (
    <>
      {/**head  */}
      <Head
        feedsSate={props.feedsState}
        groupState={props.groupState}
        connectionsState={props.connectionsState}
        toFeedsPage={props.toFeedsPage}
        toGroupsPage={props.toGroupsPage}
        toConnectionsPage={props.toConnectionsPage}
      />
    </>
  );
}
export default Group;
