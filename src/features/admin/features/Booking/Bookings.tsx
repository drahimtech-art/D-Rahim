import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "../../shared/SearchAndFilterBar";
import List from "./components/List";
function Bookings() {
  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Bookings"}
        subHeading={"Manage all bookings and appointments requests."}
      />
      <SearchAndFilterBar searchSection="bookings" />
      <List />
    </article>
  );
}
export default Bookings;
