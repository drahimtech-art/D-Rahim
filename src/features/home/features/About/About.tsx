import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import Top from "../../shared/Top/Top";
import AboutHeadText from "./components/AboutHeadText";
import AboutSubHeadText from "./components/AboutSubHeadText";
import OurTerms from "./components/OurTerms";
import End from "../../shared/Footer/Footer";
function About() {
  return (
    <>
      <Top />
      <AboutHeadText />
      <AboutSubHeadText />
      <OurTerms />
      <EndCategoryMenu />
      <End />
    </>
  );
}
export default About;
