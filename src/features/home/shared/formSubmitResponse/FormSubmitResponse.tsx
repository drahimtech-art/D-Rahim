import checkIcon from "/images/icons/check-green-icon.png";
import mailIcon from "/images/icons/mail_icon.png";
function FormSubmitResponse({
  backToHomePage,
}: {
  backToHomePage: () => void;
}): React.ReactElement {
  return (
    <div className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0 z-50">
      <div className="w-full h-full flex justify-center items-center">
        <article className="w-[85%] max-w-[687px] h-[90%] max-h-full overflow-y-auto overflow-hidden pl-10 pr-10 p-4 pb-7 rounded-[16px] bg-white">
          <section className="mt-[20px] flex justify-center  ">
            <header className="flex flex-col gap-[12px] items-center">
              <img className="w-fit h-fit" src={checkIcon}></img>
              <h4 className="font-inter font-semibold min20pxMax36px text-[#004A3C]">
                Application Submitted!
              </h4>
              <h5 className="font-inter font-normal min16pxMax20px mt-[5px]">
                Your application has been successfully received.
              </h5>
            </header>
          </section>
          <section className="mt-[29px] flex flex-col">
            <h5 className="font-inter font-medium min16pxMax20px">
              What’s next?
            </h5>
            <article className="mt-[22px] flex flex-col gap-[50px]">
              <section className="flex gap-[12px]">
                <span className=" bg-[#11AC76] w-[24px] h-[24px] rounded-full flex justify-center items-center text-[#FFFFFF] font-medium font-inter text-[14px]">
                  <h5>1</h5>
                </span>
                <span className="flex flex-col gap-[8px]">
                  <h5 className="font-medium font-inter text-[#11AC76] min14pxMax16px">
                    Application Review
                  </h5>
                  <p className="font-normal font-inter  min14pxMax16px">
                    We'll review your project details to understand your
                    requirements.
                  </p>
                </span>
              </section>
              <section className="flex gap-[12px]">
                <span className=" bg-[#11AC76] w-[24px] h-[24px] rounded-full flex justify-center items-center text-[#FFFFFF] font-medium font-inter text-[14px]">
                  <h5>2</h5>
                </span>
                <span className="flex flex-col gap-[8px]">
                  <h5 className="font-medium font-inter text-[#11AC76] min14pxMax16px">
                    We'll Get in Touch
                  </h5>
                  <p className="font-normal font-inter  min14pxMax16px">
                    Our team will contact you via email within 1–3 business
                    days.
                  </p>
                </span>
              </section>
            </article>
            <div className="mt-[27px] flex gap-[5px]">
              <span className=" block w-[16px] h-[16px]">
                <img className="w-fit h-fit" src={mailIcon}></img>
              </span>
              <span className="flex flex-col gap-[6px]">
                <h5 className="font-medium font-inter text-[12px]">
                  Check your inbox
                </h5>
                <p className="font-normal font-inter  text-[10px]">
                  A confirmation email with your application details will be
                  sent to your email address.
                </p>
              </span>
            </div>
          </section>
          <section className="mt-[34px] flex flex-col">
            <button
              className="pointer w-full h-[50px] bg-[#11AC76] transition-all hover:bg-primary-green rounded-[30px] flex justify-center items-center"
              onClick={backToHomePage}
            >
              <h5 className="font-inter font-medium min16pxMax20px text-[#FFFFFF] ">
                Back to Homepage
              </h5>
            </button>
            <p className="font-normal font-inter  text-[10px] mt-[5px] text-center">
              Thank you for considering us for your project.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
export default FormSubmitResponse;
