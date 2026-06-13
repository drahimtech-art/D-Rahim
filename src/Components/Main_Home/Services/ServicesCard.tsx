import cv1 from "/images/c2.png";
import cv1Image from "/images/16.png";
import cv1ImageM from "/images/m16.png";
import cv2 from "/images/c3.png";
import cv2Image from "/images/11.png";
import cv2ImageM from "/images/m11.png";
import cv3 from "/images/c6.png";
import cv3Image from "/images/15.png";
import cv3ImageM from "/images/m15.png";
import cv4 from "/images/hr.png";
import cv4Image from "/images/2.png";
import cv4ImageM from "/images/m2.png";
import cv5 from "/images/c7.png";
import cv5Image from "/images/7.png";
import cv5ImageM from "/images/7.png";
import { useState, useEffect } from "react";
function ServiceCard() {
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
  return (
    <div className="min-[1000px]:mt-20 mt-10 min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  w-full  min-[1000px]:max-h-171.5 overflow-hidden">
      <div className="flex min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:gap-4 gap-7.5 overflow-x-scroll min-[1000px]:overflow-auto">
        <div className="relative min-w-70 h-70 min-[1000px]:max-h-171.5 bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:w-full min-[1000px]:h-full ">
          {devicesWidth !== undefined && devicesWidth >= 1000 ? (
            <img
              className="  min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  w-full max-h-171.5 min-[1000px]:bg-[#bdb9b9]"
              src={cv1Image}
            ></img>
          ) : (
            <img
              className="  min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  w-full max-h-171.5 min-[1000px]:bg-[#bdb9b9]"
              src={cv1ImageM}
            ></img>
          )}
          <span className="min-w-70 min-[1000px]:w-full ">
            <img
              className="w-full h-full min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl hover:opacity-0 transition-all"
              src={cv1}
            ></img>
          </span>
        </div>
        <div className="flex gap-7.5 min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:gap-4 min-[1000px]:max-h-171.5 min-[1000px]:min-w-145 w-full ">
          <div className="min-w-70 h-70 min-[1000px]:w-full relative  ">
            {devicesWidth !== undefined && devicesWidth >= 1000 ? (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv2Image}
              ></img>
            ) : (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv2ImageM}
              ></img>
            )}
            <span className="min-w-70 min-[1000px]:w-full ">
              <img
                className="w-full h-full min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl hover:opacity-0 transition-all"
                src={cv2}
              ></img>
            </span>
          </div>
          <div className="min-w-70 h-70 min-[1000px]:w-full relative min-[1000px]:h-70   max-h-81    ">
            {devicesWidth !== undefined && devicesWidth >= 1000 ? (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv3Image}
              ></img>
            ) : (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv3ImageM}
              ></img>
            )}
            <span className="min-w-70 min-[1000px]:w-full ">
              <img
                className="w-full h-full min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl hover:opacity-0 transition-all"
                src={cv3}
              ></img>
            </span>
          </div>
          <div className="min-w-70 h-70 min-[1000px]:w-full relative min-[1000px]:h-70   max-h-81    ">
            {devicesWidth !== undefined && devicesWidth >= 1000 ? (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv5Image}
              ></img>
            ) : (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv5ImageM}
              ></img>
            )}
            <span className="min-w-70 min-[1000px]:w-full ">
              <img
                className="w-full h-full min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl hover:opacity-0 transition-all"
                src={cv5}
              ></img>
            </span>
          </div>
          <div className="min-w-70 h-70 min-[1000px]:w-full relative min-[1000px]:h-70   max-h-81    ">
            {devicesWidth !== undefined && devicesWidth >= 1000 ? (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv4Image}
              ></img>
            ) : (
              <img
                className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                src={cv4ImageM}
              ></img>
            )}
            <span className="min-w-70 min-[1000px]:w-full ">
              <img
                className="w-full h-full min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl hover:opacity-0 transition-all"
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
