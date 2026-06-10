import Logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Menu from "../Menu/Menu";
function Top() {
  const [menuControl, setMenuControl] = useState<boolean>(false);
  const serverPath = window.location.hash;
  const workRef = useRef<HTMLSpanElement | null>(null);
  const servicesRef = useRef<HTMLSpanElement | null>(null);
  const aboutRef = useRef<HTMLSpanElement | null>(null);
  const mentorshipRef = useRef<HTMLSpanElement | null>(null);
  const menuDivRef = useRef<HTMLDivElement | null>(null);
  const topDivRef = useRef<HTMLDivElement | null>(null);
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
  useEffect(() => {
    if (
      !workRef.current ||
      !servicesRef.current ||
      !aboutRef.current ||
      !mentorshipRef.current
    )
      return;
    if (serverPath.length === 2) {
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
  useEffect(() => {
    if (!menuDivRef.current || !topDivRef.current) return;
    if (menuControl) {
      menuDivRef.current.classList.remove("menuAnimationSlideIn");
      menuDivRef.current.classList.add("menuAnimationSlideIn-open");
      document.body.style.overflow = "hidden";
      document.body.style.background = "rgba(219, 218, 218, 0.527)";
      topDivRef.current.style.background = "rgba(219, 218, 218, 0.527)";
    } else {
      menuDivRef.current.classList.remove("menuAnimationSlideIn-open");
      menuDivRef.current.classList.add("menuAnimationSlideIn");
      document.body.style.overflow = "";
      document.body.style.background = "none";
      topDivRef.current.style.background = "white";
    }
  }, [menuControl]);
  return (
    <>
      <div className="bg-white  sticky top-0  z-5">
        <div
          className="flex  w-full max-h-28.75  z-5 items-center min-[1000px]:p-10 p-5    bg-white  "
          ref={topDivRef}
        >
          <div className="flex">
            <div className="w-7  min-[1000px]:w-8 h-10">
              <img src={Logo} alt="logo"></img>
            </div>
            <span className="mt-0.5">
              <h5 className="font-inter font-semibold text-[1.1rem]">
                D'RAHIM
              </h5>
              <h5 className="-mt-1 font-semibold text-[0.5rem]">
                TECH INNOVATION
              </h5>
            </span>
          </div>
          <div className="min-[1000px]:flex gap-6 ml-auto hidden">
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
          <div className="hidden min-[1000px]:block ml-auto ">
            <span
              className="block w-fit h-fit min-[1000px]:p-2 p-1 min-[1000px]:pl-7 min-[1000px]:pr-7 pr-5 pl-5 rounded-full bg-primary-green hover:bg-secondary-green pointer"
              onClick={contact}
            >
              <h5 className="text-white ourWorkHeadMenu  font-inter ">
                Get In Touch{" "}
              </h5>
            </span>
          </div>
          <div className="block min-[1000px]:hidden ml-auto">
            <i
              className="fa fa-bars text-[1.5rem]"
              onClick={() => setMenuControl(!menuControl)}
            ></i>
          </div>
        </div>
      </div>
      <div
        className="menuAnimationSlideIn min-[1000px]:hidden"
        ref={menuDivRef}
      >
        <Menu setMenuControl={setMenuControl} />
      </div>
    </>
  );
}
export default Top;
