import type { SetStateAction } from "react";
type BackButtonControll = {
  setIsClassActive: React.Dispatch<SetStateAction<boolean>>;
};
function Head(props: BackButtonControll) {
  return (
    <div className="w-full flex flex-col gap-10">
      {/**back button */}
      <span className="w-full flex items-center gap-2.5">
        <i
          className="fa fa-arrow-left text-[24px] pointer"
          onClick={() => props.setIsClassActive(false)}
        ></i>
        <h5 className="font-sans text-[16px] font-medium">
          Back to My Classes
        </h5>
      </span>
      {/**heading and progress bar */}
      <div className="flex items-center">
        <span>
          <h5 className="font-medium font-sans min18pxMax20px">
            Ui/Ux Design Mentorship Bootcamp
          </h5>
        </span>
        {/**progress bar */}
        <div className="flex flex-col gap-1.5 ml-auto">
          <h5 className="font-normal text-[16px] font-sans">Progress</h5>
          <div className="flex gap-2 items-center">
            <span className="block w-72.5 h-1.5 bg-[#787878] rounded-[3px]">
              <span className="block w-[75%] h-full bg-[#0088FF]"></span>
            </span>
            <h5 className="font-normal text-[16px] font-sans">75%</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Head;
