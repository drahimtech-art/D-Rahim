import Logo from "/images/logo.png";
function Top() {
  return (
    <div className="flex w-full h-16 items-center lg:p-10 lg:pt-16 lg:pb-16 p-5 pt-7 pb-7 bg-white sticky top-0 ">
      <div className="md:hidden block mr-2">
        <i className="fa fa-bars text-[1.5rem]"></i>
      </div>
      <div className="flex">
        <div className=" w-7 lg:w-9 h-10">
          <img className="" src={Logo} alt="logo"></img>
        </div>
        <span className="mt-0.5">
          <h5 className="font-inter font-semibold text-[20.09px]">D'RAHIM</h5>
          <h5 className="-mt-1 font-semibold text-[9.04px]">TECH INNOVATION</h5>
        </span>
      </div>

      <div className="md:flex gap-6 ml-auto hidden">
        <span className="border-b-2 border-black text-[24px]  font-inter  pointer">
          <h5>Work</h5>
        </span>
        <span className="border-b-2 border-white text-[24px]  font-inter  pointer">
          <h5>Services</h5>
        </span>
        <span className="border-b-2 border-white text-[24px]  font-inter  pointer">
          <h5>About</h5>
        </span>
        <span className="border-b-2 border-white text-[24px]  font-inter  pointer">
          <h5>Mentorship</h5>
        </span>
      </div>
      <div className="ml-auto ">
        <span className="block w-fit h-fit lg:p-2 p-1 lg:pl-7 lg:pr-7 pr-5 pl-5 rounded-full bg-primary-green hover:bg-secondary-green pointer">
          <h5 className="text-white lg:text-[1.5rem] text-[1.3rem] font-inter ">
            Get In Touch{" "}
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Top;
