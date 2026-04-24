import { useRef, useState } from "react";
import products from "../Products";
import CardList from "../Home/CardList";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
};
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
  return (
    <>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:mt-30 mt-10">
        <span className="block">
          <h5 className="text-[80px] font-size-heading font-semibold">
            Our Work
          </h5>
        </span>
      </div>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 flex mt-15 gap-9.5 w-full overflow-x-auto pb-2 ">
        <span
          className="w-48.75 pl-7.5 pr-7.5 p-1.5   h-12.5 font-inter  flex items-center text-[24px]  border-primary-green bg-primary-green  border   text-gray-200 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={projectRef}
          onClick={projectCliked}
        >
          <h5 className="">All Projects</h5>
        </span>
        <span
          className="w-57.25 pl-7.5 pr-7.5 p-1.5  h-12.5 font-inter text-[24px]     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={mDesignRef}
          onClick={mDesignCliked}
        >
          <h5>Moblie Design</h5>
        </span>
        <span
          className="w-61.25 pl-7.5 pr-7.5 p-1.5   h-12.5 font-inter text-[24px]   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={wDesignRef}
          onClick={wDesignCliked}
        >
          <h5>Website Design</h5>
        </span>
        <span
          className="w-41.75 pl-7.5 pr-7.5 p-1.5   h-12.5 font-inter text-[24px]   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={brandingRef}
          onClick={brandingCliked}
        >
          <h5>Branding</h5>
        </span>
      </div>
      <CardList body={ourWorkRender} />
      {ourWorkFirstRender && (
        <div className="flex justify-center gap-6 lg:mt-16 mt-8">
          <span className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full">
            <i className="fa fa-arrow-left text-gray-200 text-[1.2rem]"></i>
          </span>
          <span className="flex gap-4 self-center text-[1rem] lg:text-[1.2rem] text-gray-400 font-semibold">
            <h5 className="text-green-500">1</h5>
            <h5>2</h5>
            <h5>3</h5>
          </span>
          <span className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full">
            <i className="fa fa-arrow-right text-gray-200 text-[1.2rem]"></i>
          </span>
        </div>
      )}
    </>
  );
}
export default Category;
