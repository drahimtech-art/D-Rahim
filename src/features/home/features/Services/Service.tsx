import Top from "../../shared/Top/Top";
import HeadText from "./components/HeadText";
import CategoryMenu from "./components/CategoryMenu";
import SubHeadText from "./components/SubHeadText";
import ServiceCard from "./components/ServicesCard";
import EndSubMenuAndText from "./components/EndSubMenuAndText";
import End from "../../shared/Footer/Footer";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
function Service() {
  const pagesConfigData = PagesConfigDataApi();
  const { setServicesPage, servicesPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!servicesPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setServicesPage(true);
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
        <CategoryMenu />
        <SubHeadText />
        <ServiceCard />
        <EndSubMenuAndText />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default Service;
