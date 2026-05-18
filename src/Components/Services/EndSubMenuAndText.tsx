import cv1 from "/images/c9.png";
import cv1Image from "/images/20.png";
import cv2 from "/images/c8.png";
import cv2Image from "/images/18.png";
import cv3 from "/images/c5.png";
import cv3Image from "/images/19.png";
import cv4 from "/images/c4.png";
import cv4Image from "/images/21.png";
function EndSubMenuAndText() {
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
      <div className="-mb-10 sm:-mb-80 pl-10 pr-10 min-[1000px]:mt-20 overflow-hidden">
        <div className="flex min-[1000px]:gap-10 gap-7.5 min-[1000px]:justify-around w-fit min-[1000px]:w-full  overflow-x-scroll">
          <div className="relative w-[280px] min-[1000px]:w-full h-[280px]  min-[1000px]:max-h-171.5 ">
            <img
              className="w-[280px] h-[280px] min-[1000px]:rounded-4xl w-full absolute  min-[1000px]:max-h-171.5 "
              src={cv1Image}
            ></img>
            <span className="w-[280px]">
              <img
                className="w-[280px] h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv1}
              ></img>
            </span>
          </div>
          <div className="relative w-[280px] min-[1000px]:w-full h-[280px]  min-[1000px]:max-h-171.5 ">
            <img
              className="w-[280px] h-[280px] min-[1000px]:rounded-4xl w-full absolute  min-[1000px]:max-h-171.5 "
              src={cv2Image}
            ></img>
            <span className="w-[280px]">
              <img
                className="w-[280px] h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv2}
              ></img>
            </span>
          </div>
          <div className="relative w-[280px] min-[1000px]:w-full h-[280px]  min-[1000px]:max-h-171.5 ">
            <img
              className="w-[280px] h-[280px] min-[1000px]:rounded-4xl w-full absolute  min-[1000px]:max-h-171.5 "
              src={cv3Image}
            ></img>
            <span className="w-[280px]">
              <img
                className="w-[280px] h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv3}
              ></img>
            </span>
          </div>
          <div className="relative w-[280px] min-[1000px]:w-full h-[280px]  min-[1000px]:max-h-171.5 ">
            <img
              className="w-[280px] h-[280px] min-[1000px]:rounded-4xl w-full absolute  min-[1000px]:max-h-171.5 "
              src={cv4Image}
            ></img>
            <span className="w-[280px]">
              <img
                className="w-[280px] h-full min-[1000px]:w-full min-[1000px]:max-h-171.5 min-[1000px]:absolute  top-0 bg-[#bdb9b9] min-[1000px]:rounded-4xl min-[1000px]:hover:opacity-0 transition-all"
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
