import menuIcon from "/images/icons/DotsThreeOutlineVertical.png";
import type { ProjectInfo } from "../api/Api";
import { useState } from "react";
function TableRows({ data }: { data: ProjectInfo }): React.ReactElement {
  const [renderActionBar, setRenderActionBar] = useState<boolean>(false);
  return (
    <>
      <article className="w-full min-h-[80px] max-h-[80px] grid grid-cols-[25%_32%_20%_13%_10%]">
        {/**service */}
        <section className="pl-2.5 pr-2.5 border border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
            {data.projectType}
          </h5>
        </section>
        {/**title */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
            {data.title}
          </h5>
        </section>
        {/**date */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
            {new Date(data.creationDate).toDateString()}
          </h5>
        </section>
        {/**status */}
        <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
          <span className="block w-fit pl-2.5 pr-2.5 pt-2 pb-2 bg-[#E9FFEA] rounded-[10px]">
            <h5 className="font-inter text-[12px] font-medium text-[#2BC035]">
              {data.projectStatus}
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
            <div className=" absolute z-10 w-[100px] h-fit bg-[#757575] mt-40 flex flex-col gap-[8px] items-center pl-6.25 pr-6.25 pt-3.25 pb-3.25 rounded-[10px] right-0">
              <button className="w-[80px] h-[34px] pl-[8px] pr-[8px] pt-[6px] pb-[6px] rounded-[30px] border-2 border-[#D9D9D9] transition-all hover:bg-[#8FC0B2]  flex justify-center items-center pointer ">
                <h5 className="font-inter font-normal text-[14px] text-[#FFFFFF]">
                  Edit
                </h5>
              </button>
              <button className="w-[80px] h-[34px] pl-[8px] pr-[8px] pt-[6px] pb-[6px] rounded-[30px] border-2 border-[#D9D9D9] transition-all hover:bg-[#8FC0B2] flex justify-center items-center pointer ">
                <h5 className="font-inter font-normal text-[14px] text-[#FFFFFF]">
                  Active
                </h5>
              </button>
              <button className="w-[80px] h-[34px] pl-[8px] pr-[8px] pt-[6px] pb-[6px] rounded-[30px] border-2 border-[#D9D9D9] transition-all hover:bg-[#DDBFBF] flex justify-center items-center pointer ">
                <h5 className="font-inter font-normal text-[14px] text-[#FFFFFF]">
                  InActive
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
