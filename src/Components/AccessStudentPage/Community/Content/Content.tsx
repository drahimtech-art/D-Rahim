import Head from "./Head";
import UserPost from "./UserPost";
function Content() {
  return (
    <div className="flex flex-col w-full">
      {/**head  */}
      <Head />
      <div className="mt-7 flex flex-col gap-5">
        <UserPost />
      </div>
    </div>
  );
}
export default Content;
