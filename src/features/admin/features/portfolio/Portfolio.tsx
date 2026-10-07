import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "../../shared/SearchAndFilterBar";
import List from "./components/List";
function Portfolio(): React.ReactElement {
  return (
    <article className="w-full h-full">
      <TopBar
        heading="Portfolio"
        subHeading="Manage the sevices you offer to your clients."
      />
      <SearchAndFilterBar searchSection="services" />
      <List />
    </article>
  );
}
export default Portfolio;
//
