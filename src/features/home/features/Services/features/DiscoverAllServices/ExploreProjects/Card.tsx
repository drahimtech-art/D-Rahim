type BodyContent = {
  popHeadText: string;
  popUpHeadding: string;
  popImageUrl?: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
type Body = {
  body: BodyContent;
};

function Card(props: Body) {
  return (
    <div className="flex flex-col mt-10">
      <span className="pl-10 pr-10 ">
        <h5 className="font-inter font-medium ourWorkMenuText">
          {props.body.popHeadText}
        </h5>
        <h5 className="fontPoppins font-semibold font-size-heading mt-5">
          {props.body?.popUpHeadding}
        </h5>
      </span>
      <span className="mt-5 w-full max-h-198">
        <img className="w-full h-full" src={props.body.popImageUrl}></img>
      </span>
      <div className=" mt-27.25 pl-10 pr-10">
        <div className="flex gap-41 ">
          <span className="flex flex-col w-60 ">
            <span>
              <h5 className="font-inter font-medium text-[30px]">
                Capabilities
              </h5>
              {props.body.capabilities.map((e, i) => {
                return (
                  <h5
                    className=" font-inter  font-normal text-[20px]"
                    key={`capabilities-key-${i}`}
                  >
                    {e}
                  </h5>
                );
              })}
            </span>
          </span>
          {/** */}
          <span className="flex flex-col  ">
            <span className="">
              <h5 className="font-inter font-medium text-[30px]">Team</h5>
              {props.body.team.map((e, i) => {
                return (
                  <h5
                    className=" font-inter  font-normal text-[20px] line-clamp-3"
                    key={`team-key-${i}`}
                  >
                    {e}
                  </h5>
                );
              })}
            </span>
          </span>
          {/** */}
          <span className="flex flex-col ">
            <span className="">
              <h5 className="font-inter font-medium text-[30px]">Industry</h5>
              {props.body.industry.map((e, i) => {
                return (
                  <h5
                    className=" font-inter font-normal text-[20px] "
                    key={`industry-key-${i}`}
                  >
                    {e}
                  </h5>
                );
              })}
            </span>
          </span>
        </div>
        <div className="flex gap-41 mt-10">
          <span className="w-60 ">
            <h5 className="font-inter font-medium text-[30px]">Duration</h5>
            <h5 className=" font-inter font-normal text-[20px]">
              {props.body.duration}
            </h5>
          </span>
          <span className="w-53.5 ">
            <h5 className="font-inter font-medium text-[30px]">Location</h5>
            <h5 className="w-51.5 font-inter font-normal text-[20px]">
              {props.body.location}
            </h5>
          </span>
        </div>
        <div className="mt-13 ">
          <h5 className="font-inter font-normal text-[20.87px] w-238.5 ">
            {props.body.endText}
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Card;
