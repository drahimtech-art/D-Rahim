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
      <div className="pl-10 pr-10 mt-30 mb-27.25">
        <span className="flex flex-col gap-10">
          <h5 className="font-Poppins font-semibold text-[60px]">
            Tailored Solutions for Startups
          </h5>
          <h5 className="font-inter font-medium text-[24px] w-174.75">
            We’re passionate about building young digital products and
            understand that time is critical when so much is at stake. That’s
            why we offer practical service packages to help you move forward
            without delays.
          </h5>
        </span>
      </div>
      <div className="pl-10 pr-10 mt-20">
        <div className="flex gap-10 justify-around">
          <div className="relative w-75.75  max-h-75.75 ">
            <img
              className="rounded-4xl w-full 75.75 max-h-75.75 "
              src={cv1Image}
            ></img>
            <span className="">
              <img
                className="75.75 max-h-171.5 absolute  top-0 bg-black rounded-4xl hover:hidden transition-all"
                src={cv1}
              ></img>
            </span>
          </div>
          <div className="relative w-75.75   max-h-75.75 ">
            <img
              className="rounded-4xl 75.75 max-h-75.75 "
              src={cv2Image}
            ></img>
            <span className="">
              <img
                className="75.75 max-h-171.5 absolute  top-0 bg-black rounded-4xl hover:hidden transition-all"
                src={cv2}
              ></img>
            </span>
          </div>
          <div className="relative w-75.75  max-h-75.75 ">
            <img
              className="rounded-4xl w-full max-h-75.75 "
              src={cv3Image}
            ></img>
            <span className="">
              <img
                className="w-full max-h-171.5 absolute  top-0 bg-black rounded-4xl hover:hidden transition-all"
                src={cv3}
              ></img>
            </span>
          </div>
          <div className="relative w-75.75  max-h-75.75 ">
            <img className="rounded-4xl   max-h-75.75 " src={cv4Image}></img>
            <span className="">
              <img
                className=" max-h-171.5 absolute  top-0 bg-black rounded-4xl hover:hidden transition-all"
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
