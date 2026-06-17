import Head from "./Head";
import Content from "./Content/Content";
function Messages() {
  return (
    <div className="w-full max-h-full h-full overflow-hidden ">
      {/**head */}
      <Head />
      {/**conatent */}
      <div className="w-full h-full">
        <Content />
      </div>
    </div>
  );
}
export default Messages;
