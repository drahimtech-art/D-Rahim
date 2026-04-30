import { useRef, useState, useEffect } from "react";
import products from "../Products";
import CardList from "../Home/CardList";
import image0 from "/images/10.png";
import image1 from "/images/11.png";
import image2 from "/images/8.png";
import image3 from "/images/14.png";
import image4 from "/images/13.png";
import image5 from "/images/17.png";
import image6 from "/images/6.png";
import image7 from "/images/9.png";
import image8 from "/images/12.png";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
};
const countData = [
  [
    {
      image: image0,
      text: "Website Design 🇳🇬",
    },
    {
      image: image1,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image2,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image3,
      text: "Website Design 🇳🇬",
    },
    {
      image: image4,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image5,
      text: "Branding 🇳🇬",
    },
  ],
  [
    {
      image: image6,
      text: "Branding 🇳🇬",
    },
    {
      image: image7,
      text: "Website Design 🇳🇬",
    },
    {
      image: image8,
      text: "Mobile Design 🇳🇬",
    },
  ],
];
function Category() {
  const projectRef = useRef<HTMLSpanElement | null>(null);
  const mDesignRef = useRef<HTMLSpanElement | null>(null);
  const wDesignRef = useRef<HTMLSpanElement | null>(null);
  const brandingRef = useRef<HTMLSpanElement | null>(null);
  const ourWorkData: Array<OurWorkData[]> = products();
  const [ourWorkRender, setOurWorkRender] = useState<OurWorkData[]>(
    ourWorkData[0],
  );
  const [ourWorkFirstRender, setOurWorkFirstRender] = useState<boolean>(true);
  const [firstRenderCount, setFirstRenderCount] = useState<number>(1);
  const oneRef = useRef<HTMLHeadingElement>(null);
  const twoRef = useRef<HTMLHeadingElement>(null);
  const threeRef = useRef<HTMLHeadingElement>(null);
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
    return setOurWorkRender(ourWorkData[0]);
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
    return setOurWorkRender(ourWorkData[1]);
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
    return setOurWorkRender(ourWorkData[2]);
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
    return setOurWorkRender(ourWorkData[3]);
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
          setOurWorkRender(ourWorkData[0]);
        })();
        break;
      case 2:
        threeRef.current.classList.remove("text-green-500");
        oneRef.current.classList.remove("text-green-500");
        twoRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(countData[0]);
        })();
        break;
      case 3:
        oneRef.current.classList.remove("text-green-500");
        twoRef.current.classList.remove("text-green-500");
        threeRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(countData[1]);
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
          <h5 className="font-size-heading  font-semibold">Our Work</h5>
        </span>
      </div>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 sm:flex-row flex flex-col mt-15 lg:gap-9.5 gap-4 w-full overflow-hidden pb-2 ">
        <span
          className="w-[30%] max-w-57.25 sm:pl-7.5  pl-4 flex justify-start items-center   h-12.5 font-inter   ourWorkHeadMenu  border-primary-green bg-primary-green  border   text-gray-200 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={projectRef}
          onClick={projectCliked}
        >
          <h5 className="">All Projects</h5>
        </span>
        <span
          className="  w-[30%] max-w-57.25 flex justify-center items-center  h-12.5 font-inter ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={mDesignRef}
          onClick={mDesignCliked}
        >
          <h5>Moblie Design</h5>
        </span>
        <span
          className="w-[30%] max-w-61.25 flex justify-center items-center   h-12.5 font-inter ourWorkHeadMenu   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={wDesignRef}
          onClick={wDesignCliked}
        >
          <h5>Website Design</h5>
        </span>
        <span
          className="w-[30%] max-w-41.75 flex justify-center items-center   h-12.5 font-inter ourWorkHeadMenu   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={brandingRef}
          onClick={brandingCliked}
        >
          <h5>Branding</h5>
        </span>
      </div>
      <CardList body={ourWorkRender} />
      {ourWorkFirstRender && (
        <div className="flex justify-center gap-6 lg:mt-16 mt-8">
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
