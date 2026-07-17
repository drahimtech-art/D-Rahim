import { useRef, useEffect } from "react";
type CommunityPagesControl = {
  feedsSate: boolean;
  groupState: boolean;
  connectionsState: boolean;
  toFeedsPage: () => void;
  toGroupsPage: () => void;
  toConnectionsPage: () => void;
};
function Head(props: CommunityPagesControl) {
  const feedsSateRef = useRef<HTMLSpanElement | null>(null);
  const groupStateRef = useRef<HTMLSpanElement | null>(null);
  const connectionsStateRef = useRef<HTMLSpanElement | null>(null);
  //page falback ux to show user page his on
  useEffect(() => {
    if (
      !feedsSateRef.current ||
      !groupStateRef.current ||
      !connectionsStateRef.current
    )
      return;
    const feedsSate = props.feedsSate;
    const groupState = props.groupState;
    const connectionsState = props.connectionsState;
    if (feedsSate) {
      connectionsStateRef.current.classList.remove("border-[#11AC76]");
      connectionsStateRef.current.classList.remove("text-[#11AC76]");
      connectionsStateRef.current.classList.add("border-[#f8ffff]");
      connectionsStateRef.current.classList.add("text-black");
      groupStateRef.current.classList.remove("border-[#11AC76]");
      groupStateRef.current.classList.remove("text-[#11AC76]");
      groupStateRef.current.classList.add("border-[#f8ffff]");
      groupStateRef.current.classList.add("text-black");
      //
      feedsSateRef.current.classList.remove("border-[#f8ffff]");
      feedsSateRef.current.classList.remove("text-black");
      feedsSateRef.current.classList.add("border-[#11AC76]");
      feedsSateRef.current.classList.add("text-[#11AC76]");
    } else if (groupState) {
      connectionsStateRef.current.classList.remove("border-[#11AC76]");
      connectionsStateRef.current.classList.remove("text-[#11AC76]");
      connectionsStateRef.current.classList.add("border-[#f8ffff]");
      connectionsStateRef.current.classList.add("text-black");
      feedsSateRef.current.classList.remove("border-[#11AC76]");
      feedsSateRef.current.classList.remove("text-[#11AC76]");
      feedsSateRef.current.classList.add("border-[#f8ffff]");
      feedsSateRef.current.classList.add("text-black");
      //
      groupStateRef.current.classList.remove("border-[#f8ffff]");
      groupStateRef.current.classList.remove("text-black");
      groupStateRef.current.classList.add("border-[#11AC76]");
      groupStateRef.current.classList.add("text-[#11AC76]");
    } else if (connectionsState) {
      feedsSateRef.current.classList.remove("border-[#11AC76]");
      feedsSateRef.current.classList.remove("text-[#11AC76]");
      feedsSateRef.current.classList.add("border-[#f8ffff]");
      feedsSateRef.current.classList.add("text-black");
      groupStateRef.current.classList.remove("border-[#11AC76]");
      groupStateRef.current.classList.remove("text-[#11AC76]");
      groupStateRef.current.classList.add("border-[#f8ffff]");
      groupStateRef.current.classList.add("text-black");
      //
      connectionsStateRef.current.classList.remove("border-[#f8ffff]");
      connectionsStateRef.current.classList.remove("text-black");
      connectionsStateRef.current.classList.add("border-[#11AC76]");
      connectionsStateRef.current.classList.add("text-[#11AC76]");
    }
  }, [props.feedsSate, props.groupState, props.connectionsState]);
  return (
    <td className="w-full flex flex-col gap-5">
      {/*head text*/}
      <span className="block">
        <h5 className="font-medium font-sans min20Max24px">Community</h5>
      </span>
      {/**feed group and connections naviagtion */}
      <div className="flex mt-7.5 gap-12">
        <span
          className="w-fit border-b border-[#f8ffff] text-black"
          ref={feedsSateRef}
          onClick={() => props.toFeedsPage()}
        >
          <h5 className="text-[20px] font-normal font-sans pointer">Feed</h5>
        </span>
        <span
          className="border-b border-[#f8ffff] text-black "
          ref={groupStateRef}
          onClick={() => props.toGroupsPage()}
        >
          <h5 className="text-[20px] font-normal font-sans pointer">Groups</h5>
        </span>
        <span
          className="border-b border-[#f8ffff] text-black"
          ref={connectionsStateRef}
          onClick={() => props.toConnectionsPage()}
        >
          <h5 className="text-[20px] font-normal font-sans pointer">
            Connections
          </h5>
        </span>
      </div>
    </td>
  );
}
export default Head;
