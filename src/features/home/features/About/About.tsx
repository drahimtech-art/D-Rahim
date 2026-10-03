import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import Top from "../../shared/Top/Top";
import AboutHeadText from "./components/AboutHeadText";
import AboutSubHeadText from "./components/AboutSubHeadText";
import OurTerms from "./components/OurTerms";
import End from "../../shared/Footer/Footer";
import { useEffect } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
function About() {
  const pagesConfigData = PagesConfigDataApi();
  const { setAboutPage } = pagesConfigData;
  useEffect(() => {
    (() => {
      setAboutPage(true);
    })();
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
    </>
  );
}
export default About;
