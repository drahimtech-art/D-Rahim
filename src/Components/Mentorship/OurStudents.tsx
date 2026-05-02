import image1 from "/images/22.png";
import image2 from "/images/23.png";
import image3 from "/images/24.png";
function OurStudents() {
  return (
    <div className="mt-10 sm:mt-27.25 lg:pl-10 lg:pr-10 pl-5  pr-5">
      <span>
        <h5 className="fontPoppins font-semibold font-size-heading">
          Our Students
        </h5>
      </span>
      <div className="mt-10 sm:mt-15 flex flex-wrap sm:grid sm:grid-cols-3 sm:max-h-203 justify-evenly gap-10">
        <div className="flex flex-col max-h-[602] sm:max-h-full">
          <span className=" max-h-107.75">
            <img className="w-full h-full" src={image1}></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Zainab Jimoh
          </h5>
          <h5 className="font-inter mentoshipIconText font-medium lg:font-bold ">
            UI/UX Designer at H-Medix
          </h5>
          <h5 className="font-inter font-medium ourWorkHeadMenu text-gray-600 ">
            "I went from knowing nothing about UX to securing a research role at
            Hmedix all thanks to this program."
          </h5>
        </div>
        <div className="flex flex-col ">
          <span className=" max-h-107.75">
            <img className="w-full h-full" src={image2}></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Chinedu Paul
          </h5>
          <h5 className="font-inter mentoshipIconText font-medium lg:font-bold">
            UI/UX Designer at Andela
          </h5>
          <h5 className="font-inter font-medium ourWorkHeadMenu text-gray-600">
            "The practical approach of the mentorship was a game-changer for me.
            I now have confidence as a product designer."
          </h5>
        </div>
        <div className="flex flex-col ">
          <span className=" max-h-107.75 ">
            <img className="w-full h-full " src={image3}></img>
          </span>
          <h5 className="font-inter ourTermHeadText font-semibold">
            Fumilayo Zuliat Alasela
          </h5>
          <h5 className="font-inter mentoshipIconText font-medium lg:font-bold">
            UI/UX Designer at Multichoice
          </h5>
          <h5 className="font-inter font-medium ourWorkHeadMenu text-gray-600">
            "Joining this mentorship was the best decision I made I landed my
            first job as a UI/UX designer at Multichoice."
          </h5>
        </div>
      </div>
    </div>
  );
}
export default OurStudents;
