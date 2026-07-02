import Content from "./Content/Content";
import Connections from "./Connections/Connections";
function Community() {
  return (
    <div className="w-full max-h-full flex overflow-hidden gap-10">
      {/**content */}
      <div className="mr-auto w-full">
        <Content />
      </div>
      {/**connections */}
      <div className=" w-fit">
        <Connections />
      </div>
    </div>
  );
}
export default Community;
