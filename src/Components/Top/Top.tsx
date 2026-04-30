import Logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
function Top() {
  const serverPath = window.location.pathname;
  const workRef = useRef<HTMLSpanElement | null>(null);
  const servicesRef = useRef<HTMLSpanElement | null>(null);
  const aboutRef = useRef<HTMLSpanElement | null>(null);
  const mentorshipRef = useRef<HTMLSpanElement | null>(null);
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
  useEffect(() => {
    if (
      !workRef.current ||
      !servicesRef.current ||
      !aboutRef.current ||
      !mentorshipRef.current
    )
      return;
    if (serverPath.length === 9) {
      mentorshipRef.current.classList.remove("border-black");
      mentorshipRef.current.classList.add("border-white");
      aboutRef.current.classList.remove("border-black");
      aboutRef.current.classList.add("border-white");
      servicesRef.current.classList.add("border-white");
      servicesRef.current.classList.remove("border-black");
      workRef.current.classList.remove("border-white");
      workRef.current.classList.add("border-black");
    } else {
      if (serverPath.split("/").includes("services")) {
        mentorshipRef.current.classList.remove("border-black");
        mentorshipRef.current.classList.add("border-white");
        aboutRef.current.classList.remove("border-black");
        aboutRef.current.classList.add("border-white");
        workRef.current.classList.add("border-white");
        workRef.current.classList.remove("border-black");
        servicesRef.current.classList.remove("border-white");
        servicesRef.current.classList.add("border-black");
      } else if (serverPath.split("/").includes("about")) {
        mentorshipRef.current.classList.remove("border-black");
        mentorshipRef.current.classList.add("border-white");
        servicesRef.current.classList.remove("border-black");
        servicesRef.current.classList.add("border-white");
        workRef.current.classList.add("border-white");
        workRef.current.classList.remove("border-black");
        aboutRef.current.classList.remove("border-white");
        aboutRef.current.classList.add("border-black");
      } else if (serverPath.split("/").includes("mentorship")) {
        aboutRef.current.classList.remove("border-black");
        aboutRef.current.classList.add("border-white");
        servicesRef.current.classList.remove("border-black");
        servicesRef.current.classList.add("border-white");
        workRef.current.classList.add("border-white");
        workRef.current.classList.remove("border-black");
        mentorshipRef.current.classList.remove("border-white");
        mentorshipRef.current.classList.add("border-black");
      }
    }
  }, [serverPath]);
  return (
    <div className="flex w-full h-28.75 items-center lg:p-10 p-7 pt-16 pb-16  bg-white sticky top-0 z-10">
      <div className="flex">
        <div className="w-8 h-10">
          <img src={Logo} alt="logo"></img>
        </div>
        <span className="mt-0.5">
          <h5 className="font-inter font-semibold text-[1.1rem]">D'RAHIM</h5>
          <h5 className="-mt-1 font-semibold text-[0.5rem]">TECH INNOVATION</h5>
        </span>
      </div>
      <div className="sm:flex gap-6 ml-auto hidden">
        <span
          className="border-b-2 border-white ourWorkHeadMenu   font-inter  pointer"
          onClick={work}
          ref={workRef}
        >
          <h5>Work</h5>
        </span>
        <span
          className="border-b-2 border-white ourWorkHeadMenu   font-inter  pointer"
          onClick={services}
          ref={servicesRef}
        >
          <h5>Services</h5>
        </span>
        <span
          className="border-b-2 border-white ourWorkHeadMenu   font-inter  pointer"
          onClick={about}
          ref={aboutRef}
        >
          <h5>About</h5>
        </span>
        <span
          className="border-b-2 border-white ourWorkHeadMenu   font-inter  pointer"
          onClick={mentorship}
          ref={mentorshipRef}
        >
          <h5>Mentorship</h5>
        </span>
      </div>
      <div className="ml-auto ">
        <span className="block w-fit h-fit lg:p-2 p-1 lg:pl-7 lg:pr-7 pr-5 pl-5 rounded-full bg-primary-green hover:bg-secondary-green pointer">
          <h5 className="text-white lg:text-[1.5rem] text-[1.3rem] font-inter ">
            Get In Touch{" "}
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Top;
