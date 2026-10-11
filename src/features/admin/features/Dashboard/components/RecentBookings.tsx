function RecentBookings(): React.ReactElement {
  return (
    <section className="w-full h-full bg-[#FFFFFF] rounded-[20px] p-4">
      <article className="w-full h-full ">
        {/**head */}
        <section className="w-full h-fit pt-2  flex">
          <h5 className="font-medium text-[16px] font-inter">
            Recent Bookings
          </h5>
          <button className="ml-auto pointer">
            <h5 className=" font-medium text-[16px] text-black font-inter">
              See All
            </h5>
          </button>
        </section>
        {/**alert data body */}
        <section className="grid grid-rows-3 mt-3.75 gap-[15px] w-full">
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2">
            <span className="flex flex-col gap-1.5">
              <h5 className="font-medium font-inter text-[16px]">Cassy Paul</h5>
              <h5 className="font-normal font-inter text-[14px] text-gray-800">
                cassypaul657@gmail.com
              </h5>
            </span>
            <span className="ml-auto">
              <h5 className="font-normal font-inter text-[14px] text-gray-500">
                12 May 2026
              </h5>
            </span>
          </div>
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2">
            <span className="flex flex-col gap-1.5">
              <h5 className="font-medium font-inter text-[16px]">
                {" "}
                Abubaka Sadiq
              </h5>
              <h5 className="font-normal font-inter text-[14px] text-gray-800">
                abubakasadiq984@gmail.com
              </h5>
            </span>
            <span className="ml-auto">
              <h5 className="font-normal font-inter text-[14px] text-gray-500">
                03 May 2026
              </h5>
            </span>
          </div>
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full  pb-2">
            <span className="flex flex-col gap-1.5">
              <h5 className="font-medium font-inter text-[16px]">
                Kalomole David
              </h5>
              <h5 className="font-normal font-inter text-[14px] text-gray-800">
                kalamoledavid982@gmail.com
              </h5>
            </span>
            <span className="ml-auto">
              <h5 className="font-normal font-inter text-[14px] text-gray-500">
                03 May 2026
              </h5>
            </span>
          </div>
        </section>
      </article>
    </section>
  );
}
export default RecentBookings;
