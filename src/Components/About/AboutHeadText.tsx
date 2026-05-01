import companyImage from "/images/25.png";
function AboutHeadText() {
  return (
    <>
      <div className="body-spacing lg:mt-10 mt-5">
        <div className="w-full">
          <h5 className="w-[80%] max-w-232 font-size-heading font-size-heading fontPoppins font-semibold">
            We help businesses make an impact with breakthrough digital products
            and brands.
          </h5>
        </div>
      </div>
      <div className="w-full max-h-198 mt-4">
        <img className="w-full h-full max-h-198" src={companyImage}></img>
      </div>
    </>
  );
}
export default AboutHeadText;
