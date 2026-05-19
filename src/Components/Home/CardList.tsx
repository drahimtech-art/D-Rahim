import Card from "../Card/Card";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl?: string;
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
      <div className="flex flex-wrap min-[1000px]:grid  min-[1000px]:grid-cols-3  min-[1000px]:gap-10 gap-5 min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 justify-around  mt-4 min-[1000px]:mt-8 items-stretch">
        {productData.map((e, i) => {
          return (
            <Card
              key={`card${i}`}
              image={e.image}
              text={e.text}
              subText={e.subText}
              popUpHeadding={e.popUpHeadding}
              popHeadText={e.popHeadText}
              popImageUrl={e.popImageUrl}
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
