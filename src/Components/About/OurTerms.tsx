import jimohImg from "/images/27.png";
import abdulmalikImg from "/images/26.png";
import victoryImg from "/images/28.png";
function OurTerms() {
  return (
    <div className="mt-27.25 pl-10 pr-10 w-full">
      <span>
        <h5 className="fontPoppins font-semibold text-[80px]">Our Teams</h5>
      </span>
      <div className="mt-15 grid grid-cols-3 h-203 justify-evenly gap-10">
        <div className="flex flex-col ">
          <span className=" h-107.75">
            <img className="w-full h-full rounded-3xl" src={jimohImg}></img>
          </span>
          <h5 className="font-inter text-[35px] font-semibold">
            Jimoh Abdulrahim Dauda
          </h5>
          <h5 className="font-inter text-[35px] font-medium ">Co-Founder</h5>
          <h5 className="font-inter font-medium text-[24px] text-gray-600 ">
            A passionate UI/UX designer focused on helping startups & founders,
            tech entrepreneurs, developers & software teams, e-commerce sellers,
            small & medium businesses, nonprofits & NGO, creative professionals
            to build simple, beautiful, and user-friendly digital products.
          </h5>
        </div>
        <div className="flex flex-col ">
          <span className=" h-107.75">
            <img
              className="w-full h-full rounded-3xl"
              src={abdulmalikImg}
            ></img>
          </span>
          <h5 className="font-inter text-[35px] font-semibold">
            Abdulmalik Mohammed
          </h5>
          <h5 className="font-inter text-[35px] font-medium">Co-Founder</h5>
          <h5 className="font-inter font-medium text-[24px] text-gray-600">
            A detail-oriented UI/UX Designer helping brands and startups turn
            ideas into user-friendly, engaging digital products. I focus on
            creating clean, functional designs that make an impact, always with
            the user in mind.
          </h5>
        </div>
        <div className="flex flex-col ">
          <span className=" h-107.75 ">
            <img className="w-full h-full " src={victoryImg}></img>
          </span>
          <h5 className="font-inter text-[35px] font-semibold">
            Victory Nwanoruo
          </h5>
          <h5 className="font-inter text-[35px] font-medium">
            Full-stack Developer
          </h5>
          <h5 className="font-inter font-medium text-[24px] text-gray-600">
            A full stack developer focused on building scalable high-performance
            web application that deliver real business value specialized in
            developing end-to -end solution from responsive, frontend to
            efficient, maintainable backend systems.
          </h5>
        </div>
      </div>
    </div>
  );
}
export default OurTerms;
