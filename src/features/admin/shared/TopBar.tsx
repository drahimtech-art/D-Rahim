import calendarIcon from "/images/icons/CalendarDots_icon.png";
import searchIcon from "/images/icons/search_icon.png";
import bellIcon from "/images/icons/bell_icon.png";
import { useSearchParams } from "react-router-dom";
type Heading = {
  heading: string;
  subHeading: string;
};
function TopBar(props: Heading) {
  const [searchParems, setSearchParems] = useSearchParams();
  const page = searchParems.get("page");
  return (
    <article className="w-full flex p-3.5 pl-5 pr-5 bg-[#FFFFFF] h-[100px] items-center rounded-[10px]">
      <section className="flex flex-col min22Max26px gap-2    mr-auto overflow-hidden">
        <h5 className="font-inter font-semibold text-[22px] ">
          {props.heading}
        </h5>
        <h5 className="font-inter font-normal text-[18px]">
          {props.subHeading}
        </h5>
      </section>
      {/**search bar */}
      {page === "overview" && (
        <section className="flex gap-8 items-center">
          <span className="flex p-3.25 gap-3.25 text-[#757575] items-center rounded-[10px] border-[0.5px] border-[#D9D9D9] ">
            <img className="w-[24px] h-[24px]" src={calendarIcon}></img>
            <h5 className="text-[#757575] font-normal text-[14px]">
              May 26 - Jun 01, 2026
            </h5>
            <i className="fa fa-angle-down"></i>
          </span>
          <span className="h-full flex">
            <span className="ml-5 mr-5 flex justify-center items-center w-12.5 h-12.5 border border-[#D9D9D9] rounded-full">
              <img className="w-[24px] h-[24px]" src={searchIcon}></img>
            </span>
            <span className=" mr-5 flex justify-center items-center w-12.5 h-12.5 border border-[#D9D9D9] rounded-full">
              <img className="w-[24px] h-[24px]" src={bellIcon}></img>
            </span>
          </span>
        </section>
      )}
    </article>
  );
}
export default TopBar;
