import Card from "../Card/Card";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
type Body = {
  body: OurWorkData[];
  isPC: boolean;
  isMoblie: boolean;
};
function CardList(props: Body) {
  const productData = props.body;
  if (!productData) return;
  return (
    <>
      <div className="flex flex-wrap lg:grid  lg:grid-cols-3  sm:gap-10 gap-5 lg:pl-10 lg:pr-10  pl-5 pr-5 justify-around  mt-4 lg:mt-8 items-stretch">
        {productData.map((e, i) => {
          return (
            <Card
              key={`card${i}`}
              image={e.image}
              text={e.text}
              subText={e.subText}
              popUpHeadding={e.popUpHeadding}
              popHeadText={e.popHeadText}
              capabilities={e.capabilities}
              duration={e.duration}
              team={e.team}
              location={e.location}
              industry={e.industry}
              endText={e.endText}
              isPC={props.isPC}
              isMoblie={props.isMoblie}
            />
          );
        })}
      </div>
    </>
  );
}
export default CardList;
