import { useState } from "react";
function SearchAndFilterBar({
  searchSection,
}: {
  searchSection: string;
}): React.ReactElement {
  const [renderFilterBar, setRenderFilterBar] = useState<boolean>(false);
  return (
    <>
      <div className="w-full mt-10  flex pt-7.5 pb-7.5 pl-2.5 pr-2.5 bg-[#FFFFFF]">
        <span className=" w-92.75 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px] mr-auto">
          <i className="fa fa-search text-2xl"></i>
          <input
            className="w-full h-full pl-2"
            placeholder={`Search ${searchSection ? searchSection : "...."}...`}
          ></input>
        </span>
        {/** */}
        <div className="w-fit h-full flex items-center gap-5.5">
          <div className="w-37.5 relative">
            <button
              className="flex pointer w-37.5 gap-2 pl-2 pr-2 pt-1.5 pb-1.5 text-[#757575] justify-center items-center border border-gray-500 rounded-[30px]"
              onClick={() => setRenderFilterBar(!renderFilterBar)}
            >
              <h5 className="font-inter font-normal text-[16px]">All Status</h5>
              <i className="fa fa-angle-down text-[18px] font-light"></i>
            </button>
            {renderFilterBar && (
              <article className="absolute w-[150px] flex flex-col gap-[8px] z-50 h-fit pl-6.25 pr-6.25 pt-3.25 pb-3.25 rounded-[10px] bg-[#FFFFFF] mt-[0.5px] ">
                <button className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]">
                  <h5>All</h5>
                </button>
                <button className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]">
                  <h5>Active</h5>
                </button>
                <button className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]">
                  <h5>Inactive</h5>
                </button>
              </article>
            )}
          </div>
          <span className="flex w-37.5 gap-2 pl-2 bg-primary-green pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border border-gray-500 rounded-[30px]">
            <i className="fa fa-plus text-[18px] font-light"></i>
            <h5 className="font-inter font-normal text-[16px]">Add New</h5>
          </span>
        </div>
      </div>
      {renderFilterBar && (
        <div
          className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0"
          onClick={() => setRenderFilterBar(!renderFilterBar)}
        ></div>
      )}
    </>
  );
}
export default SearchAndFilterBar;
