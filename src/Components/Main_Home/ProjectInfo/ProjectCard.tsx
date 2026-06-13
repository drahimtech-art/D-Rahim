import { AppDataContext } from "../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ProjectCard() {
  const urlNavigator = useNavigate();
  const dataContext = AppDataContext();
  if (!dataContext) return;
  const { projectInfo } = dataContext;
  useEffect(() => {
    if (projectInfo.imageUrl.trim() === "") {
      urlNavigator("/", { replace: true });
    }
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1000) {
        urlNavigator("/", { replace: true });
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", () => handleWindowResize);
  }, []);

  return (
    <div className="mt-10 flex-col pl-5 pr-5 gap-10 ">
      <span>
        <h5 className=" font-medium font-inter min24Max30px">
          {projectInfo.popHeadText}
        </h5>
      </span>
      <span className="block mt-10">
        <h5 className="expereanceText  font-semibold fontPoppins">
          {projectInfo.popUpHeadding}
        </h5>
      </span>
      <span className=" block w-full h-full mt-10">
        <img className="w-full h-full" src={projectInfo.imageUrl}></img>
      </span>
      <div className="flex flex-col gap-5 mt-5">
        <span>
          <h5 className="font-semibold min16Max24px">Capabilities</h5>
          {projectInfo.capabilities.map((e, i) => {
            return (
              <h5 className=" min16Max24px" key={`capabilities-key-${i}`}>
                {e}
              </h5>
            );
          })}
        </span>
        <span>
          <h5 className="font-semibold min16Max24px">Teams</h5>
          {projectInfo.team.map((e, i) => {
            return (
              <h5 className=" min16Max24px" key={`capabilities-key-${i}`}>
                {e}
              </h5>
            );
          })}
        </span>
        <span>
          <h5 className="font-semibold min16Max24px">Industry</h5>
          {projectInfo.industry.map((e, i) => {
            return (
              <h5 className=" min16Max24px" key={`capabilities-key-${i}`}>
                {e}
              </h5>
            );
          })}
        </span>
        <span>
          <h5 className="font-semibold min16Max24px">Duration</h5>
          <h5 className="min16Max24px">{projectInfo.duration}</h5>
        </span>
        <span>
          <h5 className="font-semibold min16Max24px">Location</h5>
          <h5 className="min16Max24px">{projectInfo.location}</h5>
        </span>
        <span>
          <h5 className="min16Max24px mt-5">{projectInfo.endText}</h5>
        </span>
      </div>
    </div>
  );
}
export default ProjectCard;
