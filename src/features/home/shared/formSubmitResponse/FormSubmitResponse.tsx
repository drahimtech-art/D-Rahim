import closeIcon from "/images/icons/Close.png";
import logo from "/images/logo1.png";
function FormSubmitResponse({
  closePopUp,
}: {
  closePopUp: () => void;
}): React.ReactElement {
  return (
    <div className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0 z-50">
      <div className="w-full h-full flex justify-center items-center">
        <article className="w-[90%] min-[700px]:w-[80%] max-w-[1136px] max-h-[750px] min-[1000px]:max-h-[1120px] h-[95%] overflow-hidden rounded-[16px]  min-[1000px]:pl-10 min-[1000px]:pr-10 min-[1000px]:pt-5 min-[1000px]:pb-0 pl-4 pr-4 pt-3 bg-[#FFFFFF] ">
          <div className="w-full h-full relative overflow-y-scroll scroll-container ">
            <section className="flex items-center">
              <span className="ml-auto  flex justify-center w-[70px]">
                <div className="pointer bg-white  absolute top-0 p-3.5 transition-all hover:bg-transparent  z-10 right-0">
                  <button className="pointer " onClick={closePopUp}>
                    <img
                      className="min-[1000px]:w-[40px] min-[1000px]:h-[40px] w-[25px] h-[25px]"
                      src={closeIcon}
                    ></img>
                  </button>
                </div>
                <h5 className="font-medium text-[14px] mt-4  min-[1000px]:mt-14">
                  Close
                </h5>
              </span>
            </section>
            <article className="pl-4 pr-4">
              <header>
                <img
                  className="min-[1000px]:w-[140px] min-[1000px]:h-[140px] w-[90px] h-[90px] rounded-full"
                  src={logo}
                />
                <h2 className="mt-[32px] font-semibold font-inter min18pxMax36px">
                  Hello from D’rahim Tech Innovation!
                </h2>
              </header>
              <div className="w-full h-full min-[1000px]mt-[81px] mt-[20px] min-[700px]:mt-[40px] flex flex-col min-[1000px]:gap-[81px] gap-[40px] mb-20">
                <span>
                  <h5 className="font-inter font-normal min14pxMax24px">
                    We appreciate you reaching out to us. We will get back to
                    you shortly.
                  </h5>
                </span>
                <ul className="min-[1000px]:pl-15 pl-4 list-disc flex flex-col min-[1000px]:gap-[67px] gap-[30px]">
                  <li className="font-inter font-normal min14pxMax24px">
                    If you want to reach us faster, please schedule a meeting on{" "}
                    <a className="text-[#2563EB] border-b-2 pointer">
                      Whatsapp
                    </a>
                  </li>
                  <li className="font-inter font-normal min14pxMax24px">
                    Learn more about{" "}
                    <strong className="text-[#004A3C] font-normal">
                      D’rahim Tech Innovation
                    </strong>{" "}
                    by exploring our work, discovering our approach to digital
                    product design, and staying connected with us through our
                    latest updates.
                  </li>
                </ul>
                <div className="flex flex-col min-[1000px]:gap-[40px] gap-[20px]">
                  <span className="font-inter font-normal min14pxMax24px ">
                    We’ll be glad to see you!
                  </span>
                  <span className="font-inter font-normal min14pxMax24px text-[#004A3C]">
                    D’rahim Tech Innovation!
                  </span>
                </div>
                <nav className="">
                  <span className="flex gap-5 text-[1.8rem] lg:text-[2rem] text-black">
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
              </div>
            </article>
          </div>
        </article>
      </div>
    </div>
  );
}
export default FormSubmitResponse;
