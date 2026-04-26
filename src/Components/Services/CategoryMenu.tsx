import { useState } from "react";
function CategoryMenu() {
  const [optionOne, setOptionOne] = useState<boolean>(true);
  const [optionTwo, setOptionTwo] = useState<boolean>(false);
  const [optionThree, setOptionThree] = useState<boolean>(false);
  const [optionFour, setOptionFour] = useState<boolean>(false);
  return (
    <div className="pl-16 pr-16  ">
      {/** */}
      <div className="grid grid-cols-2   border-b-2 pt-10  pb-10 p-2.5 w-full">
        <span className="w-full">
          <h5 className="text-[50px] font-inter font-medium">
            Digital Product Design
          </h5>
        </span>
        <span className=" ml-20">
          <span className=" flex">
            {optionOne ? (
              <i
                className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionOne(!optionOne)}
              ></i>
            ) : (
              <i
                className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionOne(!optionOne)}
              ></i>
            )}
          </span>
          {optionOne && (
            <div className=" w-86.77">
              <span className="font-inter font-medium  text-[20px] flex flex-col gap-2.5">
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
          )}
        </span>
      </div>
      {/** */}
      <div className="grid grid-cols-2  border-b-2 pt-10  pb-10 p-2.5">
        <span className="w-full">
          <h5 className="text-[50px] font-inter font-medium">Website Design</h5>
        </span>
        <span className="ml-20 ">
          <span className="flex">
            {optionTwo ? (
              <i
                className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionTwo(!optionTwo)}
              ></i>
            ) : (
              <i
                className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionTwo(!optionTwo)}
              ></i>
            )}
          </span>

          {optionTwo && (
            <div className="  w-86.77">
              <span className="font-inter font-medium  text-[20px] flex flex-col gap-2.5">
                <h5>Web Design</h5>
                <h5> Development & Testing</h5>
                <h5>Launch & Maintenace</h5>
                <span className="w-fit mt-9 pt-0.5 pb-0.5 border-b-2 border-black font-inter font-bold text-[18px]">
                  <h5>Discover all services we provide </h5>
                </span>
              </span>
            </div>
          )}
        </span>
      </div>
      {/** */}
      <div className="grid grid-cols-2   border-b-2 pt-10  pb-10 p-2.5 w-full">
        <span className="w-full">
          <h5 className="text-[50px] font-inter font-medium">Branding</h5>
        </span>
        <span className=" ml-20">
          <span className=" flex">
            {optionThree ? (
              <i
                className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionThree(!optionThree)}
              ></i>
            ) : (
              <i
                className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionThree(!optionThree)}
              ></i>
            )}
          </span>
          {optionThree && (
            <div className=" w-86.77">
              <span className="font-inter font-medium  text-[20px] flex flex-col gap-2.5">
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
        <span className="w-full">
          <h5 className="text-[50px] font-inter font-medium">Development</h5>
        </span>
        <span className=" ml-20">
          <span className=" flex">
            {optionFour ? (
              <i
                className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionFour(!optionFour)}
              ></i>
            ) : (
              <i
                className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"
                onClick={() => setOptionFour(!optionFour)}
              ></i>
            )}
          </span>
          {optionFour && (
            <div className=" w-86.77">
              <span className="font-inter font-medium  text-[20px] flex flex-col gap-4.5">
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
