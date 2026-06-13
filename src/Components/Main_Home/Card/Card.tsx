import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardPopUp from "./CardPopUp";
import { AppDataContext } from "../../ContextApi/ContextApi";
type ImageData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl?: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
  isPC: boolean;
  isMoblie: boolean;
  isNotClickCable?: boolean;
};

function Card(props: ImageData) {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const urlNavigator = useNavigate();
  const dataContext = AppDataContext();
  if (!dataContext) return;
  const { setProjectInfo } = dataContext;
  const data = {
    imageUrl: props.image,
    imageText: props.text,
    subText: props.subText,
    popUpHeadding: props.popUpHeadding,
    popHeadText: props.popHeadText,
    popImageUrl: props.popImageUrl,
    capabilities: props.capabilities,
    duration: props.duration,
    team: props.team,
    location: props.location,
    industry: props.industry,
    endText: props.endText,
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
  }
  return (
    <>
      <span className="flex flex-col grow  min-[1000px]:max-h-full items-stretch">
        {props.isPC && (
          <img
            className="w-full h-full pointer min-[1000px]:h-100 "
            src={props.image}
            onClick={handleClick}
          ></img>
        )}
        {props.isMoblie && (
          <img
            className="w-full h-full pointer min-[1000px]:h-100  rounded-2xl sm:rounded-[20px] sm:max-h-125"
            src={props.image}
            onClick={props.isNotClickCable ? () => null : projectInfo}
          ></img>
        )}
        <h5 className="logoMainText font-bold ">
          {props.text.toLocaleUpperCase()}
        </h5>
        <h5 className="ourWorkHeadMenu text-gray-600 min-[1000px]:line-clamp-3   font-inter">
          {props.subText}
        </h5>
      </span>
      {devicesWidth !== undefined && devicesWidth >= 1000 && (
        <CardPopUp
          control={isPopUpVisible}
          setIsPopUpVisible={setIsPopUpVisible}
          body={data}
        />
      )}
    </>
  );
}
export default Card;
