import warningIcon from "/images/icons/warning_icon.png";
import xmarkIcon from "/images/icons/bad_icon.png";
import { useEffect, useRef } from "react";
function PopUpNotifications({
  isWaring,
  message,
  closePopUp,
}: {
  isWaring: boolean;
  message: string;
  closePopUp: (boolean: boolean) => void;
}): React.ReactElement {
  const notificationBarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!notificationBarRef.current) return;
    notificationBarRef.current.classList.add("popInAnimation");
    const removeNotificationBar = setTimeout(() => {
      if (!notificationBarRef.current) return;
      notificationBarRef.current.classList.add("popOutAnimation");
      setTimeout(() => {
        closePopUp(false);
      }, 1500);
    }, 3000);
    return () => {
      clearTimeout(removeNotificationBar);
    };
  }, []);
  return (
    <article className="w-full h-[80px] bodyMaxSizing p-4 flex justify-center fixed top-0 ">
      <section
        className="w-[90%] h-fit pl-[24px] pr-[24px] pt-[20px] pb-[20px]  rounded-[8px] flex items-center gap-[16px] "
        style={{
          backgroundColor: isWaring ? "#FBF0DA" : "#F9E1E5",
        }}
        ref={notificationBarRef}
      >
        <img
          className="w-[14px] h-[14px]"
          src={isWaring ? warningIcon : xmarkIcon}
        ></img>
        <h5
          className="font-sans font-normal text-[16px] "
          style={{
            color: isWaring ? "#73510D" : "#AF233A",
          }}
        >
          {message}
        </h5>
      </section>
    </article>
  );
}
export default PopUpNotifications;
