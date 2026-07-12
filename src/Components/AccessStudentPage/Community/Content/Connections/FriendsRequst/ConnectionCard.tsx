function ConnectionCard() {
  return (
    <div className="flex items-center gap-4.25 pb-1 border-b border-gray-500">
      {/**profileImage */}
      <span className="w-10 h-10 mr-auto ml-1.5 rounded-full bg-gray-300"></span>
      {/**name and info */}
      <span className="flex flex-col  mr-auto">
        <h5 className="font-medium text-[20px]">David Abiodun</h5>
        <h5 className="font-medium text-[16px] line-clamp-1 text-gray-500">
          Batch 2025, Lagos State
        </h5>
      </span>
      {/**action button */}
      <span className="flex gap-1.75 items-center">
        <button className="flex h-8.75 justify-center items-center p-2 mr-1.5 rounded-full border border-[#C0392B] bg-[#f1e3e1] pointer">
          <h5 className="text-[#C0392B] font-sans font-medium text-[16px]">
            Decline
          </h5>
        </button>

        <button className="flex h-8.75 justify-center items-center p-2 mr-1.5 rounded-full bg-[#11AC76] pointer">
          <h5 className="text-gray-100 font-sans font-medium text-[16px]">
            Accept
          </h5>
        </button>
      </span>
    </div>
  );
}
export default ConnectionCard;
