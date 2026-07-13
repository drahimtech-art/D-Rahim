import sortIcon from "/images/icons/sort_icon.png";
import downArrowIcon from "/images/icons/arrow-down.png";
import CommentCard from "./CommentCard";
function CommentsComponets() {
  return (
    <div className="w-full  max-h-full overflow-y-auto">
      {/**head comments count and filter bar */}
      <div className="pt-2.5 pb-2.5 flex items-center">
        {/**comments text */}
        <span className="flex gap-2 items-center">
          <h5 className="font-sans font-normal text-[16px]">Comments</h5>
          {/**comments count */}
          <span className="w-9 h-5.5 bg-[#11AC76] pl-1 pr-1 pt-0.5 pb-0.5 rounded-[14px] text-gray-200 flex justify-center items-center">
            <h5 className="font-sans font-normal text-[16px]">32</h5>
          </span>
        </span>
        {/**filter bar */}
        <span className="w-fit flex gap-2 items-center ml-auto pointer">
          <img className="w-fit h-fit" src={sortIcon}></img>
          <h5 className="font-sans font-normal text-[16px]">Most recent</h5>
          <img className="w-fit h-fit" src={downArrowIcon}></img>
        </span>
      </div>
      {/***contents */}
      <div className="p-2.5 h-full w-full flex flex-col gap-4 ">
        {/*comments card*/}
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
}
export default CommentsComponets;
