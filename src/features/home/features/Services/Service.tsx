import Top from "../../shared/Top/Top";
import HeadText from "./components/HeadText";
import CategoryMenu from "./components/CategoryMenu";
import SubHeadText from "./components/SubHeadText";
import ServiceCard from "./components/ServicesCard";
import EndSubMenuAndText from "./components/EndSubMenuAndText";
import End from "../../shared/Footer/Footer";
function Service() {
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
    </>
  );
}
export default Service;
