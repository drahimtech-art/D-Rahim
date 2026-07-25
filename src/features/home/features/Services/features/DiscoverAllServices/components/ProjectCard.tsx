import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OurWorkApi } from "../../../../../../../storage/OurWorkApi";
import FAQ from "../../../../../shared/FAQ/FAQ";
import CardList from "../../../../../shared/Card/CardList";
function ProjectCard() {
  const urlNavigator = useNavigate();
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  const ourWorkProjecData = OurWorkApi();
  const { allRandomSelectedProjectInfo } = ourWorkProjecData;
  if (!allRandomSelectedProjectInfo) return;
  const projects =
    allRandomSelectedProjectInfo[
      Math.floor(Math.random() * allRandomSelectedProjectInfo.length)
    ];
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
  function exploreBtw() {
    const url = "/explore/projects";
    urlNavigator(url, { replace: false });
  }
  function homeBtw() {
    const url = "/";
    urlNavigator(url, { replace: true });
  }
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 min-[1000px]:mt-30 mt-10">
        <span className="block min-[1000px]:mt-30 ">
          <h5 className="fontPoppins font-semibold min40Max60px">
            Our Projects
          </h5>
          <h5 className="min-[1000px]mt-5 mt-10 min16Max24px w-full  font-inter min-[1000px]:max-w-247.75">
            We’ve partnered with companies across a wide range of industries,
            from mobile banking to earthworks operations. What connects all our
            projects is a shared approach: deep empathy for end users, rapid
            iteration, and close collaboration with our clients’ teams.
          </h5>
        </span>
      </div>
      <div className="min-[1000px]:mt-15 mt-10 h-fit  ">
        {devicesWidth !== undefined && devicesWidth >= 1000 ? (
          <CardList body={projects} isPC={true} isMoblie={false} />
        ) : (
          <CardList
            body={projects}
            isPC={false}
            isMoblie={true}
            isNotClickCable={true}
          />
        )}
      </div>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 min-[1000px]:mt-27.25 mt-10">
        {devicesWidth !== undefined && devicesWidth >= 1000 ? (
          <button
            className="border-2 rounded-full pointer  w-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5 font-inter font-medium min16Max24px bg-transparent hover:bg-secondary-green hover:border-secondary-green hover:text-gray-200  text-black   transition-all"
            onClick={exploreBtw}
          >
            <h5 className="">Explore more projects</h5>
          </button>
        ) : (
          <button
            className="border-2 rounded-full pointer  w-fit sm:w-full sm:text-center pl-7.5 pr-7.5 pt-2.5 pb-2.5 font-inter font-medium min16Max24px bg-transparent hover:bg-secondary-green hover:border-secondary-green hover:text-gray-200  text-black   transition-all"
            onClick={homeBtw}
          >
            <h5 className="">Explore more projects</h5>
          </button>
        )}
      </div>
      <div className="mt-30 sm:pb-10 min-[1000px]:mb-0">
        <FAQ />
      </div>
    </>
  );
}
export default ProjectCard;
