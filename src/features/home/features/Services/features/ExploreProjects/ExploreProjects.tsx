import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OurWorkApi } from "../../../../../../storage/OurWorkApi";
import Top from "../../../../shared/Top/Top";
import Card from "./components/Card";
import End from "../../../../shared/Footer/Footer";
function ExploreProjects() {
  const ourWorkProjecData = OurWorkApi();
  const { listOfProjects } = ourWorkProjecData;
  const exploreProject = [
    ...listOfProjects.moblieDesign,
    ...listOfProjects.websiteDesign,
    ...listOfProjects.branding,
  ];
  const urlNavigator = useNavigate();
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  useEffect(() => {
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
    return urlNavigator(url, { replace: true });
  }

  return (
    <>
      <Top />
      <div className="flex flex-col w-full gap-27.25">
        {exploreProject.map((e, i) => {
          return <Card body={e} key={`project-key${i}`} />;
        })}
      </div>
      <End />
    </>
  );
}
export default ExploreProjects;
