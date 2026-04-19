function Top() {
  return (
    <div className="flex w-full h-16 items-center lg:pl-10 lg:pr-10 pl-5 pr-5 bg-white sticky top-0 ">
      <div className="lg:hidden">
        <i className="fa fa-bars text-[1.5rem]"></i>
      </div>
      <div className="lg:flex gap-6 ml-auto hidden">
        <span className="border-b-2 border-white text-[1.5rem] font-semibold hover:border-black pointer">
          <h5>Work</h5>
        </span>
        <span className="border-b-2 border-white text-[1.5rem] font-semibold hover:border-black pointer">
          <h5>Services</h5>
        </span>
        <span className="border-b-2 border-white text-[1.5rem] font-semibold hover:border-black pointer">
          <h5>About</h5>
        </span>
        <span className="border-b-2 border-white text-[1.5rem] font-semibold hover:border-black pointer">
          <h5>Mentorship</h5>
        </span>
      </div>
      <div className="ml-auto ">
        <span className="block w-fit h-fit p-1 pl-5 pr-5 rounded-full bg-green-900 hover:bg-green-500 pointer">
          <h5 className="text-gray-200 lg:text-[1.3rem] text-[1rem] font-semibold">
            Get In Touch{" "}
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Top;
