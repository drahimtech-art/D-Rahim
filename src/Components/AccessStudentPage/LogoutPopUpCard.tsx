import { useState, useRef } from "react";
import { StudentsAppData } from "../ContextApi/StudentsApi";
import logoutIcon from "/images/logout_icon.png";
function LogoutPopUpCard() {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { setPopUpCard, setPopUpControl } = userDetails;
  const logoutControlFuncRef = useRef<HTMLButtonElement | null>(null);
  const [isLogedOut, setIsLogedOut] = useState<boolean>(false);
  async function logout() {
    if (!logoutControlFuncRef.current || isLogedOut) return;
    setIsLogedOut(true);
    logoutControlFuncRef.current.classList.remove("AllowedPointerForButton");
    logoutControlFuncRef.current.classList.add("notallowedPointerForButton");
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const requst = await fetch(`${serverPort}/signin/user/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
          "Content-Type": "application/json",
        },
      });
      const responds = await requst.json();
      if (responds.ok) {
        const CLIENT_KEY = "CLIENT_KEY";
        localStorage.setItem(CLIENT_KEY, JSON.stringify(null));
        setIsLogedOut(false);
        setPopUpControl(false);
        setPopUpCard(undefined);
        logoutControlFuncRef.current.classList.remove(
          "notallowedPointerForButton",
        );
        logoutControlFuncRef.current.classList.add("AllowedPointerForButton");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsLogedOut(false);
      setPopUpControl(false);
      setPopUpCard(undefined);
      logoutControlFuncRef.current.classList.remove(
        "notallowedPointerForButton",
      );
      logoutControlFuncRef.current.classList.add("AllowedPointerForButton");
    }
  }
  function cancelLogout() {
    setPopUpControl(false);
    setPopUpCard(undefined);
  }
  return (
    <div className="w-full max-w-135 h-fit flex justify-center bg-[#F0FFF1] rounded-[30px] p-10">
      <div className="w-full h-full ">
        <div className="w-full h-full flex justify-center">
          {/***heading and image */}
          <div className="w-81.75 h-fit">
            <span className="w-full flex justify-center">
              <h5 className="font-medium font-sans text-[#F12A2A] min28pxMax30">
                LOG OUT
              </h5>
            </span>
            <img
              className="w-fit max-w-71.75 h-fit max-h-71.75 mt-1.75"
              src={logoutIcon}
            ></img>
            <span className="w-full flex justify-center">
              <h5 className="mt-4 font-normal font-sans min18pxMax20px text-black">
                Are you sure you want to log out?
              </h5>
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          {/**action logout and cancel button */}
          <div className="w-100.25 h-fit flex mt-10">
            <button
              className="mr-auto w-30.5 h-11 rounded-[10px] border  border-gray-500 flex justify-center items-center pointer"
              onClick={cancelLogout}
            >
              <h5 className="font-normal font-sans min18pxMax20px">Cancel</h5>
            </button>
            <button
              className="ml-auto w-30.5 h-11 rounded-[10px] border border-gray-500 flex justify-center items-center AllowedPointerForButton"
              onClick={logout}
              ref={logoutControlFuncRef}
            >
              <h5 className="font-normal font-sans min18pxMax20px">Confirm</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogoutPopUpCard;
