import HeadContent from "./components/HeadContent";
import Content from "./components/Content";
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
