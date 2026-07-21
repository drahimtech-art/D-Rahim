import branding from "/images/branding.png";
import Top from "../../../../shared/Top/Top";
import End from "../../../../shared/Footer/Footer";
function SimpleBranding() {
  return (
    <>
      <Top />
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 min-[1000px]:pt-16 pt-10 pl-5 pr-5  ">
        <div className="flex items-center">
          <span className="min-[1000px]:w-[70%] min-[1000px]:border-b-2">
            <h5 className="fontPoppins font-semibold cardPopUpFontSize">
              Simple Branding
            </h5>
            <h5 className="w-[90%] min-[1000px]:w-full mt-10 font-inter font-light min-[1000px]:font-normal min16Max30px pb-15 ">
              For early-stage products, branding isn’t a priority, but it’s one
              of the fastest ways to energize your team and excite investors for
              rapid growth. We’ll help you craft a strong visual identity for
              your business in under a month. And if you’re open to it, we can
              even help you find a standout name.
            </h5>
          </span>
          <span className="hidden min-[1000px]:block  min-[1000px]:w-[30%] -mt-25">
            <img className="w-full h-full" src={branding}></img>
          </span>
        </div>
        <div className="min-[1000px]:mt-5 mt-10 min-[1000px]:pl-7.5 min-[1000px]:pr-7.5 flex flex-col min-[1000px]:flex-row gap-10 min-[1000px]:gap-37.5 ">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Duration</h5>
            <h5 className="font-inter min20Max24px">3 - 4 weeks</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Team</h5>
            <h5 className="font-inter min20Max24px">Brand designer</h5>
            <h5 className="font-inter min20Max24px">Project manager</h5>
          </span>
          <span className="flex flex-col gap-2.5">
            <h5 className="font-inter font-semibold max20px">Delivery</h5>
            <h5 className="font-inter min20Max24px">
              2 visual identity concepts
            </h5>
            <h5 className="font-inter min20Max24px max-w-76.5">
              2 pieces of collateral (business card, email template, etc.)
            </h5>
            <h5 className="font-inter min20Max24px">Brandbook</h5>
          </span>
        </div>
        {/** */}
        <div className="flex min-[1000px]:justify-center mt-20 min-[1000px]:mt-27.25">
          <div>
            <div className="flex  ">
              <div className="flex flex-col min-[1000px]:max-w-254.5 ">
                <h5 className="fontPoppins font-semibold cardPopUpFontSize">
                  When products need Simple Branding?
                </h5>

                <span className="mt-10 flex flex-col  min-[1000px]:gap-9.5 gap-10">
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1  ">
                      *
                    </strong>{" "}
                    The product is still early-stage and needs a clean, credible
                    first impression
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    The idea is clear, but the visual identity feels
                    inconsistent or unpolished
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    The team is preparing to pitch or launch and need to look
                    trustworthy without overinvesting
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 self-baseline mr-1">
                      *
                    </strong>{" "}
                    The team needs something simple to align around and present
                    confidently
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
                  We start with a strategic session to understand your product
                  and design direction. From there, we’ll craft three distinct
                  visual concepts using our design expertise. You can choose one
                  of the directions or request another iteration. Once the
                  visual style is approved, we’ll move on to creating your brand
                  assets and a complete brand guideline.
                </h5>
                <div className="flex flex-col min-[1000px]:flex-row gap-10  min-[1000px]:gap-41.75 mt-10">
                  <span className="flex flex-col gap-10  min-[1000px]:gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">1st week</h5>
                      <h5>Strategic session</h5>
                    </span>
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">2nd week</h5>
                      <h5>Visual concepts design</h5>
                    </span>
                  </span>
                  <span className="flex flex-col gap-10  min-[1000px]:gap-21 min-[1000px]:w-94.5">
                    <span className=" flex flex-col gap-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">3rd week</h5>
                      <h5>Presentation</h5>
                    </span>
                    <span className=" flex flex-col ga-5 min-[1000px]:gap-9.5 font-inter min16Max30px">
                      <h5 className="text-green-400 ">4th week</h5>
                      <h5>Collateral & brandbook design</h5>
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
                    <strong className="text-green-400 mr-1 self-baseline ">
                      *
                    </strong>{" "}
                    2 visual identity concepts & Brandbook
                  </h5>
                  <h5 className="font-inter min16Max30px flex items-center sm:block">
                    <strong className="text-green-400 mr-1 self-baseline ">
                      *
                    </strong>
                    2 pieces of collateral (business card, email template, etc.)
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
export default SimpleBranding;
