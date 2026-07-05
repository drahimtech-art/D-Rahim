import PostTypeText from "./Components/PostTypeText";
import PostTypePhoto from "./Components/PostTypePhoto";
function Feed() {
  return (
    <div className="flex flex-col gap-3.5 w-full h-fit">
      {/**post card */}
      <PostTypeText />
      {/**post card */}
      <PostTypePhoto />
      {/**post card */}
      <PostTypeText />
      {/**post card */}
      <PostTypePhoto />
    </div>
  );
}
export default Feed;
