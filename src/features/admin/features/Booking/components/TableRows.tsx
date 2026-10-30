import menuIcon from "/images/icons/DotsThreeOutlineVertical.png";
import type { BookingData } from "../../../../../storage/AdminConfig";
function TableRows({ data }: { data: BookingData }): React.ReactElement {
  return (
    <article className="w-full min-h-[80px] max-h-[80px] grid grid-cols-[20%_25%_20%_12%_13%_10%]">
      {/**name/email */}
      <section className="pl-2.5 pr-2.5 pt-3.5 pb-3.5   border border-t-0 border-[#ebe8e8]  flex flex-col justify-start ">
        <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E] line-clamp-1">
          {data.clientFullName}
        </h5>
        <h5 className="font-inter font-normal mt-auto text-[12px] line-clamp-1 text-[#A5A6A7]">
          {data.email}
        </h5>
      </section>
      {/**project type */}
      <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
        <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
          {data.jobTitle}
        </h5>
      </section>
      {/**date */}
      <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
        <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
          {new Date(data.date).toDateString()}
        </h5>
      </section>
      {/**time */}
      <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
        <h5 className="font-inter text-[16px] font-normal text-[#1C1C1E]">
          {data.time}
        </h5>
      </section>
      {/**status */}
      <section className="pl-2.5 pr-2.5 border border-l-0 border-t-0 border-[#ebe8e8]  flex justify-start items-center">
        <span
          className="block w-fit pl-2.5 pr-2.5 pt-2 pb-2 rounded-[10px]"
          style={{
            backgroundColor:
              data.status === "Cancelled"
                ? "#FFF5F5"
                : data.status === "Confirmed"
                  ? "#E9FFEA"
                  : "#FFF9E5",
          }}
        >
          <h5
            className="font-inter text-[12px] font-medium "
            style={{
              color:
                data.status === "Cancelled"
                  ? "#C0392B"
                  : data.status === "Confirmed"
                    ? "#2BC035"
                    : "#D4AF37",
            }}
          >
            {data.status}
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
