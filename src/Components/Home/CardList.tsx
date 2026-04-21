import Card from "../Card/Card";
import image0 from "/images/0.png";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";
import image4 from "/images/4.png";
import image5 from "/images/5.png";
function CardList() {
  const productData = [
    {
      image: image0,
      text: "branding",
    },
    {
      image: image1,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image2,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image3,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image4,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image5,
      text: "Mobile Design 🇳🇬",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 w-full gap-10 lg:pl-10 lg:pr-10 pl-5 pr-5 justify-around  mt-4 lg:mt-8 items-stretch">
        {productData.map((e, i) => {
          return (
            <Card key={`card${i}`} imageUrl={e.image} imageText={e.text} />
          );
        })}
      </div>
      <div className="flex justify-center gap-6 lg:mt-16 mt-8">
        <span className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full">
          <i className="fa fa-arrow-left text-gray-200 text-[1.2rem]"></i>
        </span>
        <span className="flex gap-4 self-center text-[1rem] lg:text-[1.2rem] text-gray-400 font-semibold">
          <h5 className="text-green-500">1</h5>
          <h5>2</h5>
          <h5>3</h5>
        </span>
        <span className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full">
          <i className="fa fa-arrow-right text-gray-200 text-[1.2rem]"></i>
        </span>
      </div>
    </>
  );
}
export default CardList;
