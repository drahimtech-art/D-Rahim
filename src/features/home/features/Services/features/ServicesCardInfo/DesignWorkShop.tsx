import designworkshop from "/images/designworkshop.png";
import Top from "../../../../shared/Top/Top";
import End from "../../../../shared/Footer/Footer";
function DesignWorkShop() {
  return (
    <>
      <Top />
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 min-[1000px]:pt-16 pt-10 pl-5 pr-5  ">
        <div className="flex items-center">
          <span className="min-[1000px]:w-[70%] min-[1000px]:border-b-2">
            <h5 className="fontPoppins font-semibold cardPopUpFontSize">
              Design Workshops
            </h5>
            <h5 className="w-[90%] min-[1000px]:w-full mt-10 font-inter font-light min-[1000px]:font-normal min16Max30px pb-15 ">
              Design workshops play a key role in building great products. They
              help teams gather and analyze important insights, guide better
              product decisions, and build a deeper understanding of the people
              they’re designing for.
            </h5>
          </span>
          <span className="hidden min-[1000px]:block  min-[1000px]:w-[30%] -mt-25">
            <img className="w-full h-full" src={designworkshop}></img>
          </span>
        </div>
        <div className="min-[1000px]:mt-5 mt-10 min-[1000px]:pl-7.5 min-[1000px]:pr-7.5 flex flex-col min-[1000px]:flex-row gap-10 min-[1000px]:gap-37.5 ">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Duration</h5>
            <h5 className="font-inter min20Max24px">1 week</h5>
            <h5 className="font-inter min20Max24px">3 operational calls</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Team</h5>
            <h5 className="font-inter min20Max24px">UI/UX designer</h5>
            <h5 className="font-inter min20Max24px">Business Analyst</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Delivery</h5>
            <h5 className="font-inter min20Max24px max-w-68.5">
              Workshop delivery presentation (depends on the workshops itself)
            </h5>
          </span>
        </div>
        {/** */}
        <div className="flex min-[1000px]:justify-center mt-20 min-[1000px]:mt-27.25">
          <div>
            <div className="flex  ">
              <div className="flex flex-col min-[1000px]:max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  When products need Design Workshops?
                </h5>

                <span className="mt-10 flex flex-col  min-[1000px]:gap-9.5 gap-10">
                  <h5 className="font-inter min16Max30px flex items-center sm:block ">
                    <strong className="text-green-400  self-baseline mr-1">
                      *
                    </strong>{" "}
                    There’s no product yet, just an idea that needs validation
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    The product is new and hasn’t reached product–market fit
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    There’s high drop-off or low user engagement
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    There’s an idea for a new key feature that needs to be
                    validated before moving forward
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
                <h5 className="w-[90%] min-[1000px]:w-full mt-10 font-inter font-light min-[1000px]:font-normal min16Max30px pb-15 ">
                  We’ll start with a call to understand your workshop goals and
                  the bigger picture of your business. This helps us shape the
                  right team for the job. From there, we’ll carry out research
                  and prepare for the session, run the workshop, and then
                  deliver a clear report with our insights and outcomes.
                </h5>
                <div className="flex flex-col min-[1000px]:flex-row gap-10  min-[1000px]:gap-41.75 mt-10">
                  <span className="flex flex-col gap-10  min-[1000px]:gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 1</h5>
                      <h5>Kick off</h5>
                    </span>
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 2</h5>
                      <h5>Initial research</h5>
                    </span>
                  </span>
                  <span className="flex flex-col gap-10  min-[1000px]:gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 3</h5>
                      <h5>Workshop conduct</h5>
                    </span>
                    <span className=" flex flex-col ga-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">Step 4</h5>
                      <h5>Delivery presentation</h5>
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
                    Workshop delivery presentation
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
export default DesignWorkShop;
