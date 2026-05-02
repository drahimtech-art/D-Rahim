function EnterDetailsAndMap() {
  return (
    <div className="flex lg:pl-10 lg:pr-10 pl-5 pr-5 sm:mt-15 mt-10 lg:gap-10 gap-5">
      <div className="sm:w-[60%] sm:max-w-232">
        <span className="ourWorkMenuText fontPoppins font-semibold sm:hidden">
          <h5>Enter Details</h5>
        </span>
        <div className=" flex flex-col sm:max-w-232 sm:gap-1.5 gap-5 sm:mt-0 mt-10">
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Full Name
            </h5>
            <input className="border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Job Title
            </h5>
            <input className="border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Business Email
            </h5>
            <input className="border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Phone Number
            </h5>
            <input className="border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Company Name
            </h5>
            <input className="border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Tell us about your project
            </h5>
            <input className="h-41.75 sm:h-full border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
          <span className=" font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              How did you find D'rahim tech innovation?
            </h5>
            <input className="h-41.75 sm:h-full border-2 sm:border-0 sm:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 sm:pb-7 sm:mt-6 rounded-2xl sm:rounded-none"></input>
          </span>
        </div>
        <div className="mt-10">
          <span className="flex w-full items-center sm:max-w-201.75 ">
            <input
              className="sm:w-6 sm:h-6 w-10 h-10 text-green-400"
              type="radio"
            ></input>
            <h5 className=" text-[16px] ml-2 ">
              Keep this button selected to give consent for us to collect and
              process the personal information you've submitted, in line with
              our Privacy Policy.
            </h5>
          </span>
          <span className="flex ml-auto mr-auto sm:p-0 pl-7.5 pr-7.5 p-2.5 items-center justify-center mt-10 bg-green-600 sm:w-36 sm:h-12.5 w-fit rounded-full">
            <h5 className="text-center min22 text-gray-200 font-medium font-inter">
              Submit
            </h5>
          </span>
        </div>
      </div>
      <div className="w-[40%] ml-auto hidden sm:block">
        <span className="flex justify-center w-full">
          <h5 className="font-semibold logoMainText">Find Us On The Map</h5>
        </span>
        <div className="mt-2 w-full h-[50%] max-h-112.5 bg-gray-900 rounded-2xl"></div>
      </div>
    </div>
  );
}
export default EnterDetailsAndMap;
