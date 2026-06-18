import lockKeyImg from "/images/LockKey.png";
import logoutImg from "/images/SignOut.png";
import bellImg from "/images/Bell.png";
import dollarCircle from "/images/CurrencyDollar.png";
function RightPanel() {
  return (
    <div className="w-full h-fit bg-[#FFFFFF]">
      {/**head content */}
      <span>
        <h5 className="min18pxMax20px font-medium font-sans">Account</h5>
      </span>
      {/**content */}
      <div className="mt-5 flex flex-col gap-2.5">
        <span className="flex items-center pt-2.5 pb-2.5 pl-0.75 pr-0.75 gap-4 pointer">
          <img className="w-6 h-6" src={lockKeyImg}></img>
          <h5 className="font-normal font-sans text-[16px] line-clamp-1">
            Change Password
          </h5>
        </span>
        {/**content */}
        <span className="flex items-center pt-2.5 pb-2.5 pl-0.75 pr-0.75 gap-4 pointer">
          <img className="w-6 h-6" src={bellImg}></img>
          <h5 className="font-normal font-sans text-[16px] line-clamp-1">
            Billing History
          </h5>
        </span>
        {/**content */}
        <span className="flex items-center pt-2.5 pb-2.5 pl-0.75 pr-0.75 gap-4 pointer">
          <img className="w-6 h-6" src={dollarCircle}></img>
          <h5 className="font-normal font-sans text-[16px] line-clamp-1">
            Notification Settings
          </h5>
        </span>
        {/**logout */}
        <span className="flex items-center pt-2.5 pb-2.5 pl-0.75 pr-0.75 gap-4 pointer">
          <img className="w-6 h-6" src={logoutImg}></img>
          <h5 className="font-normal font-sans text-[16px] line-clamp-1">
            Logout
          </h5>
        </span>
      </div>
    </div>
  );
}
export default RightPanel;
