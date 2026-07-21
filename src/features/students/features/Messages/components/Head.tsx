function Head() {
  return (
    <div className="w-full h-fit flex bg-white gap-60.25">
      <span>
        <h5 className="font-medium font-sans min20Max24px">Messages</h5>
      </span>
      {/**search */}
      <span className=" w-73.25 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px]">
        <i className="fa fa-search text-2xl"></i>
        <input className="w-full h-full pl-2" placeholder="Search..."></input>
      </span>
    </div>
  );
}
export default Head;
