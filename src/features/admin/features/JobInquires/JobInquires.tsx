import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "../../shared/SearchAndFilterBar";
import List from "./components/List";
function JobInquires() {
  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Job Requests"}
        subHeading={"Manage all job requests."}
      />
      <SearchAndFilterBar searchSection="job requests" />
      <List />
    </article>
  );
}
export default JobInquires;
