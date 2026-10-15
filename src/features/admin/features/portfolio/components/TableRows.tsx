import menuIcon from "/images/icons/DotsThreeOutlineVertical.png";
import type { ProjectInfo } from "../api/Api";
function TableRows({ data }: { data: ProjectInfo }): React.ReactElement {
  return (
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
      <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-center items-center">
        <img className="w-[24px] h-[24px] pointer" src={menuIcon}></img>
      </section>
    </article>
  );
}
export default TableRows;
