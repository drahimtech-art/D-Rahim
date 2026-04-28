import image1 from "/images/22.png";
import image2 from "/images/23.png";
import image3 from "/images/24.png";
function OurStudents() {
  return (
    <div className="mt-27.25 pl-10 pr-10">
      <span>
        <h5 className="fontPoppins font-semibold text-[80px]">Our Students</h5>
      </span>
      <div className="mt-15 flex gap-10 h-203 justify-around">
        <div className="flex flex-col w-111">
          <span className="w-111 h-107.75">
            <img className="w-full h-full" src={image1}></img>
          </span>
          <h5 className="font-inter text-[35px] font-semibold">Zainab Jimoh</h5>
          <h5 className="font-inter text-[24px] font-bold ">
            UI/UX Designer at H-Medix
          </h5>
          <h5 className="font-inter font-medium text-[24px] text-gray-600 ">
            "I went from knowing nothing about UX to securing a research role at
            Hmedix all thanks to this program."
          </h5>
        </div>
        <div className="flex flex-col w-111">
          <span className="w-111 h-107.75">
            <img className="w-full h-full" src={image2}></img>
          </span>
          <h5 className="font-inter text-[35px] font-semibold">Chinedu Paul</h5>
          <h5 className="font-inter text-[24px] font-bold">
            UI/UX Designer at Andela
          </h5>
          <h5 className="font-inter font-medium text-[24px] text-gray-600">
            "The practical approach of the mentorship was a game-changer for me.
            I now have confidence as a product designer."
          </h5>
        </div>
        <div className="flex flex-col w-111">
          <span className="w-111 h-107.75 ">
            <img className="w-full h-full " src={image3}></img>
          </span>
          <h5 className="font-inter text-[35px] font-semibold">
            Fumilayo Zuliat Alasela
          </h5>
          <h5 className="font-inter text-[24px] font-bold">
            UI/UX Designer at Multichoice
          </h5>
          <h5 className="font-inter font-medium text-[24px] text-gray-600">
            "Joining this mentorship was the best decision I made I landed my
            first job as a UI/UX designer at Multichoice."
          </h5>
        </div>
      </div>
    </div>
  );
}
export default OurStudents;
