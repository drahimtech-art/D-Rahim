import closeIcon from "/images/icons/Close.png";
import noImgIcon from "/images/icons/addImgFrame.png";
import penIcon from "/images/icons/PencilSimpleLine.png";
import arrowDownIcon from "/images/icons/iconamoon_arrow-down-2-duotone.png";
import { useState } from "react";
function AddNewProjectPopUp({
  closePopUp,
}: {
  closePopUp: (boolean: boolean) => void;
}): React.ReactElement {
  const [renderIndustry, setRenderIndustry] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <article className=" w-[90%] max-w-450 max-h-[1586.620px] h-[95%] overflow-hidden rounded-[50px] p-12.5 pb-0 bg-[#FFFFFF] ">
        <div className="w-full h-full relative overflow-y-scroll scroll-container ">
          <section className="flex items-center">
            <h5 className="font-inter font-medium text-[50.44px]">
              Project Information
            </h5>
            <span className="ml-auto  flex justify-center w-[70px]">
              <div className="pointer bg-white  absolute top-0 p-3.5 transition-all hover:bg-transparent  z-10 right-0">
                <button className="pointer " onClick={() => closePopUp(false)}>
                  <img className="w-[40px] h-[40px]" src={closeIcon}></img>
                </button>
              </div>
              <h5 className="font-medium text-[14px]  mt-14">Close</h5>
            </span>
          </section>
          <article className="w-full h-fit pb-10 flex gap-[75px] mt-10">
            {/**image section */}
            <section className="w-[45%] flex flex-col gap-[16px]">
              <img className="w-full h-fit" src={noImgIcon}></img>
              <button className="flex w-fit pointer gap-1 items-center">
                <img className="w-[24px] h-[24px]" src={penIcon}></img>
                <h5 className="font-medium font-inter text-[20px] text-[#06A87B]">
                  Upload project image
                </h5>
              </button>
            </section>
            {/**input section */}
            <article className="w-[55%] h-fit flex flex-col gap-[30px]">
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Project Title
                </h5>
                <input className="w-full h-[60px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Project Heading
                </h5>
                <input className="w-full h-[60px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Tell us about your project
                </h5>
                <input className="w-full h-[124px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="w-full flex flex-col gap-1 relative">
                <h5 className="font-inter font-medium text-[24px]">Industry</h5>
                <button
                  className="w-full pointer h-[60px] border p-3 border-[#56D566]  rounded-[12px] flex items-center"
                  onClick={() => setRenderIndustry(!renderIndustry)}
                >
                  <h5 className="text-[#3C3C43] font-inter text-[16px] font-medium">
                    Select your Industry
                  </h5>
                  <span className="w-fit  ml-auto">
                    {!renderIndustry ? (
                      <img className="w-[24px] h-[24px] " src={arrowDownIcon} />
                    ) : (
                      <img
                        className="w-[24px] h-[24px] rotate-180"
                        src={arrowDownIcon}
                      />
                    )}
                  </span>
                </button>
                {renderIndustry && (
                  <article className="w-full flex flex-col absolute border border-[#56D566] bg-[#FFFFFF]  rounded-[12px] mt-25">
                    <section className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer rounded-t-[12px]">
                      <h5 className="font-inter font-medium text-[16px]">
                        GovTech
                      </h5>
                    </section>
                    <section className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer">
                      <h5 className="font-inter font-medium text-[16px]">
                        Healthcare
                      </h5>
                    </section>
                    <section className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer">
                      <h5 className="font-inter font-medium text-[16px]">
                        FinTech
                      </h5>
                    </section>
                    <section className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76]  rounded-b-[12px] pointer">
                      <h5 className="font-inter font-medium text-[16px]">
                        Logistics
                      </h5>
                    </section>
                  </article>
                )}
              </section>
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Capability
                </h5>
                <input className="w-full h-[60px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">Teams</h5>
                <input className="w-full h-[60px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">Duration</h5>
                <input className="w-full h-[60px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">Location</h5>
                <input className="w-full h-[60px] border border-[#56D566] rounded-[12px] p-2"></input>
              </section>
              <section className="flex ">
                <div className="ml-auto flex gap-[20px]">
                  <button className="pointer flex w-37.5 gap-2 pl-2 bg-[#f3126149] border-button-bgGreen  pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border  rounded-[30px]">
                    <h5 className="font-inter font-normal text-black">
                      Cancel
                    </h5>
                  </button>
                  <button className="pointer flex w-37.5 gap-2 pl-2 bg-button-bgGreen border-button-bgGreen  pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border  rounded-[30px]">
                    <h5 className="font-inter font-normal text-[16px]">
                      Upload
                    </h5>
                  </button>
                </div>
              </section>
            </article>
          </article>
        </div>
      </article>
    </div>
  );
}
export default AddNewProjectPopUp;
