import Card from "./Card";
import type { ProjectData } from "../../../../storage/PortfolioProjectApi";
type Body = {
  body: ProjectData[];
  isPC: boolean;
  isMoblie: boolean;
  isNotClickCable?: boolean;
};
function CardList(props: Body) {
  const projectList = props.body;
  if (!projectList) return;
  return (
    <>
      <div className="flex flex-wrap min-[1000px]:grid  min-[1000px]:grid-cols-3  sm:gap-10 gap-5 min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 justify-around  mt-4 sm:mt-10 min-[1000px]:mt-8 items-stretch">
        {projectList.map((e, i) => {
          return (
            <Card
              key={`card${i}`}
              projectDate={e}
              isPC={props.isPC}
              isMoblie={props.isMoblie}
              isNotClickCable={props.isNotClickCable}
            />
          );
        })}
      </div>
    </>
  );
}
export default CardList;
