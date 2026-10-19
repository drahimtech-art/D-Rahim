import Top from "../../../../shared/Top/Top";
import ProjectCard from "./components/ProjectCard";
import End from "../../../../shared/Footer/Footer";
import FAQ from "../../../../shared/FAQ/FAQ";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../../../storage/PagesConfig";
import LoadingAnimation from "../../../../shared/LoadingState/LoadingAnimation";
function ProjectInfo() {
  const pagesConfigData = PagesConfigDataApi();
  const { projectInfoPage, setProjectInfoPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!projectInfoPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setProjectInfoPage(true);
        setShouldLoad(false);
      })();
    }, 1000);
    return () => {
      clearTimeout(removeLoadinigAnimationTimeOut);
    };
  }, []);
  return (
    <>
      <Top />
      <ProjectCard />
      <FAQ />
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default ProjectInfo;
