import Head from "./Head";
import ConectionsList from "./ConectionsList";
function Connections() {
  return (
    <div className="w-full h-full">
      {/**head, search bar and filter bar */}
      <Head />
      {/**connections list */}
      <ConectionsList />
    </div>
  );
}
export default Connections;
