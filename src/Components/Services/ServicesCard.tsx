import cv1 from "/images/c2.png";
import cv1Image from "/images/16.png";
import cv2 from "/images/c3.png";
import cv2Image from "/images/11.png";
import cv3 from "/images/c6.png";
import cv3Image from "/images/15.png";
import cv4 from "/images/hr.png";
import cv4Image from "/images/2.png";
import cv5 from "/images/c7.png";
import cv5Image from "/images/7.png";

function ServiceCard() {
  return (
    <div className="mt-20 pl-10 pr-10  w-full  max-h-171.5">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="relative  max-h-171.5 bg-[#bdb9b9] rounded-4xl w-full h-full ">
          <img
            className="rounded-4xl w-full max-h-171.5 bg-[#bdb9b9]"
            src={cv1Image}
          ></img>
          <span className="">
            <img
              className="w-full h-full absolute top-0 bg-[#bdb9b9] rounded-4xl hover:opacity-0 transition-all"
              src={cv1}
            ></img>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 max-h-171.5 w-full">
          <div className="relative w-full h-full   max-h-81    ">
            <img className="rounded-4xl w-full h-full" src={cv2Image}></img>
            <span className="">
              <img
                className="w-full h-full absolute top-0 bg-[#bdb9b9] rounded-4xl hover:opacity-0 transition-all"
                src={cv2}
              ></img>
            </span>
          </div>
          <div className="relative w-full h-full   max-h-81   ">
            <img className="rounded-4xl w-full h-full" src={cv3Image}></img>
            <span className="">
              <img
                className="w-full h-full absolute top-0 bg-[#bdb9b9] rounded-4xl hover:opacity-0 transition-all"
                src={cv3}
              ></img>
            </span>
          </div>
          <div className="relative w-full h-full   max-h-81   mb-0  ">
            <img className="rounded-4xl w-full h-full " src={cv5Image}></img>
            <span className="">
              <img
                className="w-full h-full absolute top-0 bg-[#bdb9b9] rounded-4xl hover:opacity-0 transition-all"
                src={cv5}
              ></img>
            </span>
          </div>
          <div className="relative w-full h-full   max-h-81   mb-0  ">
            <img className="rounded-4xl w-full h-full" src={cv4Image}></img>
            <span className="">
              <img
                className="w-full h-full absolute top-0 bg-[#bdb9b9] rounded-4xl hover:opacity-0 transition-all"
                src={cv4}
              ></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
