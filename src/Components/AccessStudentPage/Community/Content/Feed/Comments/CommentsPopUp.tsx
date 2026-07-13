import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import canculeIcon from "/images/icons/proicons_cancel.png";
import attachment from "/images/icons/attachment.png";
import album from "/images/icons/album.png";
import emoji from "/images/icons/smile.png";
import CommentsComponets from "./CommentsComponets/CommentsComponets";
function CommentsPopUp() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  function canculeAddComments() {
    setPopUpCard(undefined);
    setPopUpControl(false);
  }
  return (
    <div className="w-[60%] max-w-219.75 h-[80%] relative max-h-145.5 pl-7 pr-7 pb-7 pt-4  bg-white rounded-[20px] overflow-hidden">
      <div className="w-full h-fit flex flex-col overflow-hidden  relative">
        <span className="flex w-full justify-end">
          <img
            className="w-fit h-fit pointer"
            src={canculeIcon}
            onClick={canculeAddComments}
          ></img>
        </span>
        {/**text area and upload action buttons */}
        <div className="mt-2.25 w-full h-34.5  rounded-[20px] pl-4 pr-4 pt-2.5  bg-[#DBFFDF] flex flex-col">
          {/*input box*/}
          <div className="w-full h-full">
            <textarea
              className="w-full h-full resize-none placeholder:text-[16px] placeholder:font-sans placeholder:font-normal placeholder:text-gray-300"
              placeholder="Add comment"
            ></textarea>
          </div>
          {/**upload action buttons */}
          <div className="w-full h-fit flex items-center mt-auto ">
            <span className="w-fit flex gap-4.5 ">
              <img className="w-fit h-fit" src={album}></img>
              <img className="w-fit h-fit" src={attachment}></img>
              <img className="w-fit h-fit" src={emoji}></img>
            </span>
            {/*post action*/}
            <span className="w-full h-fit pb-1.5">
              <button className="ml-auto border-2  border-gray-500 rounded-[20px] w-13.5 h-9 flex justify-center items-center pointer">
                <i className="fa fa-arrow-up"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      {/*comments body */}
      <div className="w-full  h-full max-h-[55%] overflow-hidden border-t-[1.5px] border-t-gray-400 mt-7">
        <CommentsComponets />
      </div>
      {/**end action button */}
      <div className="flex h-fit  justify-center items-center mt-4">
        <h5 className="font-sans text-[12px] font-normal font-gray-400 pointer">
          -view more comments-
        </h5>
      </div>
    </div>
  );
}
export default CommentsPopUp;
