import { useState } from "react";
import CardPopUp from "./CardPopUp";
type ImageData = {
  imageUrl: string;
  imageText: string;
  subText?: string;
};

function Card(props: ImageData) {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  function handleClick() {
    setIsPopUpVisible(!isPopUpVisible);
  }
  return (
    <>
      <span className="flex flex-col grow  lg:max-h-full items-stretch">
        <img
          className="w-full h-full pointer lg:h-100 "
          src={props.imageUrl}
          onClick={handleClick}
        ></img>
        <h5 className="logoMainText font-bold ">{props.imageText}</h5>
        <h5 className="ourWorkHeadMenu text-gray-600 lg:line-clamp-3   font-inter">
          {props.subText}
        </h5>
      </span>
      <CardPopUp
        control={isPopUpVisible}
        setIsPopUpVisible={setIsPopUpVisible}
      />
    </>
  );
}
export default Card;
