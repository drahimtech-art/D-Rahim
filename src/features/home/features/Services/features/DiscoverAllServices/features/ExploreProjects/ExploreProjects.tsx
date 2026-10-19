import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectDataApi } from "../../../../../../../../storage/PortfolioProjectApi";
import Top from "../../../../../../shared/Top/Top";
import Card from "./components/Card";
import End from "../../../../../../shared/Footer/Footer";
import { PagesConfigDataApi } from "../../../../../../../../storage/PagesConfig";
import LoadingAnimation from "../../../../../../shared/LoadingState/LoadingAnimation";
function ExploreProjects(): React.ReactElement {
  const ourWorkProjecData = ProjectDataApi();
  const { listOfProjects } = ourWorkProjecData;
  const exploreProject = [
    ...listOfProjects.moblieDesign,
    ...listOfProjects.websiteDesign,
    ...listOfProjects.branding,
  ];
  const urlNavigator = useNavigate();
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  const pagesConfigData = PagesConfigDataApi();
  const { exploreProjectsPage, setExporeProjectsPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!exploreProjectsPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setExporeProjectsPage(true);
        setShouldLoad(false);
      })();
    }, 1000);
    return () => {
      clearTimeout(removeLoadinigAnimationTimeOut);
    };
  }, []);
  //
  useEffect((): any => {
    const handleWindowResize = () => {
      if (typeof window !== undefined) {
        return setDevicesWidth(window.innerWidth);
      }
      return setDevicesWidth(0);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", () => handleWindowResize);
  }, []);
  if (devicesWidth !== undefined && devicesWidth < 1000) {
    const url = "discover/all/services";
    urlNavigator(url, { replace: true });
  }
  //

  return (
    <>
      <Top />
      <main className="flex flex-col w-full gap-27.25">
        {exploreProject.map((e, i) => {
          return <Card body={e} key={`project-key${i}`} />;
        })}
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default ExploreProjects;
