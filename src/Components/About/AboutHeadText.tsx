import companyImage from "/images/25.png";
function AboutHeadText() {
  return (
    <>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:mt-10 mt-5">
        <div className="w-full">
          <h5 className="w-full sm:w-[80%] sm:max-w-232 font-size-heading  fontPoppins font-semibold">
            We help businesses make an impact with breakthrough digital products
            and brands.
          </h5>
        </div>
      </div>
      <div className="w-full h-147 sm:max-h-198 mt-4">
        <img className="w-full h-full sm:max-h-198" src={companyImage}></img>
      </div>
    </>
  );
}
export default AboutHeadText;
