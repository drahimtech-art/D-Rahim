import Head from "./Head";
import Content from "./Content/Content";
function ClassContentCard() {
  return (
    <div className="w-full h-full">
      {/**head content and progress bar */}
      <Head />
      {/**content body */}
      <Content />
    </div>
  );
}
export default ClassContentCard;
