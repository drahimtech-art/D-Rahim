import reloadIcon from "/images/icons/reloadIcon.png";
function TopBarNotificationCard({
  title,
  content,
  time,
  isAction,
}: {
  title: string;
  content: string;
  time: string;
  isAction: boolean;
}): React.ReactElement {
  return (
    <section className="min-w-[300px] w-fit h-fit p-3.25 pr-6.25 bg-[#FFFFFF] rounded-[10px]">
      <div className="flex gap-4 h-fit">
        <div className="bg-[#757575] w-[4px] min-h-full rounded-[4px] rotate-180"></div>
        <div className="flex flex-col gap-3.25">
          {/**notification title */}
          <h5
            className="font-inter text-[14px] font-medium"
            style={{
              color: isAction ? "#D43C50" : "black",
            }}
          >
            {title}
          </h5>
          {isAction ? (
            <div className="pl-2.5 pr-2.5 pt-2 pb-2 flex gap-2.5">
              <img
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
                src={reloadIcon}
              />
              <h5 className="font-normal font-inter text-[16px]">Retry</h5>
            </div>
          ) : (
            <div className="flex flex-col gap-1.25">
              {/**content */}
              <h5 className="font-inter text-[14px] font-normal">{content}</h5>
              {/**time */}
              <h5 className=" font-italic text-[14px] font-light">{time}</h5>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default TopBarNotificationCard;
