import HeadContent from "./HeadContent";
import Content from "./Content";
function Dashboard() {
  return (
    <div className="w-full h-full">
      {/**Head content */}
      <HeadContent />
      {/**Body content */}
      <Content />
    </div>
  );
}
export default Dashboard;
