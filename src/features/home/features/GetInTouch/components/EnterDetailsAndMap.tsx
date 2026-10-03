import mapIcon from "/images/icons/Map.svg";
function EnterDetailsAndMap() {
  return (
    <article className="flex min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 min-[1000px]:mt-15 mt-10 min-[1000px]:gap-10 gap-5">
      <section className="min-[1000px]:w-[60%] min-[1000px]:max-w-232">
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
          <span className="w-full  min-[1000px]:max-w-201.75 ">
            <h5 className=" text-[16px] ml-2 ">
              <strong className="font-normal text-[#2563EB]">
                {" "}
                By clicking Submit Application
              </strong>
              , you consent to D’rahim Tech Innovation collecting and processing
              the personal information you provide in accordance with our
              Privacy Policy.
            </h5>
          </span>
          <button className="flex mr-auto pointer pl-7.5 pr-7.5 p-2.5 items-center justify-center mt-10 bg-button-bgGreen min-[1000px]:w-fit min-[1000px]:h-12.5 w-fit rounded-full">
            <h5 className="text-center min22 text-gray-200 font-medium font-inter">
              Submit Application
            </h5>
          </button>
        </div>
      </section>
      <section className="w-[40%] ml-auto hidden min-[1000px]:block">
        <div className=" w-full h-[50%]  max-h-112.5  rounded-2xl">
          <img className="w-full h-full  rounded-2xl" src={mapIcon} />
        </div>
        <span className="flex justify-center w-full mt-2">
          <h5 className="font-normal font-inter logoMainText">
            Find Us On The Map
          </h5>
        </span>
      </section>
    </article>
  );
}
export default EnterDetailsAndMap;
