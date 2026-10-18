import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import Top from "../../shared/Top/Top";
import AboutHeadText from "./components/AboutHeadText";
import AboutSubHeadText from "./components/AboutSubHeadText";
import OurTerms from "./components/OurTerms";
import End from "../../shared/Footer/Footer";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
function About() {
  const pagesConfigData = PagesConfigDataApi();
  const { setAboutPage, aboutPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!aboutPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setAboutPage(true);
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
        <AboutHeadText />
        <AboutSubHeadText />
        <OurTerms />
        <EndCategoryMenu />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default About;
