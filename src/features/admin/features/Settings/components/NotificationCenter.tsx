function NotificationCenter(): React.ReactElement {
  return (
    <article className="w-full h-fit">
      <section>
        <h5 className="font-semibold font-inter text-[22px]">Notifications</h5>
      </section>
      <section className="flex flex-col gap-4 mt-4 pl-3">
        {/**section */}
        <div className="flex items-center">
          <h5 className="font-medium text-[13px] font-inter">New Booking</h5>
          {/**control */}
          <div className="w-fit flex gap-[27px] ml-auto">
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">Email</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">In App</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
        {/**section */}
        <div className="flex items-center">
          <h5 className="font-medium text-[13px] font-inter">
            Upcoming Booking
          </h5>
          {/**control */}
          <div className="w-fit flex gap-[27px] ml-auto">
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">Email</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">In App</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
        {/**section */}
        <div className="flex items-center">
          <h5 className="font-medium text-[13px] font-inter">
            Payment Recaiend
          </h5>
          {/**control */}
          <div className="w-fit flex gap-[27px] ml-auto">
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">Email</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">In App</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
        {/**section */}
        <div className="flex items-center">
          <h5 className="font-medium text-[13px] font-inter">Payment Failed</h5>
          {/**control */}
          <div className="w-fit flex gap-[27px] ml-auto">
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">Email</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">In App</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
        {/**section */}
        <div className="flex items-center">
          <h5 className="font-medium text-[13px] font-inter">New Message</h5>
          {/**control */}
          <div className="w-fit flex gap-[27px] ml-auto">
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">Email</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block mr-auto -mt-px -ml-px rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-medium text-[11px] font-inter">In App</h5>
              <button className="bg-green-600 pointer h-[20px] w-[40px] rounded-full">
                <span className="swicth-shadow bg-white h-[22px] w-[22px] block ml-auto -mt-px -mr-px rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
export default NotificationCenter;
