import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "./components/SearchAndFilterBar";
import List from "./components/List";
import { useState } from "react";
import type { ProjectInfo } from "./api/Api";
function Portfolio(): React.ReactElement {
  const [projectsList, setProjectList] = useState<ProjectInfo[]>([]);
  return (
    <article className="w-full h-full">
      <TopBar
        heading="Portfolio"
        subHeading="Manage the sevices you offer to your clients."
      />
      <SearchAndFilterBar
        searchSection="services"
        setProjectList={setProjectList}
      />
      <List projectList={projectsList} />
    </article>
  );
}
export default Portfolio;
//
