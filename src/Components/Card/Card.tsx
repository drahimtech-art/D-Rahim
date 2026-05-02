type ImageData = {
  imageUrl: string;
  imageText: string;
  subText?: string;
};
function Card(props: ImageData) {
  return (
    <span className="flex flex-col grow max-h-122.5 sm:max-h-full items-stretch">
      <img className="w-full h-full   max-h-101 sm:max-h-full " src={props.imageUrl}></img>
      <h5 className="logoMainText font-bold ">{props.imageText}</h5>
      <h5 className="ourWorkHeadMenu text-gray-600  font-medium font-inter">
        {props.subText}
      </h5>
    </span>
  );
}
export default Card;
