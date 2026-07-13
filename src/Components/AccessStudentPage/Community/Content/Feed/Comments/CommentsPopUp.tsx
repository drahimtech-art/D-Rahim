import { StudentsAppData } from "../../../../../ContextApi/StudentsApi";
import canculeIcon from "/images/proicons_cancel.png";
import attachment from "/images/attachment.png";
import album from "/images/album.png";
import emoji from "/images/smile.png";
function CommentsPopUp() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo, setPopUpCard, setPopUpControl } = userDetails;
  function canculeAddComments() {
    setPopUpCard(undefined);
    setPopUpControl(false);
  }
  return (
    <div className="w-[60%] max-w-219.75 h-[80%] relative max-h-145.5 p-10  bg-white rounded-[20px]">
      <div className="w-full h-full flex flex-col overflow-hidden  relative">
        <span className="flex w-full justify-end">
          <img
            className="w-fit h-fit pointer"
            src={canculeIcon}
            onClick={canculeAddComments}
          ></img>
        </span>
        {/**text area and upload action buttons */}
        <div className="mt-2.25 w-full h-34.5 rounded-[20px] p-4 bg-[#DBFFDF] flex flex-col">
          {/*input box*/}
          <div className="w-full max-h-full">
            <textarea
              className="w-full h-full resize-none placeholder:text-[16px] placeholder:font-sans placeholder:font-normal placeholder:text-gray-300"
              placeholder="Add comment"
            ></textarea>
          </div>
          {/**upload action buttons */}
          <div className="w-full h-fit flex items-center mt-auto">
            <span className="w-fit flex gap-4.5 ">
              <img className="w-fit h-fit" src={album}></img>
              <img className="w-fit h-fit" src={attachment}></img>
              <img className="w-fit h-fit" src={emoji}></img>
            </span>
            {/*post action*/}
            <button className="ml-auto border-2 border-gray-500 rounded-[20px] w-13.5 h-9 flex justify-center items-center pointer">
              <i className="fa fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentsPopUp;
