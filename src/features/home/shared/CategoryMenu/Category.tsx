import { useRef, useState, useEffect } from "react";
import { OurWorkApi } from "../../../../storage/OurWorkApi";
import mobileProducts from "../../../../Components/MobileProducts";
import products from "../../../../Components/Products";
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
type DesignType = {
  moblieDesign: OurWorkData[];
  websiteDesign: OurWorkData[];
  branding: OurWorkData[];
};

function Category() {
  const ourWorkProjecData = OurWorkApi();
  //const { listOfProjects } = ourWorkProjecData;
  const projectRef = useRef<HTMLSpanElement | null>(null);
  const mDesignRef = useRef<HTMLSpanElement | null>(null);
  const wDesignRef = useRef<HTMLSpanElement | null>(null);
  const brandingRef = useRef<HTMLSpanElement | null>(null);

  const [ourWorkRender, setOurWorkRender] = useState<OurWorkData[]>([]);
  const [ourWorkFirstRender, setOurWorkFirstRender] = useState<boolean>(true);
  const [firstRenderCount, setFirstRenderCount] = useState<number>(1);
  const [allProjectsAtRoundomPick, setAllProjectAtRandomPick] = useState<
    OurWorkData[][]
  >([]);
  const listOfProjects: DesignType = products();
  const oneRef = useRef<HTMLHeadingElement | null>(null);
  const twoRef = useRef<HTMLHeadingElement | null>(null);
  const threeRef = useRef<HTMLHeadingElement | null>(null);
  const [allProductsMoblie, setAllProductsMoblie] = useState<OurWorkData[]>();
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  //get all projects after projects has been gotten
  useEffect(() => {
    console.log(listOfProjects);
    const moblieDesign = listOfProjects.moblieDesign;
    const websiteDesign = listOfProjects.websiteDesign;
    const branding = listOfProjects.branding;
    if (
      moblieDesign.length === 0 ||
      websiteDesign.length === 0 ||
      branding.length === 0
    )
      return;
    const allProjects: OurWorkData[][] = [];
    let guessedList: number[] = []; // guessedList could only be guessed at 3 counts 0, 1, 2, as 0 = moblieDesign, 1 = websiteDesign, 2 = branding
    const indexPickedInMoblieDesign: number[] = [];
    const indexPickedInWebSiteDesign: number[] = [];
    const indexPickedInBranding: number[] = [];
    while (allProjects.length < 3) {
      // while allProjects is not index on 3 counts loop
      let count = 0; // full (3) index count that makes on allProjects index; 3 count = 1 allProjects index
      let guessNumber; // guessNumber
      const filteringList: OurWorkData[] = []; // list of getted values to make one full allProjects index list length can be below 6 to make one full index
      function getFullList() {
        do {
          //guess a random number between 0 - 2
          const firstGuess = Math.floor(Math.random() * 3);
          guessNumber = firstGuess;
        } while (guessedList.includes(guessNumber)); // compare guessed number to guessed list since guessed list can only be 0, 1, 2, we guess in the range that hassent been guessed
        guessedList.push(guessNumber);
        console.log(guessedList);
        function getRandeomIndex(
          counter: number,
          sltIndex: number | undefined,
          list: OurWorkData[],
          sltIndexInList: number[],
        ) {
          console.log("before pass", counter, sltIndex);
          const index = Math.floor(Math.random() * list.length);
          if (sltIndexInList.includes(index))
            return (
              console.log("return", sltIndex, counter),
              getRandeomIndex(counter, sltIndex, list, sltIndexInList)
            );
          sltIndex = index;
          counter += 1;
          sltIndexInList.push(index);
          console.log("pass", counter, sltIndex);
          const item = list[index];
          filteringList.push(item);
          if (counter !== 2) {
            console.log("recall");
            getRandeomIndex(counter, sltIndex, list, sltIndexInList);
          }
        }
        if (guessNumber === 0 && moblieDesign.length !== 0) {
          // if guess number is 0 which 0 = moblie desgin; get values from moblie design
          // moblieDesign
          let selectedIndex: number | undefined; // selected index which is used as a closure selected index keeps recored of number guessed in moble design to pick value as to avoid deplicated value in one full allProjects index (1)
          let count = 0; // count which at as a breaker to exit the closure loop which is range 0 -1
          getRandeomIndex(
            count,
            selectedIndex,
            moblieDesign,
            indexPickedInMoblieDesign,
          );
        } else if (guessNumber === 1 && websiteDesign.length !== 0) {
          // websiteDesign
          let selectedIndex: number | undefined; // selected index which is used as a closure selected index keeps recored of number guessed in website design to pick value as to avoid deplicated value in one full allProjects index (1)
          let count = 0; // count which at as a breaker to exit the closure loop which is range 0 -1
          getRandeomIndex(
            count,
            selectedIndex,
            websiteDesign,
            indexPickedInWebSiteDesign,
          );
        } else if (guessNumber === 2 && branding.length !== 0) {
          // branding
          let selectedIndex: number | undefined; // selected index which is used as a closure selected index keeps recored of number guessed in branding to pick value as to avoid deplicated value in one full allProjects index (1)
          let count = 0; // count which at as a breaker to exit the closure loop which is range 0 -1
          getRandeomIndex(
            count,
            selectedIndex,
            branding,
            indexPickedInBranding,
          );
        }
        count += 1;
      }
      while (count < 3) {
        getFullList();
      }
      ((guessedList = []), allProjects.push(filteringList));
    }
    console.log(indexPickedInMoblieDesign);
    console.log(indexPickedInWebSiteDesign);
    console.log(indexPickedInBranding);
    console.log(allProjects);
    setAllProjectAtRandomPick(allProjects);
  }, []);
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
    setAllProductsMoblie([]);
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
    setAllProductsMoblie([]);
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
    setAllProductsMoblie([]);
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
    setAllProductsMoblie([]);
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
        <CardList body={allProductsMoblie} isPC={false} isMoblie={true} />
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
