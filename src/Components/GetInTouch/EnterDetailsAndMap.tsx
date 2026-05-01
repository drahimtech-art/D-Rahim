function EnterDetailsAndMap() {
  return (
    <div className="flex lg:pl-10 lg:pr-10 pl-5 pr-5 mt-15 lg:gap-10 gap-5">
      <div className="w-[60%] max-w-232">
        <div className=" flex flex-col max-w-232 gap-1.5">
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Full Name
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Job Title
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Business Email
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Phone Number
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Company Name
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Tell us about your project
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              How did you find D'rahim tech innovation?
            </h5>
            <input className="border-b-2 border-gray-600 w-full  pb-7 mt-6"></input>
          </span>
        </div>
        <div className="mt-10">
          <span className="flex max-w-201.75 ">
            <input className="w-6 h-6 text-green-400" type="radio"></input>
            <h5 className=" text-[16px] ml-2 ">
              Keep this button selected to give consent for us to collect and
              process the personal information you've submitted, in line with
              our Privacy Policy.
            </h5>
          </span>
          <span className="flex items-center justify-center mt-10 bg-green-600 w-36 h-12.5 rounded-full">
            <h5 className="text-center ourWorkHeadMenu text-gray-200 font-medium font-inter">
              Submit
            </h5>
          </span>
        </div>
      </div>
      <div className="w-[40%] ml-auto">
        <span className="flex justify-center w-full">
          <h5 className="font-semibold logoMainText">Find Us On The Map</h5>
        </span>
        <div className="mt-2 w-full h-[50%] max-h-112.5 bg-gray-900 rounded-2xl"></div>
      </div>
    </div>
  );
}
export default EnterDetailsAndMap;
