import uiux from "/images/uiux.png";
import Top from "../../Top/Top";
import End from "../../End/End";
function UiUx() {
  return (
    <>
      <Top />
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 min-[1000px]:pt-16 pt-10 pl-5 pr-5  ">
        <div className="flex items-center">
          <span className="min-[1000px]:w-[70%] border-b-2">
            <h5 className="fontPoppins font-semibold cardPopUpFontSize">
              UI/UX Audit
            </h5>
            <h5 className="mt-10 font-inter min24Max30px pb-15 ">
              UX review is one of the fastest ways to improve your product. We
              help identify what’s holding it back, realign it with your
              business goals, and position it to compete more effectively. By
              evaluating its current state, we uncover the gaps affecting
              performance and provide clear direction to move it forward and
              expand your market reach.
            </h5>
          </span>
          <span className="min-[1000px]:w-[30%] -mt-25">
            <img className="w-full h-full" src={uiux}></img>
          </span>
        </div>
        <div className="mt-5 min-[1000px]:pl-7.5 min-[1000px]:pr-7.5 flex gap-37.5 ">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Duration</h5>
            <h5 className="font-inter min20Max24px">5 - 7 days</h5>
            <h5 className="font-inter min20Max24px">2 hours call</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Team</h5>
            <h5 className="font-inter min20Max24px">UI/UX designer</h5>
            <h5 className="font-inter min20Max24px">Business Analyst</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Delivery</h5>
            <h5 className="font-inter min20Max24px">Recommendations on</h5>
            <h5 className="font-inter min20Max24px">further improvements</h5>
            <h5 className="font-inter min20Max24px">of the product</h5>
          </span>
        </div>
        {/** */}
        <div className="flex min-[1000px]:justify-center mt-27.25">
          <div>
            <div className="flex  ">
              <div className="flex flex-col max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  When products need UI/UX Audit?
                </h5>
                <span className="min-[1000px]:mt-10 flex flex-col gap-9.5 ">
                  <h5 className="font-inter min24Max30px">
                    <strong className="text-green-400 mr-1">*</strong> The
                    product is still new and hasn’t achieved market fit yet
                  </h5>
                  <h5 className="font-inter min24Max30px">
                    <strong className="text-green-400 mr-1">*</strong> There’s a
                    high drop-off rate and low user engagement
                  </h5>
                  <h5 className="font-inter min24Max30px">
                    <strong className="text-green-400 mr-1">*</strong> Users
                    aren’t progressing through the sales funnel or completing
                    key actions
                  </h5>
                  <h5 className="font-inter min24Max30px">
                    <strong className="text-green-400 mr-1">*</strong> The
                    onboarding experience is causing users to leave instead of
                    encouraging them to stay and explore
                  </h5>
                </span>
              </div>
            </div>
            {/** */}
            <div className="flex  mt-27.25">
              <div className="flex flex-col max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  When products need UI/UX Audit?
                </h5>
                <div className="flex gap-41.75 mt-10">
                  <span className="flex flex-col gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-9.5 font-inter min24Max30px">
                      <h5 className="text-green-400 ">Step 1</h5>
                      <h5>Product Demo</h5>
                    </span>
                    <span className=" flex flex-col gap-9.5 font-inter min24Max30px">
                      <h5 className="text-green-400 ">Step 2</h5>
                      <h5>Initial research</h5>
                    </span>
                  </span>
                  <span className="flex flex-col gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-9.5 font-inter min24Max30px">
                      <h5 className="text-green-400 ">Step 3</h5>
                      <h5>Review & analysis</h5>
                    </span>
                    <span className=" flex flex-col gap-9.5 font-inter min24Max30px">
                      <h5 className="text-green-400 ">Step 2</h5>
                      <h5>Delivery presentation</h5>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/** */}
            <div className="flex  mt-27.25">
              <div className="flex flex-col max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  How long does the audit take?
                </h5>
                <h5 className="mt-10 font-inter min24Max30px">
                  The UX review report is typically delivered within 5–7 working
                  days, including two working sessions with our UX/UI and
                  analytics experts.
                </h5>
              </div>
            </div>
            {/** */}
            <div className="flex  mt-27.25">
              <div className="flex flex-col max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  What will I get in the end?
                </h5>
                <span className="min-[1000px]:mt-10 flex flex-col gap-9.5 ">
                  <h5 className="font-inter min24Max30px">
                    <strong className="text-green-400 mr-1">*</strong> UX audit
                    report (here you can review a template)
                  </h5>
                  <h5 className="font-inter min24Max30px">
                    <strong className="text-green-400 mr-1">*</strong>{" "}
                    Recommendations on further improvements of the product
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
export default UiUx;
