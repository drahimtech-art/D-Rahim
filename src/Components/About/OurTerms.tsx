import jimohImg from "/images/27.png";
import abdulmalikImg from "/images/26.png";
import victoryImg from "/images/28.png";
import tpJimohImg from "/images/tp27.png";
import tpAbdulmalikImg from "/images/tp26.png";
import tpVictoryImg from "/images/tp28.png";
function OurTerms() {
  return (
    <div className="mt-10 min-[1000px]:mt-27.25 min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 w-full">
      <span>
        <h5 className="fontPoppins font-semibold font-size-heading">
          Our Teams
        </h5>
      </span>
      <div className="mt-10 min-[1000px]:mt-15 flex flex-wrap min-[1000px]:grid min-[1000px]:grid-cols-3 min-[1000px]:max-h-203 justify-evenly gap-10">
        <div className="flex flex-col min-[1000px]:h-203">
          <span className=" max-h-175 ">
            <img
              className="w-full h-full block sm:hidden imageDisplayOn rounded-3xl"
              src={jimohImg}
            ></img>
            <img
              className="w-full h-full hidden sm:block imageDisplayOff rounded-3xl"
              src={tpJimohImg}
            ></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Jimoh Abdulrahim
          </h5>
          <h5 className="font-inter ourTermHeadSubText font-medium ">
            Founder & CEO
          </h5>
          <h5 className="font-inter line-clamp-4  ourWorkHeadMenu text-gray-600 ">
            A passionate UI/UX designer focused on helping startups & founders,
            tech entrepreneurs, developers & software teams, e-commerce sellers,
            small & medium businesses, nonprofits & NGO, creative professionals
            to build simple, beautiful, and user-friendly digital products.
          </h5>
          <a
            className="w-fit font-inter line-clamp-4 font-medium ourWorkHeadMenu text-blue-600 pb border-b-2 border-blue-600"
            target="_blank"
            href="https://www.linkedin.com/in/jimoh-abdulrahim-a81378318/"
          >
            LinkedIn{" "}
          </a>
        </div>
        <div className="flex flex-col ">
          <span className="   max-h-175">
            <img
              className="w-full h-full block sm:hidden imageDisplayOn rounded-3xl"
              src={abdulmalikImg}
            ></img>
            <img
              className="w-full h-full hidden sm:block imageDisplayOff rounded-3xl"
              src={tpAbdulmalikImg}
            ></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Abdulmalik Mohammed
          </h5>
          <h5 className="font-inter ourTermHeadSubText font-medium">
            Co-Founder
          </h5>
          <h5 className="font-inter line-clamp-4  ourWorkHeadMenu text-gray-600">
            A detail-oriented UI/UX Designer helping brands and startups turn
            ideas into user-friendly, engaging digital products. I focus on
            creating clean, functional designs that make an impact, always with
            the user in mind.
          </h5>
          <a
            className="w-fit font-inter line-clamp-4 font-medium ourWorkHeadMenu text-blue-600 pb border-b-2 border-blue-600"
            target="_blank"
            href="https://www.linkedin.com/in/abdulmalik-mohammed-0b90a32b4/"
          >
            LinkedIn{" "}
          </a>
        </div>
        <div className="flex flex-col ">
          <span className="   max-h-175 ">
            <img
              className="w-full h-full block sm:hidden imageDisplayOn rounded-3xl"
              src={victoryImg}
            ></img>
            <img
              className="w-full h-full hidden sm:block imageDisplayOff rounded-3xl"
              src={tpVictoryImg}
            ></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Victory Nwanoruo
          </h5>
          <h5 className="font-inter ourTermHeadSubText font-medium">
            Full-stack Developer
          </h5>
          <h5 className="font-inter line-clamp-4  ourWorkHeadMenu text-gray-600">
            A full stack developer focused on building scalable high-performance
            web application that deliver real business value specialized in
            developing end-to -end solution from responsive, frontend to
            efficient, maintainable backend systems.
          </h5>
          <a
            className="w-fit font-inter line-clamp-4 font-medium ourWorkHeadMenu text-blue-600 pb border-b-2 border-blue-600"
            target="_blank"
            href="https://www.linkedin.com/in/victory-nwanoruo-2189493b4/"
          >
            LinkedIn{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default OurTerms;
