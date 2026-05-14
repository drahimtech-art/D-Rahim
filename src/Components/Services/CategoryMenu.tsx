import { useState, useRef, useEffect } from "react";
function CategoryMenu() {
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
  return (
    <div className="pl-16 pr-16  ">
      {/** */}
      <div className="grid grid-cols-2   border-b-2 pt-10  pb-10 p-2.5 w-full">
        <span
          className="w-full flex  relative"
          onClick={() => setOptionOne(!optionOne)}
        >
          <h5 className=" serviceMenuText font-inter font-medium">
            Digital Product Design
          </h5>
        </span>
        <span className="ml-20 mt-5">
          <span className=" flex " onClick={() => setOptionOne(!optionOne)}>
            {optionOne ? (
              <i
                className=" fas fa-angle-up ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionOne(!optionOne)}
              ></i>
            ) : (
              <i
                className=" fas fa-angle-down  ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionOne(!optionOne)}
              ></i>
            )}
          </span>
          <div className="relative">
            <div className=" w-86.77 " ref={dropdownMenuRef1}>
              <span className="font-inter font-medium  logoMainText flex flex-col gap-2.5">
                <h5>Market & User Research</h5>
                <h5> Product Strategy & Road Mapping </h5>
                <h5>UI/UX Design</h5>
                <h5> UX Writing</h5> <h5>Design Systems</h5>{" "}
                <h5>User Testing</h5>
                <span className="w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]">
                  <h5>Discover all services we provide </h5>
                </span>
              </span>
            </div>
          </div>
        </span>
      </div>
      {/** */}
      <div className="grid grid-cols-2  border-b-2 pt-10  pb-10 p-2.5">
        <span className="w-full " onClick={() => setOptionTwo(!optionTwo)}>
          <h5 className="serviceMenuText font-inter font-medium">
            Website Design
          </h5>
        </span>
        <span className="ml-20 mt-5 ">
          <span className="flex" onClick={() => setOptionTwo(!optionTwo)}>
            {optionTwo ? (
              <i
                className=" fas fa-angle-up ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionTwo(!optionTwo)}
              ></i>
            ) : (
              <i
                className=" fas fa-angle-down  ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionTwo(!optionTwo)}
              ></i>
            )}
          </span>

          <div className="relative">
            <div
              className="block w-86.77 dropDownMenuAnimation"
              ref={dropdownMenuRef2}
            >
              <span className="font-inter font-medium  logoMainText flex flex-col gap-2.5">
                <h5>Web Design</h5>
                <h5> Development & Testing</h5>
                <h5>Launch & Maintenace</h5>
                <span className="w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]">
                  <h5>Discover all services we provide </h5>
                </span>
              </span>
            </div>
          </div>
        </span>
      </div>
      {/** */}
      <div className="grid grid-cols-2   border-b-2 pt-10  pb-10 p-2.5 w-full">
        <span className="w-full" onClick={() => setOptionThree(!optionThree)}>
          <h5 className="serviceMenuText font-inter font-medium">Branding</h5>
        </span>
        <span className="ml-20 mt-5">
          <span className=" flex" onClick={() => setOptionThree(!optionThree)}>
            {optionThree ? (
              <i
                className=" fas fa-angle-up ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionThree(!optionThree)}
              ></i>
            ) : (
              <i
                className=" fas fa-angle-down ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionThree(!optionThree)}
              ></i>
            )}
          </span>
          {optionThree && (
            <div className=" w-86.77">
              <span className="font-inter font-medium  logoMainText flex flex-col gap-2.5">
                <h5>Visual Audit</h5>
                <h5> Logo & Visual Identity </h5>
                <h5>UI/UX Design</h5>
                <h5> Guidelines & Brandbooks</h5> <h5>Graphic Design</h5>{" "}
                <h5>Motio Design</h5>
                <span className="w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]">
                  <h5>Discover all services we provide </h5>
                </span>
              </span>
            </div>
          )}
        </span>
      </div>
      {/** */}
      <div className="grid grid-cols-2   border-b-2  pt-10  pb-10 p-2.5 w-full">
        <span className="w-full" onClick={() => setOptionFour(!optionFour)}>
          <h5 className="serviceMenuText font-inter font-medium">
            Development
          </h5>
        </span>
        <span className="ml-20 mt-5">
          <span className=" flex" onClick={() => setOptionThree(!optionThree)}>
            {optionFour ? (
              <i
                className=" fas fa-angle-up ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionFour(!optionFour)}
              ></i>
            ) : (
              <i
                className=" fas fa-angle-down  ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionFour(!optionFour)}
              ></i>
            )}
          </span>
          {optionFour && (
            <div className=" w-86.77">
              <span className="font-inter font-medium  logoMainText flex flex-col gap-4.5">
                <h5>Technology Consulting</h5>
                <h5> Mobile App Development </h5>
                <h5>Frontend Web Development</h5>
                <h5> Backend Development</h5> <h5>Quality Assurance</h5>
                <span className="w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]">
                  <h5>Discover all services we provide </h5>
                </span>
              </span>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
export default CategoryMenu;
