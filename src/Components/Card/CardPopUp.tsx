import { useRef, useEffect } from "react";
import image0 from "/images/0.png";
type Body = {
  control: boolean;
  setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
function CardPopUp(props: Body) {
  const isPopUpVisible = props.control;
  const backGroundRef = useRef<HTMLDivElement | null>(null);
  const popUpCardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!backGroundRef.current || !popUpCardRef.current) return;
    if (isPopUpVisible) {
      backGroundRef.current.classList.remove("pointer-none");
      backGroundRef.current.classList.add("pointer");
      backGroundRef.current.classList.add("animate-fade-in");
      popUpCardRef.current.classList.add("animate-pop-in");
      document.body.style.overflow = "hidden";
    } else {
      backGroundRef.current.classList.remove("animate-fade-in");
      popUpCardRef.current.classList.remove("animate-pop-in");
      backGroundRef.current.classList.add("pointer-none");
      backGroundRef.current.classList.remove("pointer");
      document.body.style.overflow = "";
    }
  }, [isPopUpVisible]);
  return (
    <div
      className="hidden lg:flex w-full   min-h-screen fitPopUpCard absolute inset-0 z-50 max-[2000px]:ml-auto max-[2000px]:mr-auto max-w-450 items-center justify-center p-5 pl-16 pr-16  "
      ref={backGroundRef}
    >
      <div
        className=" w-full h-full relative overflow-hidden pl-5 pt-10  pr-5 rounded-4xl bg-white opacity-0  "
        ref={popUpCardRef}
      >
        <div className=" overflow-y-scroll w-full h-full scroll-container pr-5 ">
          <div className="flex items-center">
            <h2 className="font-inter font-medium cardPopUpFontSize">
              Project Details
            </h2>
            <div className="relative ">
              <span
                className="fixed z-10 right-22  -mt-4 w-fit h-fit pt-1 pl-0.5 pr-0.5 pb-1 bg-gray-100 rounded-full"
                onClick={() => props.setIsPopUpVisible((prevSate) => !prevSate)}
              >
                <i className="fa fa-xmark text-[2rem] pointer"></i>
              </span>
            </div>
          </div>
          <div className="mt-4.25">
            <h5 className="fontPoppins font-semibold cardPopUpSubHeadFontSize">
              Creating pathways of hope, support, and sustainable change for
              underserved communities.
            </h5>
            <span className="block w-full h-172">
              <img
                src={image0}
                alt="Project Image"
                className="w-full h-full "
              />
            </span>
          </div>
          <div className=" mt-23.75 pl-5 pr-5">
            <div className="flex gap-41 ">
              <span className="flex flex-col w-51.5 ">
                <span>
                  <h5 className="font-inter font-medium text-[30px]">
                    Capabilities
                  </h5>
                  <h5 className=" font-inter w-51.5 font-normal text-[20px]">
                    Community Support Humanitarian Aid Education Programs
                  </h5>
                </span>
              </span>
              {/** */}
              <span className="flex flex-col w-53.5 ">
                <span className="">
                  <h5 className="font-inter font-medium text-[30px]">Team</h5>
                  <h5 className=" font-inter  font-normal text-[20px] line-clamp-3">
                    Program Coordinator Volunteers Community Leaders
                  </h5>
                </span>
              </span>
              {/** */}
              <span className="flex flex-col w-53.5">
                <span className="">
                  <h5 className="font-inter font-medium text-[30px]">
                    Industry
                  </h5>
                  <h5 className=" font-inter font-normal text-[20px] ">
                    Non-profit Organization Humanitarian Services
                  </h5>
                </span>
              </span>
            </div>
            <div className="flex gap-41 mt-10">
              <span className="w-51.5 ">
                <h5 className="font-inter font-medium text-[30px]">Duration</h5>
                <h5 className=" font-inter font-normal text-[20px]">3months</h5>
              </span>
              <span className="w-53.5">
                <h5 className="font-inter font-medium text-[30px]">Location</h5>
                <h5 className="w-51.5 font-inter font-normal text-[20px]">
                  Nigeria
                </h5>
              </span>
            </div>
            <div className="mt-13 pb-20">
              <h5 className="font-inter font-normal text-[20.87px] w-238.5 ">
                Alhafeez foundation is a non-profit organization dedicated to
                providing support, resources, and opportunities to underserved
                communities through sustainable initiatives.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardPopUp;
