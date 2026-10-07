import TableRows from "./TableRows";
function List(): React.ReactElement {
  return (
    <article className="w-full h-full bg-white">
      <section className="w-full h-15 border border-[#ebe8e8] bg-[#F5F5F5] grid grid-cols-[15%_17%_20%_17%_12%_12%_7%] ">
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Invoice
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Name/Email
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Project Type
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Amount
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Date
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Status
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5  flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Action
          </h5>
        </span>
      </section>
      <section className="w-full h-[400px] overflow-hidden">
        <div className="w-full h-full  flex flex-col">
          {Array.from({ length: 30 }).map((_, i) => {
            return (
              <TableRows statusType="Confirmed" key={`table-row-key-${i}`} />
            );
          })}
        </div>
      </section>
      <section className="w-full h-[72px] pl-2.5 pr-2.5 flex items-center">
        <span className="p-2.5 mr-auto">
          <h5 className="font-inter font-normal text-[16px]">
            Showing 1 to 4 of 12 results
          </h5>
        </span>
        <span className="w-fit h-full flex items-center gap-3">
          <i className="fa fa-angle-left"></i>
          <span className="w-fit h-full flex items-center gap-1">
            <span className="w-7.5 h-7.5 flex justify-center items-center  border border-[#F5F5F5] rounded-xl">
              <h5 className="font-inter font-normal text-[16px]">1</h5>
            </span>
            <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
              <h5 className="font-inter font-normal text-[16px]">2</h5>
            </span>
            <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
              <h5 className="font-inter font-normal text-[16px]">3</h5>
            </span>
          </span>
          <i className="fa fa-angle-right "></i>
        </span>
      </section>
    </article>
  );
}
export default List;
