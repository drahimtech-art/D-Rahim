import Card from "../Card/Card";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
};
type Body = {
  body: OurWorkData[];
};
function CardList(props: Body) {
  const productData = props.body;
  if (!productData) return;
  return (
    <>
      <div className="grid grid-cols-3  gap-10 lg:pl-10 lg:pr-10 pl-5 pr-5 justify-around  mt-4 lg:mt-8 items-stretch">
        {productData.map((e, i) => {
          return (
            <Card key={`card${i}`} imageUrl={e.image} imageText={e.text} />
          );
        })}
      </div>
    </>
  );
}
export default CardList;
