import TableRows from "./TableRows";
function List(): React.ReactElement {
  return (
    <article className="w-full h-full bg-white">
      <section className="w-full h-15 border border-[#ebe8e8] bg-[#F5F5F5] grid grid-cols-[25%_32%_20%_13%_10%] ">
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Service
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Title
          </h5>
        </span>
        <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
          <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
            Date Added
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
        <div className="w-full h-full overflow-y-scroll flex flex-col">
          {Array.from({ length: 30 }).map((_, i) => {
            return <TableRows key={`table-row-key-${i}`} />;
          })}
        </div>
      </section>
    </article>
  );
}
export default List;
