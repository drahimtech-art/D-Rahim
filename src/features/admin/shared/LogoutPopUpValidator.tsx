import logoutIcon from "/images/logout_icon.png";
function LogoutPopUpValidator({
  cancelLogout,
}: {
  cancelLogout: () => void;
}): React.ReactElement {
  return (
    <section className="w-full max-w-135 h-fit flex justify-center bg-[#F0FFF1] rounded-[30px] p-10">
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
              className="mr-auto w-30.5 h-11 rounded-full hover:bg-gray-300 border  border-gray-300 flex justify-center items-center pointer"
              onClick={cancelLogout}
            >
              <h5 className="font-normal font-sans min18pxMax20px">Cancel</h5>
            </button>
            <button className="ml-auto w-30.5 h-11 rounded-full hover:bg-[#ecaabeb9] border border-gray-300 flex justify-center items-center AllowedPointerForButton">
              {/**onClick={logout}
              ref={logoutControlFuncRef} */}
              <h5 className="font-normal font-sans min18pxMax20px">Confirm</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogoutPopUpValidator;
