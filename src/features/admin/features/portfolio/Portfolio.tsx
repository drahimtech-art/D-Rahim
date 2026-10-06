import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "../../shared/SearchAndFilterBar";
function Portfolio(): React.ReactElement {
  return (
    <article className="w-full h-full">
      <TopBar
        heading="Portfolio"
        subHeading="Manage the sevices you offer to your clients."
      />
      <SearchAndFilterBar searchSection="services" />
    </article>
  );
}
export default Portfolio;
