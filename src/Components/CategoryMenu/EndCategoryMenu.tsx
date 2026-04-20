function EndCategoryMenu() {
  return (
    <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 flex flex-col lg:mt-16 mt-8">
      <span className="block">
        <h5 className="lg:text-[4.5rem] text-[2rem] font-bold">Our Values</h5>
      </span>
      <div className="flex flex-col mt-2">
        <span className="flex pt-2 pb-2 border-t-2 border-b-2 items-center">
          <h5 className="lg:text-[3rem] text-[1.6rem] ">Simplicity First</h5>
          <i className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
        </span>
        <span className="flex pt-2 pb-2  border-b-2 items-center">
          <h5 className="lg:text-[3rem] text-[1.6rem] ">
            User-Centered Thinking
          </h5>
          <i className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
        </span>
        <span className="flex pt-2 pb-2  border-b-2 items-center">
          <h5 className="lg:text-[3rem] text-[1.6rem] ">Impact Over Hype</h5>
          <i className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
        </span>
        <span className="flex pt-2 pb-2  border-b-2 items-center">
          <h5 className="lg:text-[3rem] text-[1.6rem] ">
            Accessibility For All
          </h5>
          <i className=" fa fa-plus ml-auto lg:text-[2rem] text-[1.2rem]"></i>
        </span>
      </div>
    </div>
  );
}
export default EndCategoryMenu;
