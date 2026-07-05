import Head from "./Head";
import UserPost from "./UserPost";
import Feed from "./Feed/Feed";
function Content() {
  return (
    <div className="flex flex-col w-full">
      {/**head  */}
      <Head />
      <div className="mt-7.5 flex flex-col gap-3.75">
        <UserPost />
        {/**content */}
        <Feed />
      </div>
    </div>
  );
}
export default Content;
