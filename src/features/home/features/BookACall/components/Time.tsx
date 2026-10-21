function Time({ toCallPage }: { toCallPage: () => void }): React.ReactElement {
  return (
    <section className="min-[1000px]:mt-16  min-[1000px]:w-[20%] flex flex-col">
      <span>
        <h5 className="font-inter  text-[24px]">Tuesday, September 9</h5>
      </span>
      <div className="mt-12.5 flex flex-col gap-2.5">
        <span
          className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400 pointer"
          onClick={toCallPage}
        >
          <h5 className="font-inter  text-[24px]">07:00 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">07:30 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">08:00 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">08:30 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">09:00 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">09:40 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">11:00 am</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">02:00 pm</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">08:00 pm</h5>
        </span>
        <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
          <h5 className="font-inter  text-[24px]">08:30 pm</h5>
        </span>
      </div>
    </section>
  );
}
export default Time;
