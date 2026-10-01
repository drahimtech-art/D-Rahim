import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CategoryMenu() {
  const urlNavigator = useNavigate();
  const [optionOne, setOptionOne] = useState<boolean>(true);
  const [optionTwo, setOptionTwo] = useState<boolean>(false);
  const [optionThree, setOptionThree] = useState<boolean>(false);
  const [optionFour, setOptionFour] = useState<boolean>(false);
  const dropdownMenuRef1 = useRef<HTMLDivElement | null>(null);
  const dropdownMenuRef2 = useRef<HTMLDivElement | null>(null);
  const dropdownMenuRef3 = useRef<HTMLDivElement | null>(null);
  const dropdownMenuRef4 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (
      !dropdownMenuRef1.current ||
      !dropdownMenuRef2.current ||
      !dropdownMenuRef3.current ||
      !dropdownMenuRef4.current
    )
      return;

    if (optionOne) {
      dropdownMenuRef1.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef1.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef1.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef1.current.classList.add("dropDownMenuAnimation");
    }
    if (optionTwo) {
      dropdownMenuRef2.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef2.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef2.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef2.current.classList.add("dropDownMenuAnimation");
    }
    if (optionThree) {
      dropdownMenuRef3.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef3.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef3.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef3.current.classList.add("dropDownMenuAnimation");
    }
    if (optionFour) {
      dropdownMenuRef4.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef4.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef4.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef4.current.classList.add("dropDownMenuAnimation");
    }
  }, [optionOne, optionTwo, optionThree, optionFour]);
  function toDiscoverAllServices() {
    const url = "/discover/all/services";
    urlNavigator(url, { replace: true });
  }
  return (
    <article className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 pointer">
      {/** */}
      <article
        className="   border-b-2 pt-10  pb-10 p-2.5 w-full"
        onClick={() => {
          setOptionOne(!optionOne);
          setOptionTwo(false);
          setOptionThree(false);
          setOptionFour(false);
        }}
      >
        <section className="flex items-center">
          <span className="w-full flex  relative">
            <h5 className=" serviceMenuText font-inter font-medium">
              Digital Product Design
            </h5>
          </span>
          <span className="ml-20  ">
            <span
              className=" flex "
              onClick={() => {
                setOptionOne(!optionOne);
                setOptionTwo(false);
                setOptionThree(false);
                setOptionFour(false);
              }}
            >
              {optionOne ? (
                <i className=" fas fa-angle-down rotate-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              ) : (
                <i className=" fa fa-angle-down rotate-up ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              )}
            </span>
          </span>
        </section>
        <section className="min-[1000px]:grid min-[1000px]:grid-cols-2   ">
          <div className="w-full min-[1000px]:block hidden"></div>
          <div
            className="min-[1000px]:ml-20 mt-5 min-[1000px]:mt-0 w-86.77 block "
            ref={dropdownMenuRef1}
          >
            <span className="font-inter font-medium  logoMainText flex flex-col gap-2.5 ">
              <h5>Market & User Research</h5>
              <h5> Product Strategy & Road Mapping </h5>
              <h5>UI/UX Design</h5>
              <h5> UX Writing</h5> <h5>Design Systems</h5> <h5>User Testing</h5>
              <span
                className="flex gap-2 w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]"
                onClick={toDiscoverAllServices}
              >
                <h5>Discover all services we provide </h5>
                <i className="fas fa-arrow-up  rotate-40"></i>
              </span>
            </span>
          </div>
        </section>
      </article>
      {/** */}
      <article
        className="   border-b-2 pt-10  pb-10 p-2.5 w-full"
        onClick={() => {
          setOptionTwo(!optionTwo);
          setOptionOne(false);
          setOptionThree(false);
          setOptionFour(false);
        }}
      >
        <section className="flex items-center">
          <span
            className="w-full flex  relative"
            onClick={() => {
              setOptionTwo(!optionTwo);
              setOptionOne(false);
              setOptionThree(false);
              setOptionFour(false);
            }}
          >
            <h5 className=" serviceMenuText font-inter font-medium">
              Website Design
            </h5>
          </span>
          <span className="ml-20  ">
            <span className=" flex ">
              {optionTwo ? (
                <i className=" fas fa-angle-down rotate-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              ) : (
                <i className=" fa fa-angle-down rotate-up ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              )}
            </span>
          </span>
        </section>
        <section className="min-[1000px]:grid min-[1000px]:grid-cols-2  ">
          <div className="w-full min-[1000px]:block hidden"></div>
          <div
            className="min-[1000px]:ml-20 mt-5 min-[1000px]:mt-0 w-86.77 block "
            ref={dropdownMenuRef2}
          >
            <span className=" font-inter font-medium  logoMainText flex flex-col gap-2.5 ">
              <h5>Web Design</h5>
              <h5> Development & Testing</h5>
              <h5>Launch & Maintenace</h5>
              <span
                className="flex gap-2 w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]"
                onClick={toDiscoverAllServices}
              >
                <h5>Discover all services we provide </h5>
                <i className="fas fa-arrow-up  rotate-40"></i>
              </span>
            </span>
          </div>
        </section>
      </article>
      {/** */}
      <article
        className="   border-b-2 pt-10  pb-10 p-2.5 w-full"
        onClick={() => {
          setOptionThree(!optionThree);
          setOptionOne(false);
          setOptionTwo(false);
          setOptionFour(false);
        }}
      >
        <section className="flex items-center">
          <span
            className="w-full flex  relative"
            onClick={() => {
              setOptionThree(!optionThree);
              setOptionOne(false);
              setOptionTwo(false);
              setOptionFour(false);
            }}
          >
            <h5 className=" serviceMenuText font-inter font-medium">
              Branding
            </h5>
          </span>
          <span className="ml-20  ">
            <span
              className=" flex "
              onClick={() => {
                setOptionThree(!optionThree);
                setOptionOne(false);
                setOptionTwo(false);
                setOptionFour(false);
              }}
            >
              {optionThree ? (
                <i className=" fas fa-angle-down rotate-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              ) : (
                <i className=" fa fa-angle-down rotate-up ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              )}
            </span>
          </span>
        </section>
        <section className="min-[1000px]:grid min-[1000px]:grid-cols-2  ">
          <div className="w-full min-[1000px]:block hidden"></div>
          <div
            className="min-[1000px]:ml-20 mt-5 min-[1000px]:mt-0 w-86.77 block "
            ref={dropdownMenuRef3}
          >
            <span className="font-inter font-medium  logoMainText flex flex-col gap-2.5 ">
              <h5>Visual Audit</h5>
              <h5> Logo & Visual Identity </h5>
              <h5>UI/UX Design</h5>
              <h5> Guidelines & Brandbooks</h5> <h5>Graphic Design</h5>{" "}
              <h5>Motio Design</h5>
              <span
                className="flex gap-2 w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]"
                onClick={toDiscoverAllServices}
              >
                <h5>Discover all services we provide </h5>
                <i className="fas fa-arrow-up  rotate-40"></i>
              </span>
            </span>
          </div>
        </section>
      </article>
      {/** */}
      <article
        className="   border-b-2 pt-10  pb-10 p-2.5 w-full"
        onClick={() => {
          setOptionFour(!optionFour);
          setOptionOne(false);
          setOptionTwo(false);
          setOptionOne(false);
        }}
      >
        <section className="flex items-center">
          <span
            className="w-full flex  relative"
            onClick={() => {
              setOptionFour(!optionFour);
              setOptionOne(false);
              setOptionTwo(false);
              setOptionOne(false);
            }}
          >
            <h5 className=" serviceMenuText font-inter font-medium">
              Development
            </h5>
          </span>
          <span className="ml-20  ">
            <span
              className=" flex "
              onClick={() => {
                setOptionFour(!optionFour);
                setOptionOne(false);
                setOptionTwo(false);
                setOptionOne(false);
              }}
            >
              {optionFour ? (
                <i className=" fas fa-angle-down rotate-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              ) : (
                <i className=" fa fa-angle-down rotate-up ml-auto lg:text-[2rem] text-[1.2rem]"></i>
              )}
            </span>
          </span>
        </section>
        <section className="min-[1000px]:grid min-[1000px]:grid-cols-2  ">
          <div className="w-full min-[1000px]:block hidden"></div>
          <div
            className="min-[1000px]:ml-20 mt-5 min-[1000px]:mt-0 w-86.77 block "
            ref={dropdownMenuRef4}
          >
            <span className="font-inter font-medium  logoMainText flex flex-col gap-4.5 ">
              <h5>Technology Consulting</h5>
              <h5> Mobile App Development </h5>
              <h5>Frontend Web Development</h5>
              <h5> Backend Development</h5> <h5>Quality Assurance</h5>
              <span
                className="flex gap-2 w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]"
                onClick={toDiscoverAllServices}
              >
                <h5>Discover all services we provide </h5>
                <i className="fas fa-arrow-up  rotate-40"></i>
              </span>
            </span>
          </div>
        </section>
      </article>
    </article>
  );
}
export default CategoryMenu;
