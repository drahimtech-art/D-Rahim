import conceptspring from "/images/conceptspring.png";
import Top from "../../Top/Top";
import End from "../../End/End";
function ConceptSpring() {
  return (
    <>
      <Top />
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 min-[1000px]:pt-16 pt-10 pl-5 pr-5  ">
        <div className="flex items-center">
          <span className="min-[1000px]:w-[70%] min-[1000px]:border-b-2">
            <h5 className="fontPoppins font-semibold cardPopUpFontSize">
              Concept Sprint
            </h5>
            <h5 className="w-[90%] min-[1000px]:w-full mt-10 font-inter font-light min-[1000px]:font-normal min16Max30px pb-15 ">
              We kick things off on Monday, and by Friday you’ll be reviewing a
              refreshed user interface along with clear recommendations for
              launching the redesign.
            </h5>
          </span>
          <span className="hidden min-[1000px]:block  min-[1000px]:w-[30%] -mt-25">
            <img className="w-full h-full" src={conceptspring}></img>
          </span>
        </div>
        <div className="min-[1000px]:mt-5 mt-10 min-[1000px]:pl-7.5 min-[1000px]:pr-7.5 flex flex-col min-[1000px]:flex-row gap-10 min-[1000px]:gap-37.5 ">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Duration</h5>
            <h5 className="font-inter min20Max24px">5 days</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Team</h5>
            <h5 className="font-inter min20Max24px">Product designer</h5>
            <h5 className="font-inter min20Max24px">Product manager</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Delivery</h5>
            <h5 className="font-inter min20Max24px max-w-68.5">
              Design mockups of core use flow
            </h5>
            <h5 className="font-inter min20Max24px max-w-68.5">
              Recommendations for the next steps
            </h5>
          </span>
        </div>
        {/** */}
        <div className="flex min-[1000px]:justify-center mt-20 min-[1000px]:mt-27.25">
          <div>
            <div className="flex  ">
              <div className="flex flex-col min-[1000px]:max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  When products need Concept Sprint?
                </h5>
                <span className="mt-10 flex flex-col  min-[1000px]:gap-9.5 gap-10">
                  <h5 className="font-inter min16Max30px flex items-center sm:block ">
                    <strong className="text-green-400  self-baseline mr-1">
                      *
                    </strong>{" "}
                    The product idea is still early-stage and lacks a defined
                    direction
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>
                    There’s no validated concept on how the product should
                    deliver value to users
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    Key user flows and use cases haven’t been fully structured
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    The team is building without enough insight into user needs,
                    behavior or priorities
                  </h5>
                </span>
              </div>
            </div>
            {/** */}
            <div className="flex mt-20 min-[1000px]:mt-27.25">
              <div className="flex flex-col min-[1000px]:max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  What will the process look like?
                </h5>
                <div className="flex flex-col min-[1000px]:flex-row gap-10  min-[1000px]:gap-41.75 mt-10">
                  <span className="flex flex-col gap-10  min-[1000px]:gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 1</h5>
                      <h5>Preparation & Kickoff</h5>
                    </span>
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 2</h5>
                      <h5>Optional interim feedback</h5>
                    </span>
                  </span>
                  <span className="flex flex-col gap-10  min-[1000px]:gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 3</h5>
                      <h5>Conceptualization</h5>
                    </span>
                    <span className=" flex flex-col ga-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 4</h5>
                      <h5>Final Presentation</h5>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/** */}
            <div className="flex  mt-20 min-[1000px]:mt-27.25">
              <div className="flex flex-col min-[1000px]:max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  What will I get in the end?
                </h5>
                <span className="mt-10 flex flex-col gap-10 min-[1000px]:gap-9.5 ">
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400  mr-1 self-baseline">
                      *
                    </strong>{" "}
                    We’ll pinpoint the highest-impact opportunity for your
                    product, explore new concepts, and refine one into a
                    solution that drives the results you’re aiming for
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-[1000px]:-mt-40">
        <End />
      </div>
    </>
  );
}
export default ConceptSpring;
