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
    <footer className="mt-20 min-[1000px]:mt-96 bg-primary-green lg:pl-10 lg:pr-10 pl-5 pr-5 pt-10 w-full overflow-hidden">
      <article className="w-full flex flex-col min-[1000px]:flex-row">
        <section className="flex flex-col flex-wrap">
          <span className="block">
            <h5 className="ourWorkMenuText font-medium min-[1000px]:font-normal text-gray-200 font-inter">
              Reach Us Today
            </h5>
          </span>
          <div className="flex flex-row gap-6.25 items-center mt-5 font-inter ourWorkHeadMenu">
            <span
              className="w-fit min-[1000px]:w-full pointer  max-w-40.25 h-fit min-[1000px]:pl-7.5 min-[1000px]:pr-7.5 min-[1000px]:pt-2.5 min-[1000px]:pb-2.5  pl-5 pr-5 pt-2.5 pb-2.5 border-2  border-gray-200 text-gray-200 rounded-full "
              onClick={contact}
            >
              <h5>Write Us</h5>
            </span>
            <h5 className="text-gray-200 ourWorkHeadMenu">or</h5>
            <span
              className="flex gap-2 pointer w-fit min-[1000px]:w-full max-w-[167.96px] h-[47.96]  pt-2.5 pb-2.5  text-gray-200 border-b"
              onClick={bookACall}
            >
              <h5>Book A Call</h5>
              <i className="fas fa-arrow-up text-[18px] min-[1000px]:text-[24px]  rotate-40"></i>
            </span>
          </div>
        </section>
        <section className="mt-15.5 min-[1000px]:mt-0 flex flex-col min-[1000px]:ml-auto text-gray-200 font-inter w-fit min-[1000px]:w-[438px] ourWorkHeadMenu min-[1000px]:h-29">
          <span>
            <h5>Remote-first digital innovation team</h5>
          </span>
          <span className="mt-6 font-inter">
            <h5>Serving clients across Nigeria and beyond.</h5>
          </span>
        </section>
      </article>
      <nav className="mt-[62px] min-[1000px]:mt-30">
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
      </nav>
      <section className="mt-[62px] min-[1000px]:mt-30 flex flex-col gap-[24px] min-[1000px]:flex-row text-gray-200 text-[16px] font-inter  min-[1000px]:gap-46.5 min-[1000px]:mb-3">
        <h5 className="hidden min-[1000px]:block">
          © {new Date().getFullYear()} D'RHIM TECH INNOVATION
        </h5>
        <h5>Privacy Policy</h5>
        <h5>Terms of Use</h5>
        <h5>All Services</h5>
        <h5 className="block mb-10 min-[1000px]:hidden">
          © {new Date().getFullYear()} D'RHIM TECH INNOVATION
        </h5>
      </section>
    </footer>
  );
}
export default End;
