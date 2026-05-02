import { useNavigate } from "react-router-dom";
function GetInTouchHeadText() {
  const urlNavigator = useNavigate();
  function bookACall() {
    urlNavigator("/book/call", { replace: false });
  }
  return (
    <>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 sm:mt-30 mt-10">
        <span className="block">
          <h5 className="font-size-heading fontPoppins font-semibold">
            Need Help With a Project?
          </h5>
        </span>
        <span className="block sm:mt-15 mt-10">
          <h5 className="max20px w-full font-bold sm:font-normal sm:w-[80%] max-w-209.75 ">
            <strong
              className="text-green-400 border-b-2 border-green-400 pointer"
              onClick={bookACall}
            >
              Schedule A Call
            </strong>{" "}
            At Your Convenience, Or Fill Out The Form And We'll Get In Touch.
          </h5>
        </span>
        <div className="sm:mt-15 mt-10">
          <h5 className="min22 font-bold">I'm interested in</h5>
          <div className="flex flex-col sm:flex-row lg:gap-10 gap-5 mt-5">
            <span className="  pl-5 pr-5 sm:pl-0 sm:pr-0 w-fit sm:w-[30%] sm:max-w-81.5 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Moblie Design</h5>
            </span>
            <span className="pl-5 pr-5 sm:pl-0 sm:pr-0 w-fit sm:w-[30%] sm:max-w-61.25 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Website Design</h5>
            </span>
            <span className="pl-5 pr-5 sm:pl-0 sm:pr-0  w-fit sm:w-[30%] sm:max-w-45 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Branding</h5>
            </span>
            <span className="pl-5 pr-5 sm:pl-0 sm:pr-0  w-fit sm:w-[30%] sm:max-w-32.5 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Other</h5>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default GetInTouchHeadText;
