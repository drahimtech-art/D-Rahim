import Head from "./Head";
import Content from "./Content/Content";
import type { SetStateAction } from "react";
type BackButtonControll = {
  setIsClassActive: React.Dispatch<SetStateAction<boolean>>;
};
function ClassContentCard(props: BackButtonControll) {
  return (
    <div className="w-full h-full">
      {/**head content and progress bar */}
      <Head setIsClassActive={props.setIsClassActive} />
      {/**content body */}
      <Content />
    </div>
  );
}
export default ClassContentCard;
