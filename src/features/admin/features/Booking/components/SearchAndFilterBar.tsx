function SearchAndFilterBar({
  searchSection,
}: {
  searchSection: string;
}): React.ReactElement {
  return (
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
        <span className="flex w-37.5 gap-2 pl-2 pr-2 pt-1.5 pb-1.5 text-[#757575] justify-center items-center border border-gray-500 rounded-[30px]">
          <h5 className="font-inter font-normal text-[16px]">All Status</h5>
          <i className="fa fa-angle-down text-[18px] font-light"></i>
        </span>
        <span className="flex w-37.5 gap-2 pl-2 bg-primary-green pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border border-gray-500 rounded-[30px]">
          <i className="fa fa-plus text-[18px] font-light"></i>
          <h5 className="font-inter font-normal text-[16px]">Add New</h5>
        </span>
      </div>
    </div>
  );
}
export default SearchAndFilterBar;
