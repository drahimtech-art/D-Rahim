import { useNavigate } from "react-router-dom";
function End() {
  const urlNavigator = useNavigate();
  function contact() {
    urlNavigator("/contact", { replace: true });
  }
  function bookACall() {
    urlNavigator("/book/call", { replace: true });
  }
  return (
    <div className="mt-20 min-[1000px]:mt-96 bg-primary-green lg:pl-10 lg:pr-40 pl-5 pr-5 pt-10 w-full overflow-hidden">
      <div className="w-full flex flex-col min-[1000px]:flex-row">
        <div className="flex flex-col flex-wrap">
          <span className="block">
            <h5 className="ourWorkMenuText font-medium min-[1000px]:font-normal text-gray-200 font-inter">
              Reach Us Today
            </h5>
          </span>
          <div className="flex flex-row  gap-6.25 items-center mt-5 font-inter ourWorkHeadMenu">
            <span
              className="w-fit min-[1000px]:w-full pointer  max-w-40.25 h-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5 border-2  border-gray-200 text-gray-200 rounded-full "
              onClick={contact}
            >
              <h5>Write Us</h5>
            </span>
            <h5 className="text-gray-200 ">Or</h5>
            <span
              className="flex gap-2 pointer w-fit min-[1000px]:w-full max-w-[167.96px] h-[47.96]  pt-2.5 pb-2.5  text-gray-200 border-b"
              onClick={bookACall}
            >
              <h5>Book A Call</h5>
              <i className="fas fa-arrow-up  rotate-40"></i>
            </span>
          </div>
        </div>
        <div className="mt-15.5 min-[1000px]:mt-0 flex flex-col min-[1000px]:ml-auto text-gray-200 font-inter w-75.5 ourWorkHeadMenu min-[1000px]:h-29">
          <span>
            <h5>
              Federal Capital Territory, Abuja Nigeria NO9, Hil top Street Kubwa
            </h5>
          </span>
          <span className="mt-6 font-inter">
            <h5>
              Federal Capital Territory, Abuja Nigeria NO 26, Hil top Street
              Kuje
            </h5>
          </span>
        </div>
      </div>
      <div className="hidden min-[1000px]:block mt-30">
        <span className="flex gap-5 text-[1.8rem] lg:text-[2rem] text-gray-200">
          <a
            className="fa-brands fa-facebook"
            href="https://web.facebook.com/people/Drahim-Tech-Innovation/100076332797158/"
            target="_blank"
          ></a>
          <a
            className="fa-brands fa-linkedin"
            href="https://www.linkedin.com/company/d-rahim-tech-innovation/"
            target="_blank"
          ></a>
          <a
            className="fa-brands fa-behance"
            href="https://www.behance.net/drahimtechinnovation"
            target="_blank"
          ></a>
          <a
            className="fa-brands fa-instagram"
            href="https://www.instagram.com/drahimtech?igsh=N2psejUyeTNlbnl0&utm_source=qr"
            target="_blank"
          ></a>
        </span>
      </div>
      <div className="mt-15.5 min-[1000px]:mt-30 flex flex-col gap-10 min-[1000px]:flex-row text-gray-200 text-[16px] font-inter  min-[1000px]:gap-46.5">
        <h5 className="hidden min-[1000px]:block">
          2026 D'RHIM TECH INNOVATION
        </h5>
        <h5>Privacy Policy</h5>
        <h5>Terms of Use</h5>
        <h5>All Services</h5>
        <h5 className="block min-[1000px]:hidden">
          2026 D'RHIM TECH INNOVATION
        </h5>
      </div>
      <div className="block min-[1000px]:hidden mt-30 pb-10">
        <span className="flex gap-5 text-[1.8rem] lg:text-[2rem] text-gray-200">
          <a
            className="fa-brands fa-facebook"
            href="https://web.facebook.com/people/Drahim-Tech-Innovation/100076332797158/"
            target="_blank"
          ></a>
          <a
            className="fa-brands fa-linkedin"
            href="https://www.linkedin.com/company/d-rahim-tech-innovation/"
            target="_blank"
          ></a>
          <a
            className="fa-brands fa-behance"
            href="https://www.behance.net/drahimtechinnovation"
            target="_blank"
          ></a>
          <a
            className="fa-brands fa-instagram"
            href="https://www.instagram.com/drahimtech?igsh=N2psejUyeTNlbnl0&utm_source=qr"
            target="_blank"
          ></a>
        </span>
      </div>
    </div>
  );
}
export default End;
