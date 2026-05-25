import { useState, useEffect, useRef } from "react";
function FAQ() {
  const [option1, setOption1] = useState<boolean>(false);
  const [option2, setOption2] = useState<boolean>(false);
  const [option3, setOption3] = useState<boolean>(false);
  const [option4, setOption4] = useState<boolean>(false);
  const dropdownMenuRef1 = useRef<HTMLSpanElement | null>(null);
  const dropdownMenuRef2 = useRef<HTMLSpanElement | null>(null);
  const dropdownMenuRef3 = useRef<HTMLSpanElement | null>(null);
  const dropdownMenuRef4 = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (
      !dropdownMenuRef1.current ||
      !dropdownMenuRef2.current ||
      !dropdownMenuRef3.current ||
      !dropdownMenuRef4.current
    )
      return;
    if (option1) {
      dropdownMenuRef1.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef1.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef1.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef1.current.classList.add("dropDownMenuAnimation");
    }
    if (option2) {
      dropdownMenuRef2.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef2.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef2.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef2.current.classList.add("dropDownMenuAnimation");
    }
    if (option3) {
      dropdownMenuRef3.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef3.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef3.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef3.current.classList.add("dropDownMenuAnimation");
    }
    if (option4) {
      dropdownMenuRef4.current.classList.remove("dropDownMenuAnimation");
      dropdownMenuRef4.current.classList.add("dropDownMenuAnimation-open");
    } else {
      dropdownMenuRef4.current.classList.remove("dropDownMenuAnimation-open");
      dropdownMenuRef4.current.classList.add("dropDownMenuAnimation");
    }
  }, [option1, option2, option3, option4]);
  return (
    <div className=" min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 flex flex-col -mb-20 mt-10 w-full ">
      <span className="block">
        <h5 className=" font-semibold fontPoppins min-[1000px]:font-inter min40Max60px">
          Frequently Asked Questions
        </h5>
      </span>
      <div className="flex flex-col mt-5 sm:mt-15 sm:mb-15 mb-27.5 pointer">
        <span
          className="flex flex-col pt-2 pb-2 border-t-2 border-b-2 transition-all"
          onClick={() => setOption1(!option1)}
        >
          <span className="flex justify-start items-center  pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className=" font-inter min24Max35px sm:max-w-75.75 min-[1000px]:min-w-full min-[1000px]:max-w-full  font-medium">
              What makes your digital product design services stand out from
              competitors?
            </h5>
            {!option1 ? (
              <i className=" fas fa-angle-down ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            ) : (
              <i className=" fa fa-angle-up ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            )}
          </span>
          <div className="relative ">
            <span
              className="block font-inter font-medium  min-[1000px]:font-normal min-[1000px]:text-[1.5rem] text-[1.3rem]   sm:pt-10  pt-3 sm:pb-10 pb-3 pl-3 sm:pl-0 dropDownMenuAnimation"
              ref={dropdownMenuRef1}
            >
              <h5>
                Quality design, data-driven solutions, and reliability. For the
                past three years, we've delivered high-quality digital product
                and UX design services. Backed by a skilled team and a proven
                process, we ensure excellence in every project.
              </h5>
            </span>
          </div>
        </span>
        <span
          className="flex flex-col pt-2 pb-2  border-b-2 "
          onClick={() => setOption2(!option2)}
        >
          <span className="flex justify-start items-center pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className="min24Max35px sm:max-w-75.75 min-[1000px]:min-w-full min-[1000px]:max-w-full font-medium font-inter">
              Why does digital product design matter today?
            </h5>
            {!option2 ? (
              <i className=" fas fa-angle-down ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            ) : (
              <i className=" fa fa-angle-up ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            )}
          </span>
          <div className="relative w-full pl-2.5 pr-2.5">
            <span
              className="font-inter font-medium min-[1000px]:font-normal min-[1000px]:text-[1.5rem] text-[1.3rem]  sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 transition-all dropDownMenuAnimation"
              ref={dropdownMenuRef2}
            >
              <h5>
                Quality design, data-driven solutions, and reliability. For the
                past three years, we've delivered high-quality digital product
                and UX design services. Backed by a skilled team and a proven
                process, we ensure excellence in every project.
              </h5>
            </span>
          </div>
        </span>
        <span
          className="flex flex-col pt-2 pb-2  border-b-2 "
          onClick={() => setOption3(!option3)}
        >
          <span className="flex justify-start items-center pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className="min24Max35px sm:max-w-75.75 min-[1000px]:min-w-full min-[1000px]:max-w-full font-medium font-inter">
              How do you approach your product design process?
            </h5>
            {!option3 ? (
              <i className=" fas fa-angle-down ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            ) : (
              <i className=" fa fa-angle-up ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            )}
          </span>

          <div className="relative pl-2.5 pr-2.5">
            <span
              className="font-inter font-medium min-[1000px]:font-normal min-[1000px]:text-[1.5rem] text-[1.3rem] max-w-[80%] sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 dropDownMenuAnimation"
              ref={dropdownMenuRef3}
            >
              <h5>
                Quality design, data-driven solutions, and reliability. For the
                past three years, we've delivered high-quality digital product
                and UX design services. Backed by a skilled team and a proven
                process, we ensure excellence in every project.
              </h5>
            </span>
          </div>
        </span>
        <span
          className="flex flex-col pt-2 pb-2  border-b-2 "
          onClick={() => setOption4(!option4)}
        >
          <span className="flex justify-start items-center pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className="min24Max35px sm:max-w-75.75 min-[1000px]:min-w-full min-[1000px]:max-w-full font-medium font-inter">
              What distinguishes UX design services from digital product design
              services?
            </h5>
            {!option4 ? (
              <i className=" fas fa-angle-down ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            ) : (
              <i className=" fa fa-angle-up ml-auto min-[1000px]:text-[2rem] text-[1.3rem"></i>
            )}
          </span>

          <div className="relative pl-2.5 pr-2.5">
            <span
              className="font-inter font-medium min-[1000px]:font-normal min-[1000px]:text-[1.5rem] text-[1.3rem]  sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 dropDownMenuAnimation"
              ref={dropdownMenuRef4}
            >
              <h5>
                Quality design, data-driven solutions, and reliability. For the
                past three years, we've delivered high-quality digital product
                and UX design services. Backed by a skilled team and a proven
                process, we ensure excellence in every project.
              </h5>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
export default FAQ;
