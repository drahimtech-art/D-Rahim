import TopBar from "../../shared/TopBar";
import ProfileHead from "./components/ProfileHead";
function Settings() {
  return (
    <article className="w-full h-full  ">
      <TopBar
        heading={"Settings"}
        subHeading={"Manage your account and preferences."}
      />
      <article className="w-full p-5 pl-10 pr-10 mt-10 bg-[#FFFFFF] h-[735px] items-center rounded-[10px]">
        <section>
          <h5 className="font-semibold font-inter text-[22px]">My Profile</h5>
        </section>
        {/**content body */}
        <section className="w-full max-w-[700px] h-full mt-5 flex flex-col gap-[30px]">
          {/**profilr */}
          <ProfileHead />
        </section>
      </article>
    </article>
  );
}
export default Settings;
