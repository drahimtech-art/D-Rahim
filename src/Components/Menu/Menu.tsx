import Logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";
type MenuControl = {
  setMenuControl: React.Dispatch<React.SetStateAction<boolean>>;
};
function Menu(props: MenuControl) {
  const urlNavigator = useNavigate();
  function services() {
    urlNavigator("/services", { replace: true });
  }
  function work() {
    urlNavigator("/", { replace: true });
  }
  function about() {
    urlNavigator("/about", { replace: true });
  }
  function mentorship() {
    urlNavigator("/mentorship", { replace: true });
  }
  function contact() {
    urlNavigator("/contact", { replace: true });
  }
  return (
    <div className="w-full h-screen fixed z-50 top-0 p-7 bg-[#030e03]">
      <div className="flex items-center">
        <div className="flex text-gray-200">
          <div className="w-7  sm:w-8 h-10">
            <img src={Logo} alt="logo"></img>
          </div>
          <span className="mt-0.5">
            <h5 className="font-inter font-semibold text-[1.1rem]">D'RAHIM</h5>
            <h5 className="-mt-1 font-semibold text-[0.5rem]">
              TECH INNOVATION
            </h5>
          </span>
        </div>
        <span className="ml-auto">
          <i
            className="fa fa-xmark text-[1.3rem] text-gray-200"
            onClick={() => props.setMenuControl(false)}
          ></i>
        </span>
      </div>
      <div className="w-full mt-20 flex flex-col gap-3">
        <span
          className="p-2.5 menuText text-gray-200 font-inter font-semibold "
          onClick={work}
        >
          <h5>Work</h5>
        </span>
        <span className="p-2.5 menuText text-gray-200 font-inter font-semibold ">
          <h5>Services</h5>
        </span>
        <span
          className="p-2.5 menuText text-gray-200 font-inter font-semibold "
          onClick={about}
        >
          <h5>About</h5>
        </span>
        <span
          className="p-2.5 menuText text-gray-200 font-inter font-semibold "
          onClick={mentorship}
        >
          <h5>Mentorship</h5>
        </span>
        <span
          className="p-2.5 menuText text-green-500 font-inter font-semibold "
          onClick={contact}
        >
          <h5>Get in touch</h5>
        </span>
        <span className="p-2.5 menuText text-green-500 font-inter font-semibold ">
          <h5>Book a call</h5>
        </span>
      </div>
    </div>
  );
}
export default Menu;
