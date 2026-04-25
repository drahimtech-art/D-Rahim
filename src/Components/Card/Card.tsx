type ImageData = {
  imageUrl: string;
  imageText: string;
  subText?: string;
};
function Card(props: ImageData) {
  return (
    <span className="flex flex-col grow items-stretch">
      <img className="w-full h-101  " src={props.imageUrl}></img>
      <h5 className="text-[1.3rem] font-bold ">{props.imageText}</h5>
      <h5 className="text-[24px] text-gray-600  font-medium font-inter">
        {props.subText}
      </h5>
    </span>
  );
}
export default Card;
