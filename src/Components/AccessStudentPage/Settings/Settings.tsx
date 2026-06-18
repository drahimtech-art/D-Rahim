import userProfile from "/images/userImg.png";
import pencil from "/images/pencil.png";
import RightPanel from "./RightPanel";
function Settings() {
  return (
    <div className="w-full h-fit">
      {/**head */}
      <span>
        <h5 className="font-medium font-sans min20Max24px">My Profile</h5>
      </span>
      {/**content */}
      <div className="mt-7.5 flex gap-22.75">
        {/**profile image */}
        <div className="flex  w-fit flex-col gap-2">
          <span className="block w-35 h-35 rounded-full">
            <img className="w-full h-full" src={userProfile}></img>
          </span>
          <h5 className="text-[16px] text-center font-normal font-sans">
            Edit profile photo
          </h5>
        </div>
        {/**edit content and options */}
        <div className="w-full min-w-86.5 max-w-121 flex flex-col gap-5">
          {/**full name section */}
          <div className="w-full h-fit flex items-center gap-10">
            {/**first name */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">Full Name</h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={"Abdulbasit"}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
            {/**last name */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">Surname</h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input className="w-full h-full pl-2" value={"Sule"}></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
          </div>
          {/**Dath of birth & phone number */}
          <div className="w-full h-fit flex items-center gap-10">
            {/**dath of birth */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">
                Date of birth
              </h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={"23/05/2000"}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
            {/**Phone number */}
            <span className="flex flex-col">
              <h5 className="font-normal font-sans text-[16px]">
                Phone number
              </h5>
              <span className="w-full  flex p-2.5 items-center border border-gray-500 rounded-lg h-12.5">
                <input
                  className="w-full h-full pl-2"
                  value={"08055489012"}
                ></input>
                <img className="w-5 h-5" src={pencil}></img>
              </span>
            </span>
          </div>
          {/**bio and action button */}
          <div className="w-full h-30.5 flex flex-col">
            <span className="flex h-full flex-col">
              <h5 className="font-normal font-sans text-[16px]">Bio</h5>
              <span className="w-full h-full  p-2.5 border border-gray-500 rounded-lg ">
                <textarea
                  className="w-full max-w-115 h-full pl-2"
                  value={
                    "A Ui/Ux Designer in the making| Building intuitive digital experience that solves real user problems learning the ropes"
                  }
                ></textarea>
              </span>
            </span>
          </div>
          {/**action button */}
          <div className="w-full mt-2.5 h-fit flex justify-center">
            <button className="pointer w-fit h-fit bg-[#11AC76] rounded-[10px] p-2.5 pl-3.75 pr-3.75]">
              <h5 className="font-medium font-sans text-[16px] text-[#FFFFFF]">
                Save Changes
              </h5>
            </button>
          </div>
        </div>
        {/**end right panel*/}
        <div className="w-full max-w-60.5 ml-auto">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
export default Settings;
