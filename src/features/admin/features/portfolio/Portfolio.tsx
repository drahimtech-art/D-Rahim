import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "./components/SearchAndFilterBar";
import List from "./components/List";
import { useState, useEffect } from "react";
import { type ProjectInfo, getProjectData } from "./api/Api";
import { AdminConfigApi } from "../../../../storage/AdminConfig";
function Portfolio(): React.ReactElement {
  const adminConfigApi = AdminConfigApi();
  const { projectDataInfoList, setProjectDataInfoList } = adminConfigApi;
  const [projectsList, setProjectList] =
    useState<ProjectInfo[]>(projectDataInfoList);
  const [constProjectList, setConstProjectList] =
    useState<ProjectInfo[]>(projectDataInfoList);
  //
  useEffect(() => {
    //handleProjectListApiFetch(true, undefined);
    if (projectDataInfoList.length !== 0) return;
    getProjectData({
      searchWordsList: "",
      filterStatus: "All",
    })
      .then((res) => {
        //alert(res.message);
        setProjectList(res.data);
        setConstProjectList(res.data);
        setProjectDataInfoList(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  return (
    <article className="w-full h-full">
      <TopBar
        heading="Portfolio"
        subHeading="Manage the sevices you offer to your clients."
      />
      <SearchAndFilterBar
        searchSection="services"
        setProjectList={setProjectList}
        constProjectList={constProjectList}
        setConstProjectList={setConstProjectList}
      />
      <List projectList={projectsList} />
    </article>
  );
}
export default Portfolio;
//
