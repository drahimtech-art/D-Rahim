import { useSearchParams } from "react-router-dom";
function RecentBookings({
  recentBookings,
}: {
  recentBookings: {
    clientFullName: number;
    email: string;
    createdAt: string;
  }[];
}): React.ReactElement {
  const [_, setSearchParems] = useSearchParams();
  function handleSeeAllBookings() {
    setSearchParems({ page: "bookings" });
  }
  return (
    <section className="w-full h-full bg-[#FFFFFF] rounded-[20px] p-4">
      <article className="w-full h-full ">
        {/**head */}
        <section className="w-full h-fit pt-2  flex">
          <h5 className="font-medium text-[16px] font-inter">
            Recent Bookings
          </h5>
          <button className="ml-auto pointer" onClick={handleSeeAllBookings}>
            <h5 className=" font-medium text-[16px] text-black font-inter">
              See All
            </h5>
          </button>
        </section>
        {/**alert data body */}
        <section className="grid grid-rows-3 mt-3.75 gap-[15px] w-full">
          {/**alert data card */}
          {recentBookings.map((e, i) => {
            return (
              <div
                key={`recent-bookings-${i}`}
                className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2"
              >
                <span className="flex flex-col gap-1.5">
                  <h5 className="font-medium line-clamp-1 font-inter text-[16px]">
                    {e.clientFullName}
                  </h5>
                  <h5 className="font-normal line-clamp-1 font-inter text-[14px] text-gray-800">
                    {e.email}
                  </h5>
                </span>
                <span className="ml-auto">
                  <h5 className="font-normal line-clamp-1 font-inter text-[14px] text-gray-500">
                    {new Date(e.createdAt).toDateString()}
                  </h5>
                </span>
              </div>
            );
          })}
        </section>
      </article>
    </section>
  );
}
export default RecentBookings;
