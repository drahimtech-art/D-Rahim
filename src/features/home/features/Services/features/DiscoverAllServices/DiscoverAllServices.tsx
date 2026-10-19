import Top from "../../../../shared/Top/Top";
import HeadText from "./components/HeadText";
import ProjectCard from "./components/ProjectCard";
import End from "../../../../shared/Footer/Footer";
import { PagesConfigDataApi } from "../../../../../../storage/PagesConfig";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../../../shared/LoadingState/LoadingAnimation";
function DiscoverAllServices() {
  const pagesConfigData = PagesConfigDataApi();
  const { discoverAllServicesPage, setDiscoverAllServicesPage } =
    pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!discoverAllServicesPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setDiscoverAllServicesPage(true);
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
      <main>
        <HeadText />
        <ProjectCard />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default DiscoverAllServices;
