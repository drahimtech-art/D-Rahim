import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardPopUp from "./CardPopUp";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig.tsx";
import LoadingAnimation from "../LoadingState/LoadingAnimation.tsx";
import {
  ProjectDataApi,
  type ProjectData,
} from "../../../../storage/PortfolioProjectApi.tsx";
function Card({
  projectDate,
  isPC,
  isMoblie,
  isNotClickCable,
}: {
  projectDate: ProjectData;
  isPC: boolean;
  isMoblie: boolean;
  isNotClickCable?: boolean;
}) {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const urlNavigator = useNavigate();
  const dataContext = ProjectDataApi();
  const pagesConfigData = PagesConfigDataApi();
  const { projectInfoPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(false);
  if (!dataContext) return;
  const { setProjectInfo } = dataContext;
  const data = {
    pImage: projectDate.pImage,
    title: projectDate.title,
    about: projectDate.about,
    heading: projectDate.heading,
    sImage: projectDate.sImage,
    capabilities: projectDate.capabilities,
    duration: projectDate.duration,
    team: projectDate.team,
    location: projectDate.location,
    industry: projectDate.industry,
    projectType: projectDate.projectType,
    creationDate: projectDate.creationDate,
    projectStatus: projectDate.projectStatus,
    _id: projectDate._id,
    createdAt: projectDate.createdAt,
    updatedAt: projectDate.updatedAt,
    __v: projectDate.__v,
  };
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
  function handleClick() {
    //*=== project pc info
    setIsPopUpVisible(!isPopUpVisible);
  }
  function projectInfo() {
    //*=== project mobile info
    setProjectInfo(data);
    const url = "/project/info";
    urlNavigator(url, { replace: false });
    if (!projectInfoPage) {
      setShouldLoad(true);
    }
  }
  return (
    <>
      <section className="flex flex-col grow  min-[1000px]:max-h-full items-stretch  ">
        {isPC && (
          <span className="w-full h-full pointer min-[1000px]:h-100 overflow-hidden ourwork-image-card-parent">
            <img
              className="w-full h-full pointer   "
              src={projectDate.pImage}
              onClick={handleClick}
            ></img>
          </span>
        )}
        {isMoblie && (
          <img
            className="w-full h-full pointer min-[1000px]:h-100  rounded-2xl sm:rounded-[20px] sm:max-h-125"
            src={projectDate.pImage}
            onClick={isNotClickCable ? () => null : projectInfo}
          ></img>
        )}
        <h5 className="logoMainText font-bold ">
          {projectDate.title.toLocaleUpperCase()}
        </h5>
        <h5 className="ourWorkHeadMenu text-gray-600 min-[1000px]:line-clamp-3   font-inter">
          {projectDate.about}
        </h5>
      </section>
      {devicesWidth !== undefined && devicesWidth >= 1000 && (
        <CardPopUp
          control={isPopUpVisible}
          setIsPopUpVisible={setIsPopUpVisible}
          body={data}
        />
      )}
      {shouldLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default Card;
