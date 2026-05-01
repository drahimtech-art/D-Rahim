function EnterDetails() {
  return (
    <div className=" mt-27.25 pl-10 pr-10">
      <span className="block">
        <h5 className=" font-semibold fontPoppins font-size-heading">
          Enter Details
        </h5>
      </span>
      <div className="mt-15 flex flex-col max-w-201.75 gap-1.5">
        <span className=" font-inter">
          <h5 className="ourWorkHeadMenu font-inter font-medium">Full Name</h5>
          <input className="border-b-2 border-gray-600 w-full  pb-7 mt-7"></input>
        </span>
        <span className=" font-inter">
          <h5 className="ourWorkHeadMenu font-inter font-medium">
            Email Address
          </h5>
          <input className="border-b-2 border-gray-600 w-full  pb-7 mt-7"></input>
        </span>
        <span className=" font-inter">
          <h5 className="ourWorkHeadMenu font-inter font-medium">
            Phone Number
          </h5>
          <input className="border-b-2 border-gray-600 w-full  pb-7 mt-7"></input>
        </span>
        <span className=" font-inter">
          <h5 className="ourWorkHeadMenu font-inter font-medium">
            How did you find D'rahim tech innovation?
          </h5>
          <input className="border-b-2 border-gray-600 w-full  pb-7 mt-7"></input>
        </span>
      </div>
      <div className="mt-10">
        <span className="flex max-w-201.75 ">
          <input className="w-6 h-6 text-green-400" type="radio"></input>
          <h5 className=" text-[16px] ml-2 ">
            Keep this button selected to give consent for us to collect and
            process the personal information you've submitted, in line with our
            Privacy Policy.
          </h5>
        </span>
        <span className="flex items-center pl-10 mt-10 bg-green-600 w-71.25 h-12.5 rounded-full">
          <h5 className="text-center ourWorkHeadMenu text-gray-200 font-medium font-inter">
            Submit Application
          </h5>
        </span>
      </div>
    </div>
  );
}
export default EnterDetails;
