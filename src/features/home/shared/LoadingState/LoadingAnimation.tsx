import { useEffect } from "react";
import appLogo from "/images/logo.png";
function LoadingAnimation(): React.ReactElement {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <article className="w-full h-screen max-h-screen bg-[#004A3C] font-bold text-2xl top-0 fixed z-50">
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col gap-4 ">
          <div className=" relative w-[161px] h-[161px]">
            <div className="w-[161px] h-[161px]  relative animation-180deg ">
              {/**top 12 oclock*/}
              <span className="w-[48px] h-1.5 bg-white block rounded-full absolute top-0 m-0 left-[35%] mt-4 rotate-90"></span>
              {/**bottom 6 oclock*/}
              <span className="w-[48px] h-1.5 bg-white block rounded-full absolute bottom-0 m-0 mb-4 left-[35%] rotate-90"></span>
              {/**left 9 oclock */}
              <span className="w-[48px] h-1.5 bg-white block rounded-full absolute top-[48%] m-0 -ml-1"></span>
              {/**left 10:30 oclcok */}
              <span className="w-[60px] h-1.5  block rounded-full absolute top-[20%] m-0  left-0 rotate-45">
                <span className="ml-auto w-[52px] h-1.5 bg-white block rounded-full "></span>
              </span>
              {/**right 3 oclcok */}
              <span className="w-[48px] h-1.5 bg-white block rounded-full absolute top-[48%] m-0 right-0 -mr-1"></span>
              {/**right 1:30 oclcok */}
              <span className="w-[60px] h-1.5  block rounded-full absolute top-[20%] m-0  right-0 -rotate-45">
                <span className="w-[52px] h-1.5 bg-white block rounded-full "></span>
              </span>
              {/**left 7:30 oclcok */}
              <span className="w-[62px] h-1.5  block rounded-full absolute bottom-0 m-0 mb-7 left-0 -rotate-45">
                <span className="ml-auto w-[52px] h-1.5 bg-white block rounded-full "></span>
              </span>
              {/**right 4:30 oclcok */}
              <span className="w-[62px] h-1.5  block rounded-full absolute bottom-0 m-0 mb-7 right-0 rotate-45">
                <span className="mr-auto w-[52px] h-1.5 bg-white block rounded-full "></span>
              </span>
            </div>
            {/**logo and text content */}
            <div className="w-full h-full  absolute top-0 flex justify-center items-center">
              <div className=" w-[35%] h-[35%] flex justify-center items-center">
                <img className="w-fit h-fit" src={appLogo}></img>
              </div>
            </div>
          </div>
          <h5 className="text-center mt-[5px] text-white min20Max24px font-inter font-normal">
            Just a moment…
          </h5>
        </div>
      </section>
    </article>
  );
}
export default LoadingAnimation;
