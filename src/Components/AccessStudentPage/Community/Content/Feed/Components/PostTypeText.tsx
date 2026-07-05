import likeIcon from "/images/like_icon.png";
import commentIcon from "/images/comment_icon.png";
import shareIcon from "/images/share_icon.png";
function PostTypeText() {
  return (
    <div className="w-full flex flex-col border-[1.5px] border-[#11AC76] rounded-2xl pl-4 pr-4 p-2.5">
      {/**image heading and connect action button */}
      <div className="w-full flex">
        <div className="flex gap-4.25 mr-auto items-center max-w-75">
          {/**image */}
          <span className="min-w-12.5 min-h-12. bg-gray-400 rounded-full"></span>
          {/**heading */}
          <span className="fle flex-col gap-1.25">
            {/**full name */}
            <h5 className="font-sans font-medium text-[20px] line-clamp-1">
              Victory Nwanoruo
            </h5>
            {/**bio */}
            <h5 className="font-sans font-medium text-[16px] line-clamp-1 text-gray-500">
              A Ui/Ux Designer in the...
            </h5>
            {/**post time */}
            <h5 className="font-sans font-normal text-[16px] line-clamp-1 text-gray-500">
              1hour ago
            </h5>
          </span>
        </div>
        {/**connnections and menu */}
        <div className="w-fit flex h-fit ">
          <span className="w-26.25 h-6">
            <h5 className="font-sans text-[14px] pointer font-medium text-[#11AC76]">
              Connect
            </h5>
          </span>
        </div>
      </div>
      {/**caption and hastages */}
      <div className="mt-3 flex flex-col gap-5 w-full">
        {/**caption */}
        <h5 className="line-clamp-1 font-sans font-medium text-[16px] max-w-[70%]">
          Any one struggling with thier payment option🧐?
        </h5>
        {/**hashtag */}
        <span className="flex gap-2 font-sans font-medium text-[16px] items-center text-[#505AE2]">
          <h5>#issue</h5>
          <h5>#Payment</h5>
        </span>
      </div>
      {/***like comment and share button */}
      <div className="mt-3 pt-2.5 pb-2.5 w-full grid grid-cols-3 border-t-[1.5px] border-[#11AC76]">
        {/**like */}
        <span className="flex gap-2 items-center justify-start">
          <img className="w-10.75 h-8 pointer" src={likeIcon}></img>
          <h5 className="font-sans font-normal text-[16px] pointer">
            1.4k Likes
          </h5>
        </span>
        {/**comment */}
        <span className="flex gap-2 items-center justify-center">
          <img className="w-10.75 h-8 pointer" src={commentIcon}></img>
          <h5 className="font-sans font-normal text-[16px] pointer line-clamp-1">
            32 Comments
          </h5>
        </span>
        {/**shares */}
        <span className="flex gap-2 items-center justify-end">
          <img className="w-10.75 h-8 pointer" src={shareIcon}></img>
          <h5 className="font-sans font-normal text-[16px] pointer">Share</h5>
        </span>
      </div>
    </div>
  );
}
export default PostTypeText;
