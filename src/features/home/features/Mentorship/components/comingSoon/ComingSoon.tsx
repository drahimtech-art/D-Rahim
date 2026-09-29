import whatsAppIcon from "/images/icons/whatsapp-icon.png";
function ComingSoon(): React.ReactElement {
  return (
    <main className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:mt-15 mt-7">
      <header>
        <h2 className="font-size-heading font-sans font-semibold">
          Mentorship Coming Soon!
        </h2>
      </header>
      <section className="mt-5 w-full max-w-[659px] font-inter font-normal min22">
        <h5>
          Our mentorship program is currently in the works. Reach out to us on
          WhatsApp to{" "}
          <strong className="0088FF font-normal text-[#0088FF] pointer">
            learn more
          </strong>{" "}
          or get notified when enrollment opens.
        </h5>
      </section>
      <section className="mt-[83px] flex justify-center">
        <div className="">
          <span className="flex justify-center pointer">
            <img
              className="w-fit h-fit max-w-[162px] max-h-[163px]"
              src={whatsAppIcon}
            ></img>
          </span>
          <h5 className="text-center font-inter font-normal min16Max20px mt-3.25">
            Click To Reach out to us on WhatsApp
          </h5>
        </div>
      </section>
    </main>
  );
}
export default ComingSoon;
