import cv1 from "/images/c9.png";
import cv1Image from "/images/20.png";
import cv2 from "/images/c8.png";
import cv2Image from "/images/18.png";
import cv3 from "/images/c5.png";
import cv3Image from "/images/19.png";
import cv4 from "/images/c4.png";
import cv4Image from "/images/21.png";
import { useNavigate } from "react-router-dom";
function EndSubMenuAndText() {
  const urlNavigator = useNavigate();
  function toUiUxPage() {
    const url = "/services/uiux";
    urlNavigator(url, { replace: false });
  }
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 min-[1000px]:mt-30 mt-10 min-[1000px]:mb-27.25 mb-10">
        <span className="flex flex-col gap-10 ">
          <h5 className="font-Poppins font-semibold min40Max60px">
            Tailored Solutions for Startups
          </h5>
          <h5 className="font-inter font-medium min16Max24px min-[1000px]:w-174.75">
            We’re passionate about building young digital products and
            understand that time is critical when so much is at stake. That’s
            why we offer practical service packages to help you move forward
            without delays.
          </h5>
        </span>
      </div>
      <div className="-mb-10 sm:-mb-80 w-full  min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 min-[1000px]:mt-20 overflow-hidden">
        <div className="flex  min-[1000px]:gap-10 gap-7.5 min-[1000px]:justify-around w-full min-[1000px]:w-full  overflow-x-scroll min-[1000px]:overflow-auto ">
          <div className="relative min-w-70 min-[1000px]:w-full h-70  min-[1000px]:max-h-171.5 pointer">
            <img
              className=" h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  min-[1000px]:rounded-4xl w-full absolute min-[1000px]:block  min-[1000px]:max-h-171.5 "
              src={cv1Image}
              onClick={toUiUxPage}
            ></img>
            <span className="w-70">
              <img
                className="w-70 h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] rounded-2xl  min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv1}
                onClick={toUiUxPage}
              ></img>
            </span>
          </div>
          <div className="relative min-w-70 min-[1000px]:w-full h-70  min-[1000px]:max-h-171.5 ">
            <img
              className=" h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  min-[1000px]:rounded-4xl w-full absolute min-[1000px]:block  min-[1000px]:max-h-171.5 "
              src={cv2Image}
            ></img>
            <span className="w-70">
              <img
                className="w-70 h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] rounded-2xl  min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv2}
              ></img>
            </span>
          </div>
          <div className="relative min-w-70 min-[1000px]:w-full h-70  min-[1000px]:max-h-171.5 ">
            <img
              className=" h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  min-[1000px]:rounded-4xl w-full absolute min-[1000px]:block  min-[1000px]:max-h-171.5 "
              src={cv3Image}
            ></img>
            <span className="w-70">
              <img
                className="w-70 h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] rounded-2xl  min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv3}
              ></img>
            </span>
          </div>
          <div className="relative min-w-70 min-[1000px]:w-full h-70  min-[1000px]:max-h-171.5 ">
            <img
              className=" h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  min-[1000px]:rounded-4xl w-full absolute min-[1000px]:block  min-[1000px]:max-h-171.5 "
              src={cv4Image}
            ></img>
            <span className="w-70">
              <img
                className="w-70 h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] rounded-2xl  min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv4}
              ></img>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default EndSubMenuAndText;
