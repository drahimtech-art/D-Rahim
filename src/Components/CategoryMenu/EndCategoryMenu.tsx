import { useState } from "react";
function EndCategoryMenu() {
  const [option1, setOption1] = useState<boolean>(false);
  const [option2, setOption2] = useState<boolean>(false);
  const [option3, setOption3] = useState<boolean>(false);
  const [option4, setOption4] = useState<boolean>(false);
  return (
    <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 flex flex-col sm:mt-27.25 mt-10 w-full">
      <span className="block">
        <h5 className=" font-semibold font-size-heading">Our Values</h5>
      </span>
      <div className="flex flex-col mt-5 sm:mt-15 sm:mb-15 mb-27.5">
        <span
          className="flex flex-col pt-2 pb-2 border-t-2 border-b-2 "
          onClick={() => setOption1(!option1)}
        >
          <span className="flex justify-start items-center  pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className=" font-inter ourValueSubText">Simplicity First</h5>
            {!option1 ? (
              <i className=" fas fa-angle-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            ) : (
              <i className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            )}
          </span>
          {option1 && (
            <span className="font-inter font-medium sm:text-[2.2rem] text-[1rem] max-w-[75%] sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 transition-all">
              <h5>
                We Believe The Best Solutions Are Simple, Clear, And Easy To Use
                No Unnecessary Complexity.
              </h5>
            </span>
          )}
        </span>
        <span
          className="flex flex-col pt-2 pb-2  border-b-2 "
          onClick={() => setOption2(!option2)}
        >
          <span className="flex justify-start items-center pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className="ourValueSubText font-inter">
              User-Centered Thinking
            </h5>
            {!option2 ? (
              <i className=" fas fa-angle-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            ) : (
              <i className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            )}
          </span>

          {option2 && (
            <span className="font-inter font-medium sm:text-[2.2rem] text-[1rem]  sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 transition-all">
              <h5>
                Every Decision Starts With The User Real Needs, Real Behavior,
                Real Problems.
              </h5>
            </span>
          )}
        </span>
        <span
          className="flex flex-col pt-2 pb-2  border-b-2 "
          onClick={() => setOption3(!option3)}
        >
          <span className="flex justify-start items-center pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className="ourValueSubText font-inter">Impact Over Hype</h5>
            {!option3 ? (
              <i className=" fas fa-angle-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            ) : (
              <i className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            )}
          </span>

          {option3 && (
            <span className="font-inter font-medium sm:text-[2.2rem] text-[1rem] max-w-[80%] sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 transition-all">
              <h5>
                We Focus On Solutions That Create Real Value And Meaningful
                Change, Not Just What Looks Good.
              </h5>
            </span>
          )}
        </span>
        <span
          className="flex flex-col pt-2 pb-2  border-b-2 "
          onClick={() => setOption4(!option4)}
        >
          <span className="flex justify-start items-center pl-2.5 pr-2.5 sm:pt-10 sm:pb-10 pt-3 pb-3">
            <h5 className="ourValueSubText font-inter">
              Accessibility For All
            </h5>
            {!option4 ? (
              <i className=" fas fa-angle-down ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            ) : (
              <i className=" fa fa-minus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
            )}
          </span>

          {option4 && (
            <span className="font-inter font-medium sm:text-[2.2rem] text-[1rem]  sm:pt-10 sm:pb-10 pt-3 pb-3 pl-3 sm:pl-0 transition-all">
              <h5>
                We Believe Technology Should Work For Everyone, Regardless Of
                Background Or Experience.
              </h5>
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
export default EndCategoryMenu;
