import type { ChangeEvent } from "react";
type SeachControl = {
  search: string;
  toFilterConnectionsList: (e: ChangeEvent<HTMLInputElement>) => void;
};
function Head(props: SeachControl) {
  return (
    <div className="w-full h-fit flex items-center pt-3.25 pb-3.25 pl-1.5 pr-1.5">
      {/*seach bar*/}
      <span className="mr-auto w-73.25 h-9.5 flex  items-center border border-[#11AC76] p-1 pl-3.25 pr-3.5 rounded-[30px]">
        <i className="fa fa-search text-2xl text-gray-500"></i>
        <input
          className="w-full h-full pl-2"
          value={props.search}
          onChange={props.toFilterConnectionsList}
          placeholder="Search..."
        ></input>
      </span>
      {/**filter bar */}
      <span className="pl-1.25 pr-1.25 pt-2.5 pb-2.5 flex w-fit h-10 overflow-hidden gap-1.5 justify-center items-center border border-[#11AC76] rounded-[30px]">
        <h5 className="font-sans font-medium text-[16px] text-[#11AC76] line-clamp-1">
          Recently added
        </h5>
        <i className="fa fa-angle-down text-[#11AC76]"></i>
      </span>
    </div>
  );
}
export default Head;
