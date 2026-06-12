import LogoImg from "/images/logo.png";
function LeftNevBar() {
  return (
    <div className="w-[25%] min-w-73.5 flex flex-col bg-[#FFFFFF] p-10 rounded-[10px]">
      <div className="flex gap-2 items-center">
        <span className="w-8 h-12.5">
          <img className="w-full h-full" src={LogoImg}></img>
        </span>
        <span>
          <h5 className="font-semibold font-inter min18pxMax20px">D’RAHIM</h5>
          <h5 className="font-semibold font-inter text-[9.04px] -mt-0.5">
            TECH INNOVATION
          </h5>
        </span>
      </div>
      {/**navber */}
      <div className="mt-10 flex flex-col gap-4">
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5 bg-primary-green text-white rounded-xl">
          <i className="fa fa-home font-light text-[24px]"></i>
          <h5 className="font-inter font-medium text-[18px]">Dashboard</h5>
        </button>
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl">
          <i className="fas fa-calendar-alt font-light text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Bookings</h5>
        </button>
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl">
          <i className="fas fa-user-graduate  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Mentorship</h5>
        </button>
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl">
          <i className="fas fa-briefcase  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Job inquires</h5>
        </button>
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl">
          <i className="fas fa-cube  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Content</h5>
        </button>
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl">
          <i className="fas fa-sliders  text-[24px] rotate-90"></i>
          <h5 className="font-inter font-normal text-[18px]">Settingss</h5>
        </button>
      </div>
      <div className="mt-22.5">
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#C0392B] rounded-xl">
          <i className="fas fa-right-from-bracket font-extralight  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Logout</h5>
        </button>
      </div>
    </div>
  );
}
export default LeftNevBar;
