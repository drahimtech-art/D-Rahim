import { useState, useEffect } from "react";
import CardPopUp from "./CardPopUp";
type ImageData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
  isPC: boolean;
  isMoblie: boolean;
};

function Card(props: ImageData) {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const data = {
    imageUrl: props.image,
    imageText: props.text,
    subText: props.subText,
    popUpHeadding: props.popUpHeadding,
    popHeadText: props.popHeadText,
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
    setIsPopUpVisible(!isPopUpVisible);
  }
  return (
    <>
      <span className="flex flex-col grow  lg:max-h-full items-stretch">
        {props.isPC && (
          <img
            className="w-full h-full pointer lg:h-100 "
            src={props.image}
            onClick={handleClick}
          ></img>
        )}
        {props.isMoblie && (
          <img
            className="w-full h-full pointer lg:h-100  rounded-2xl"
            src={props.image}
            onClick={handleClick}
          ></img>
        )}
        <h5 className="logoMainText font-bold ">
          {props.text.toLocaleUpperCase()}
        </h5>
        <h5 className="ourWorkHeadMenu text-gray-600 lg:line-clamp-3   font-inter">
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
