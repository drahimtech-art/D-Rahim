import { useRef, useState, useEffect } from "react";
import { OurWorkApi } from "../../../../storage/OurWorkApi";
import CardList from "../Card/CardList";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
/*
type DesignType = {
  moblieDesign: OurWorkData[];
  websiteDesign: OurWorkData[];
  branding: OurWorkData[];
};
*/

function Category() {
  const ourWorkProjecData = OurWorkApi();
  const { listOfProjects, allRandomSelectedProjectInfo } = ourWorkProjecData;
  if (!allRandomSelectedProjectInfo) return;
  const projectRef = useRef<HTMLSpanElement | null>(null);
  const mDesignRef = useRef<HTMLSpanElement | null>(null);
  const wDesignRef = useRef<HTMLSpanElement | null>(null);
  const brandingRef = useRef<HTMLSpanElement | null>(null);
  const [ourWorkRender, setOurWorkRender] = useState<OurWorkData[]>([]);
  const [ourWorkFirstRender, setOurWorkFirstRender] = useState<boolean>(true);
  const [firstRenderCount, setFirstRenderCount] = useState<number>(1);
  const allProjectsAtRoundomPick = allRandomSelectedProjectInfo;
  const oneRef = useRef<HTMLHeadingElement | null>(null);
  const twoRef = useRef<HTMLHeadingElement | null>(null);
  const threeRef = useRef<HTMLHeadingElement | null>(null);
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  //
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
  function projectCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    projectRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    mDesignRef.current.classList.remove("text-gray-200");
    mDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove("text-gray-200");
    wDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove("text-gray-200");
    brandingRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    setOurWorkFirstRender(true);
    console.log(allProjectsAtRoundomPick[0]);
    return setOurWorkRender(allProjectsAtRoundomPick[0]);
  }
  function mDesignCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove("text-gray-200");
    projectRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove("text-gray-200");
    wDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove("text-gray-200");
    brandingRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    setOurWorkFirstRender(false);
    return setOurWorkRender(listOfProjects.moblieDesign);
  }
  function wDesignCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove("text-gray-200");
    projectRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.remove("text-gray-200");
    mDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove("text-gray-200");
    brandingRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    setOurWorkFirstRender(false);
    return setOurWorkRender(listOfProjects.websiteDesign);
  }
  function brandingCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove("text-gray-200");
    projectRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.remove("text-gray-200");
    mDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove("text-gray-200");
    wDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    setOurWorkFirstRender(false);
    return setOurWorkRender(listOfProjects.branding);
  }
  function countPlus() {
    if (firstRenderCount === 3) return;
    setFirstRenderCount((prevCount) => (prevCount += 1));
  }
  function countMinus() {
    if (firstRenderCount === 1) return;
    setFirstRenderCount((prevCount) => (prevCount -= 1));
  }
  useEffect(() => {
    if (!oneRef.current || !twoRef.current || !threeRef.current) return;
    switch (firstRenderCount) {
      case 1:
        threeRef.current.classList.remove("text-green-500");
        twoRef.current.classList.remove("text-green-500");
        oneRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(allProjectsAtRoundomPick[0]);
        })();
        break;
      case 2:
        threeRef.current.classList.remove("text-green-500");
        oneRef.current.classList.remove("text-green-500");
        twoRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(allProjectsAtRoundomPick[1]);
        })();
        break;
      case 3:
        oneRef.current.classList.remove("text-green-500");
        twoRef.current.classList.remove("text-green-500");
        threeRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(allProjectsAtRoundomPick[2]);
        })();
        break;
      default:
        break;
    }
  }, [firstRenderCount, ourWorkRender]);
  return (
    <>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:mt-30 mt-10">
        <span className="block">
          <h5 className="font-size-heading fontPoppins font-semibold">
            Our Work
          </h5>
        </span>
      </div>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:flex-row flex flex-col mt-10 lg:mt-15 lg:gap-9.5 gap-4  lg:max-w-full overflow-hidden pb-2 ">
        <span
          className="w-fit  p-2.5 pl-7.5 pr-7.5 flex  justify-center items-center   h-fit font-inter   ourWorkHeadMenu  border-primary-green bg-primary-green  border   text-gray-200 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={projectRef}
          onClick={projectCliked}
        >
          <h5 className="">All Projects</h5>
        </span>
        <span
          className="  w-fit  p-2.5 pl-7.5 pr-7.5  flex justify-center items-center  h-fit font-inter ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={mDesignRef}
          onClick={mDesignCliked}
        >
          <h5>Moblie Design</h5>
        </span>
        <span
          className="w-fit   p-2.5 pl-7.5 pr-7.5 flex justify-center items-center   h-fit font-inter ourWorkHeadMenu   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={wDesignRef}
          onClick={wDesignCliked}
        >
          <h5>Website Design</h5>
        </span>
        <span
          className="w-fit   p-2.5 pl-7.5 pr-7.5 flex justify-center items-center   h-fit font-inter ourWorkHeadMenu   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={brandingRef}
          onClick={brandingCliked}
        >
          <h5>Branding</h5>
        </span>
      </div>

      {devicesWidth !== undefined && devicesWidth >= 1000 ? (
        <CardList body={ourWorkRender} isPC={true} isMoblie={false} />
      ) : (
        <CardList body={ourWorkRender} isPC={false} isMoblie={true} />
      )}

      {ourWorkFirstRender && (
        <div className="hidden lg:flex justify-center gap-6 lg:mt-16 mt-8 ">
          <span
            className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full"
            onClick={countMinus}
          >
            <i className="fa fa-arrow-left text-gray-200 text-[1.2rem]"></i>
          </span>
          <span className="flex gap-4 self-center text-[1rem] lg:text-[1.2rem] text-gray-400 font-semibold">
            <h5 ref={oneRef}>1</h5>
            <h5 ref={twoRef}>2</h5>
            <h5 ref={threeRef}>3</h5>
          </span>
          <span
            className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full"
            onClick={countPlus}
          >
            <i className="fa fa-arrow-right text-gray-200 text-[1.2rem]"></i>
          </span>
        </div>
      )}
    </>
  );
}
export default Category;
