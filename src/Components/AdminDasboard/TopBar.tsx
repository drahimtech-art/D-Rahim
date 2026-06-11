import testImage from "/images/testimage.png"
function TopBar() {
  return (
    <div className="w-full flex p-2.5 pl-4 pr-4 bg-[#FFFFFF] h-25 items-center rounded-[10px]">
      <span className="flex min22Max26px gap-1 items-center mr-auto">
        <h5 className="font-inter font-semibold text-[26px] ">
          Good morning, Victory!
        </h5>
        <h5 className="-mt-0.5">👋</h5>
      </span>
      {/**search bar */}
      <div className="flex gap-8 items-center">
        <span className=" w-92.75 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px]">
          <i className="fa fa-search text-2xl"></i>
          <input className="w-full h-full pl-2" placeholder="Search..."></input>
        </span>
        <span className="h-full flex">
          <span className="ml-5 mr-5 flex justify-center items-center w-12.5 h-12.5 border border-gray-500 rounded-full">
            <i className="fa fa-bell text-2xl text-gray-500"></i>
          </span>
          <span className="block mr-5  w-12.5 h-12.5 border border-gray-500 rounded-full">
            <img className="w-full h-full" src={testImage}></img>
          </span>
        </span>
      </div>
    </div>
  );
}
export default TopBar;
