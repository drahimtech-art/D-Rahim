import jimohImg from "/images/27.png";
import abdulmalikImg from "/images/26.png";
import victoryImg from "/images/28.png";
function OurTerms() {
  return (
    <div className="mt-10 sm:mt-27.25 lg:pl-10 lg:pr-10 pl-5 pr-5 w-full">
      <span>
        <h5 className="fontPoppins font-semibold font-size-heading">
          Our Teams
        </h5>
      </span>
      <div className="mt-10 sm:mt-15 flex flex-wrap sm:grid sm:grid-cols-3 sm:max-h-203 justify-evenly gap-10">
        <div className="flex flex-col sm:h-203">
          <span className=" max-h-107.75">
            <img className="w-full h-full rounded-3xl" src={jimohImg}></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Jimoh Abdulrahim
          </h5>
          <h5 className="font-inter ourTermHeadSubText font-medium ">
            Founder & CEO
          </h5>
          <h5 className="font-inter font-medium ourWorkHeadMenu text-gray-600 ">
            A passionate UI/UX designer focused on helping startups & founders,
            tech entrepreneurs, developers & software teams, e-commerce sellers,
            small & medium businesses, nonprofits & NGO, creative professionals
            to build simple, beautiful, and user-friendly digital products.
          </h5>
        </div>
        <div className="flex flex-col ">
          <span className="   max-h-107.75">
            <img
              className="w-full h-full rounded-3xl"
              src={abdulmalikImg}
            ></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Abdulmalik Mohammed
          </h5>
          <h5 className="font-inter ourTermHeadSubText font-medium">
            Co-Founder
          </h5>
          <h5 className="font-inter font-medium ourWorkHeadMenu text-gray-600">
            A detail-oriented UI/UX Designer helping brands and startups turn
            ideas into user-friendly, engaging digital products. I focus on
            creating clean, functional designs that make an impact, always with
            the user in mind.
          </h5>
        </div>
        <div className="flex flex-col ">
          <span className="   max-h-107.75 ">
            <img className="w-full h-full " src={victoryImg}></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Victory Nwanoruo
          </h5>
          <h5 className="font-inter ourTermHeadSubText font-medium">
            Full-stack Developer
          </h5>
          <h5 className="font-inter font-medium ourWorkHeadMenu text-gray-600">
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
