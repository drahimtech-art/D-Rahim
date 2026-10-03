import { useNavigate } from "react-router-dom";
import whatsAppIcon from "/images/icons/whatsApp_icon.png";
function GetInTouchHeadText() {
  const urlNavigator = useNavigate();
  function bookACall() {
    urlNavigator("/book/call", { replace: false });
  }
  return (
    <>
      <article className="lg:pl-10 lg:pr-10 pl-5 pr-5 min-[1000px]:mt-30 mt-10">
        <span className="block">
          <h5 className="font-size-heading fontPoppins font-semibold">
            Need Help With a Project?
          </h5>
        </span>
        <span className="block min-[1000px]:mt-15 mt-10">
          <h5 className="max20px w-full font-bold min-[1000px]:font-normal min-[1000px]:w-[80%] max-w-209.75 ">
            <strong
              className="text-green-400 border-b-2 border-green-400 pointer"
              onClick={bookACall}
            >
              Schedule A Call
            </strong>{" "}
            At Your Convenience, Or Fill Out The Form And We'll Get In Touch.
          </h5>
        </span>
        <section className="min-[1000px]:mt-[60px] mt-10 max-w-[229px] h-fit ">
          <div className="w-full flex justify-center">
            <img className="w-fit h-fit pointer" src={whatsAppIcon}></img>
          </div>
          <h5 className="text-black  text-center mt-3.25 font-inter font-normal min18pxMax20px">
            Chat via Whatsapp
          </h5>
        </section>
        <section className="min-[1000px]:mt-[60px] mt-10">
          <h5 className="min22 font-bold">I'm interested in</h5>
          <div className="flex flex-col min-[1000px]:flex-row lg:gap-10 gap-5 mt-5">
            <span className="  w-fit  p-2.5 pl-7.5 pr-7.5   flex justify-center items-center h-12.5  font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Moblie Design</h5>
            </span>
            <span className="w-fit  p-2.5 pl-7.5 pr-7.5 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Website Design</h5>
            </span>
            <span className="w-fit  p-2.5 pl-7.5 pr-7.5 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Branding</h5>
            </span>
            <span className="w-fit  p-2.5 pl-7.5 pr-7.5 flex justify-center items-center  h-12.5 font-inter font-medium ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer">
              <h5>Other</h5>
            </span>
          </div>
        </section>
      </article>
    </>
  );
}
export default GetInTouchHeadText;
