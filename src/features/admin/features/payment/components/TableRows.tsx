import menuIcon from "/images/icons/DotsThreeOutlineVertical.png";
import { useState } from "react";
function TableRows({
  statusType,
}: {
  statusType: "Pending" | "Confirmed" | "Cancelled";
}): React.ReactElement {
  const [renderActionBar, setRenderActionBar] = useState<boolean>(false);
  return (
    <>
      <article className="w-full min-h-[80px] max-h-[80px] grid grid-cols-[15%_17%_20%_17%_12%_12%_7%]">
        {/**invoice */}
        <section className="pl-2.5 pr-2.5    border border-t-0 border-[#ebe8e8]  flex justify-start items-center ">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E] line-clamp-1">
            INV-2026-001
          </h5>
        </section>
        {/**name/email */}
        <section className="pl-2.5 pr-2.5 pt-3.5 pb-3.5 border border-l-0 border-t-0 border-[#ebe8e8] flex flex-col justify-start">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E] line-clamp-1">
            Digital Product Design
          </h5>
          <h5 className="font-inter font-normal mt-auto text-[12px] line-clamp-1 text-[#A5A6A7]">
            cassidypaul22@gmail.com
          </h5>
        </section>
        {/**project type */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
            Website Redesign
          </h5>
        </section>
        {/**amount */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
            N400,000.00
          </h5>
        </section>
        {/**date */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
            12 May 2026
          </h5>
        </section>
        {/**status */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <span
            className="block w-fit pl-2.5 pr-2.5 pt-2 pb-2 rounded-[10px]"
            style={{
              backgroundColor:
                statusType === "Cancelled"
                  ? "#FFF5F5"
                  : statusType === "Confirmed"
                    ? "#E9FFEA"
                    : "#FFF9E5",
            }}
          >
            <h5
              className="font-inter text-[12px] font-medium "
              style={{
                color:
                  statusType === "Cancelled"
                    ? "#C0392B"
                    : statusType === "Confirmed"
                      ? "#2BC035"
                      : "#D4AF37",
              }}
            >
              {statusType}
            </h5>
          </span>
        </section>
        {/**action */}
        <button className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-center items-center relative">
          <img
            className="w-[24px] h-[24px] pointer "
            onClick={() => setRenderActionBar(!renderActionBar)}
            src={menuIcon}
          ></img>
          {renderActionBar && (
            <div className=" absolute z-50 w-[100px] h-fit bg-[#757575] mt-40 flex flex-col gap-[8px] items-center pl-6.25 pr-6.25 pt-3.25 pb-3.25 rounded-[10px] right-0">
              <button className="w-[80px] h-[34px] pl-[8px] pr-[8px] pt-[6px] pb-[6px] rounded-[30px] border-2 border-[#D9D9D9] flex justify-center items-center pointer ">
                <h5 className="font-inter font-normal text-[14px] text-[#FFFFFF]">
                  Confirm
                </h5>
              </button>
              <button className="w-[80px] h-[34px] pl-[8px] pr-[8px] pt-[6px] pb-[6px] rounded-[30px] border-2 border-[#D9D9D9] flex justify-center items-center pointer ">
                <h5 className="font-inter font-normal text-[14px] text-[#FFFFFF]">
                  Cancel
                </h5>
              </button>
            </div>
          )}
        </button>
      </article>
      {renderActionBar && (
        <div
          className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0"
          onClick={() => setRenderActionBar(!renderActionBar)}
        ></div>
      )}
    </>
  );
}
export default TableRows;
