import { useRef, useEffect } from "react";
type Body = {
  control: boolean;
  setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
  body: BodyContent;
};
type BodyContent = {
  popHeadText: string;
  imageUrl: string;
  imageText: string;
  subText?: string;
  popUpHeadding: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
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
      className="hidden lg:flex w-full popUpCardWideViewCenter  h-screen fitPopUpCard fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  inset-0  z-50   items-center justify-center p-7 pl-16 pr-16  "
      ref={backGroundRef}
    >
      <div className="max-w-450 h-full top-[50%]">
        <div
          className=" w-full h-full relative  overflow-hidden pl-5 pt-12  pr-5 rounded-4xl bg-white opacity-0  "
          ref={popUpCardRef}
        >
          <div className=" overflow-y-scroll w-full h-full scroll-container pr-5 ">
            <div className="flex items-center">
              <h2 className="font-inter font-medium cardPopUpFontSize">
                {props.body.popHeadText}
              </h2>
              <div className="relative ">
                <div className="fixed z-10 right-22  -mt-4 ">
                  <span
                    className="w-fit h-fit pt-4 pb-1 pl-0.5 pr-0.5 bg-[#ece8e833] rounded-full"
                    onClick={() =>
                      props.setIsPopUpVisible((prevSate) => !prevSate)
                    }
                  >
                    <i className="fa fa-xmark text-[2rem] font-light pointer"></i>
                  </span>
                  <span
                    className="absolute -ml-12 mt-7 opacity-0 hover:opacity-100 transition-all"
                    onClick={() =>
                      props.setIsPopUpVisible((prevSate) => !prevSate)
                    }
                  >
                    <span>
                      <h5 className="text-[20px] mt-2 font-inter">Close</h5>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4.25">
              <h5 className="fontPoppins font-semibold cardPopUpSubHeadFontSize">
                {props.body?.popUpHeadding}
              </h5>
              <span className="block w-full h-172">
                <img
                  src={props.body.imageUrl}
                  alt="Project Image"
                  className="w-full h-full "
                />
              </span>
            </div>
            <div className=" mt-23.75 pl-10 pr-10">
              <div className="flex gap-41 ">
                <span className="flex flex-col w-60 ">
                  <span>
                    <h5 className="font-inter font-medium text-[30px]">
                      Capabilities
                    </h5>
                    {props.body.capabilities.map((e, i) => {
                      return (
                        <h5
                          className=" font-inter  font-normal text-[20px]"
                          key={`capabilities-key-${i}`}
                        >
                          {e}
                        </h5>
                      );
                    })}
                  </span>
                </span>
                {/** */}
                <span className="flex flex-col  ">
                  <span className="">
                    <h5 className="font-inter font-medium text-[30px]">Team</h5>
                    {props.body.team.map((e, i) => {
                      return (
                        <h5
                          className=" font-inter  font-normal text-[20px] line-clamp-3"
                          key={`team-key-${i}`}
                        >
                          {e}
                        </h5>
                      );
                    })}
                  </span>
                </span>
                {/** */}
                <span className="flex flex-col ">
                  <span className="">
                    <h5 className="font-inter font-medium text-[30px]">
                      Industry
                    </h5>
                    {props.body.industry.map((e, i) => {
                      return (
                        <h5
                          className=" font-inter font-normal text-[20px] "
                          key={`industry-key-${i}`}
                        >
                          {e}
                        </h5>
                      );
                    })}
                  </span>
                </span>
              </div>
              <div className="flex gap-41 mt-10">
                <span className="w-60 ">
                  <h5 className="font-inter font-medium text-[30px]">
                    Duration
                  </h5>
                  <h5 className=" font-inter font-normal text-[20px]">
                    {props.body.duration}
                  </h5>
                </span>
                <span className="w-53.5 ">
                  <h5 className="font-inter font-medium text-[30px]">
                    Location
                  </h5>
                  <h5 className="w-51.5 font-inter font-normal text-[20px]">
                    {props.body.location}
                  </h5>
                </span>
              </div>
              <div className="mt-13 pb-20">
                <h5 className="font-inter font-normal text-[20.87px] w-238.5 ">
                  {props.body.endText}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardPopUp;
