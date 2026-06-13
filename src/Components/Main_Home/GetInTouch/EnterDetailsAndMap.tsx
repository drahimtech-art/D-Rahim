import { useState } from "react";
import Calendar from "react-calendar";
function EnterDetailsAndMap() {
  const [date, setDate] = useState(new Date());
  console.log(setDate);
  return (
    <div className="flex min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 min-[1000px]:mt-15 mt-10 min-[1000px]:gap-10 gap-5">
      <div className="min-[1000px]:w-[60%] min-[1000px]:max-w-232">
        <span className="ourWorkMenuText fontPoppins font-semibold min-[1000px]:hidden">
          <h5>Enter Details</h5>
        </span>
        <div className=" flex flex-col min-[1000px]:max-w-232 min-[1000px]:gap-1.5 gap-5 min-[1000px]:mt-0 mt-10">
          <span className="flex flex-col font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Full Name
            </h5>
            <input className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
          </span>
          <span className="flex flex-col font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Job Title
            </h5>
            <input className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
          </span>
          <span className="flex flex-col font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Business Email
            </h5>
            <input className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
          </span>
          <span className="flex flex-col font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Phone Number
            </h5>
            <input className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
          </span>
          <span className="flex flex-col font-inter">
            <h5 className="ourWorkHeadMenu font-inter font-medium">
              Company Name
            </h5>
            <input className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
          </span>
          <span className="flex flex-col h-full font-inter">
            <span>
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                Tell us about your project
              </h5>
            </span>
            <span>
              <input className="min-[1000px]:inline-block hidden h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4 sm:min-h-12  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
              <textarea className="min-[1000px]:hidden inline-block  h-41.75  border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></textarea>
            </span>
          </span>
          <span className="flex flex-col h-full font-inter mt-0 min-[1000px]:mt-5">
            <span>
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                How did you find D'rahim tech innovation?
              </h5>
            </span>
            <span>
              <input className="min-[1000px]:inline-block hidden h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4 sm:min-h-12  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></input>
              <textarea className="min-[1000px]:hidden inline-block  h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"></textarea>
            </span>
          </span>
        </div>
        <div className="mt-10">
          <span className="flex w-full items-center min-[1000px]:max-w-201.75 ">
            <input
              className="min-[1000px]:w-6 min-[1000px]:h-6 w-10 h-10 text-green-400"
              type="radio"
            ></input>
            <h5 className=" text-[16px] ml-2 ">
              Keep this button selected to give consent for us to collect and
              process the personal information you've submitted, in line with
              our Privacy Policy.
            </h5>
          </span>
          <span className="flex ml-auto mr-auto min-[1000px]:p-0 pl-7.5 pr-7.5 p-2.5 items-center justify-center mt-10 bg-green-600 min-[1000px]:w-36 min-[1000px]:h-12.5 w-fit rounded-full">
            <h5 className="text-center min22 text-gray-200 font-medium font-inter">
              Submit
            </h5>
          </span>
        </div>
      </div>
      <div className="w-[40%] ml-auto hidden min-[1000px]:block">
        <span className="flex justify-center w-full">
          <h5 className="font-semibold logoMainText">Find Us On The Map</h5>
        </span>
        <div className="mt-2 w-full h-[50%] max-h-112.5  rounded-2xl">
          <Calendar value={date} />
        </div>
        <span className="flex justify-center mt-25">
          <i className="fa-brands fa-whatsapp min-[1000px]:text-[5rem] text-green-600"></i>
        </span>
      </div>
    </div>
  );
}
export default EnterDetailsAndMap;
