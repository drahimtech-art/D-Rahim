function Category() {
  return (
    <>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:mt-30 mt-10">
        <span className="block">
          <h5 className="lg:text-[4rem] text-[2rem] font-inter">Our Work</h5>
        </span>
      </div>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 flex lg:mt-8 mt-3 lg:gap-7 gap-2 w-full overflow-x-auto pb-2 ">
        <span className="min-w-fit pl-3 pr-3 p-1 text-center w-fit h-fit font-inter   lg:text-[1.3rem] text-[1rem] lg:p-2  lg:pl-5 lg:pr-5  bg-primary-green  border   text-gray-200 transition-all  rounded-full">
          <h5>All Projects</h5>
        </span>
        <span className="min-w-fit pl-3 pr-3 p-1 text-center w-fit h-fit font-inter lg:text-[1.3rem] text-[1rem] lg:p-2   lg:pl-5 lg:pr-5  border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full">
          <h5>Moblie Design</h5>
        </span>
        <span className="min-w-fit pl-3 pr-3 p-1 text-center w-fit h-fit font-inter lg:text-[1.3rem] text-[1rem] lg:p-2  lg:pl-5 lg:pr-5  border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full">
          <h5>Website Design</h5>
        </span>
        <span className="min-w-fit pl-3 pr-3 p-1 text-center w-fit h-fit font-inter lg:text-[1.3rem] text-[1rem] lg:p-2  lg:pl-5 lg:pr-5  border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full">
          <h5>Branding</h5>
        </span>
      </div>
    </>
  );
}
export default Category;
