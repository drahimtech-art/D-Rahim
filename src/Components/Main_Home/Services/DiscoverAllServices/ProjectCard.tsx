import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "/images/1.png";
import imageP1 from "/images/p1.png";
import image4 from "/images/5.png";
import image5 from "/images/4.png";
import imageP4 from "/images/p4.png";
import imageP5 from "/images/p5.png";
import image10 from "/images/10.png";
import imageP10 from "/images/p10.png";
import image9 from "/images/9.png";
import imageP9 from "/images/p9.png";
import image16 from "/images/16.png";
import imageP16 from "/images/p16.png";
import FAQ from "../../ProjectInfo/FAQ";
import CardList from "../../Home/CardList";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
const ourWorkRender: OurWorkData[] = [
  {
    image: image9,
    text: "Xnora Web App 🇳🇬",
    subText:
      "Xnora is a modern web platform built for seamless deployment and efficient performance. It provides a clean, environment for deployment",
    popUpHeadding:
      "Empowering businesses to deploy, manage, and scale digital products with speed and efficiency.",
    popHeadText: "Xnora",
    popImageUrl: imageP9,
    capabilities: [
      "UI/UX Design",
      "Web Platform Design",
      "Developer Experience",
      "Product Strategy",
    ],
    duration: "3months",
    team: [
      "Product Designer",
      "UI Designer",
      "Developer",
      "Product Strategist",
    ],
    location: "Nigeria",
    industry: ["Cloud Technology", "Software Development"],
    endText:
      "Xnora is a modern web platform built for seamless deployment and efficient performance. It provides a clean, enviroment for deployment.",
  },
  {
    image: image1,
    text: "Wankard Moblie App 🇳🇬",
    subText:
      "Wankard is a fintech app focused on creating a clean, accessible, and efficient platform for day to day transactions.",
    popUpHeadding:
      "Creating seamless, secure, and accessible financial solutions for everyday transactions.",
    popHeadText: "Wankard",
    popImageUrl: imageP1,
    capabilities: [
      "UI/UX Design",
      "Mobile App Design",
      "Fintech Strategy",
      "User Research",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Fintech Digital Payments"],
    endText:
      "wankard is a fintech app focused on creating a clean, accessible, and efficient platform for day to day transactions",
  },
  {
    image: image16,
    text: "NYSC Redesign web App ",
    subText:
      "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
    popUpHeadding:
      "Transforming youth service operations through seamless digital experiences, accessibility, and efficiency.",
    popHeadText: "NYSC Redesign web App 🇳🇬",
    popImageUrl: imageP16,
    capabilities: [
      "UI/UX Design",
      "System Resign",
      "User Research",
      "Product Strategy",
    ],
    duration: "4months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Government Technology", "Public Services"],
    endText:
      "A user-centered digital project aimed at improving the experience of corps members by simplifing processes, and modernizing the overall platform",
  },
  {
    image: image4,
    text: "Travel Express Moblie App",
    subText:
      "Travel express is a travel experience platform designed to simplify trip planning and enhance the way users explore new destinations",
    popUpHeadding:
      "Creating seamless travel experiences through smarter booking, planning, and journey management.",
    popHeadText: "Travel Express",
    popImageUrl: imageP5,
    capabilities: [
      "UI/UX Design",
      "Mobile App Design",
      "Fintech Strategy",
      "User Research",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Travel Technology", "Transportation"],
    endText:
      "Travel express is a travel experience platform designed to simplify trip planning and enhance the way users explore new destinations",
  },
  {
    image: image5,
    text: "Finance All Website 🇦🇺🇺🇸",
    subText:
      "A financial dashboard designed to provide a clear, real-time overview of personal and business finances. It delivers insights and analytics. ",
    popUpHeadding:
      "Creating smarter financial insights, seamless tracking, and better money management for everyone.",
    popHeadText: "Finance All",
    popImageUrl: imageP4,
    capabilities: [
      "UI/UX Designer",
      "Finacial Dashboard Design",
      "Data Visualization",
      "User Research",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Fintech", "Financial Analytics"],
    endText:
      "A financial dashboard designed to provide a clear, real-time overview of personal and business finaces. it delivers insights and analytics.",
  },
  {
    image: image10,
    text: "Pdf to word web app 🇳🇬",
    subText:
      "PDF to Word is a simple and efficient tool for converting PDF files into fully editable Word documents while preserving layout and formatting.",
    popUpHeadding:
      "Simplifying document conversion through speed, accuracy, and seamless accessibility.",
    popHeadText: "Pdf to word",
    popImageUrl: imageP10,
    capabilities: [
      "UI/UX Design",
      "Document Conversion Flow",
      "Product Research",
      "Web App Design",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "Developer"],
    location: "Nigeria",
    industry: ["Productivity Tools", "Document Technology"],
    endText:
      "PDF to Word is a simple and efficient tool for converting PDF files into fully editable Word documents while preserving layout and formatting",
  },
];
function ProjectCard() {
  const urlNavigator = useNavigate();
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  useEffect(() => {
    const handleWindowResize = () => {
      if (typeof window !== undefined) {
        return setDevicesWidth(window.innerWidth);
      }
      return setDevicesWidth(0);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", () => handleWindowResize);
  }, []);
  function exploreBtw() {
    const url = "/explore/projects";
    urlNavigator(url, { replace: false });
  }
  function homeBtw() {
    const url = "/";
    urlNavigator(url, { replace: true });
  }
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 min-[1000px]:mt-30 mt-10">
        <span className="block min-[1000px]:mt-30 ">
          <h5 className="fontPoppins font-semibold min40Max60px">
            Our Projects
          </h5>
          <h5 className="min-[1000px]mt-5 mt-10 min16Max24px w-full  font-inter min-[1000px]:max-w-247.75">
            We’ve partnered with companies across a wide range of industries,
            from mobile banking to earthworks operations. What connects all our
            projects is a shared approach: deep empathy for end users, rapid
            iteration, and close collaboration with our clients’ teams.
          </h5>
        </span>
      </div>
      <div className="min-[1000px]:mt-15 mt-10 h-fit  ">
        {devicesWidth !== undefined && devicesWidth >= 1000 ? (
          <CardList body={ourWorkRender} isPC={true} isMoblie={false} />
        ) : (
          <CardList
            body={ourWorkRender}
            isPC={false}
            isMoblie={true}
            isNotClickCable={true}
          />
        )}
      </div>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 min-[1000px]:mt-27.25 mt-10">
        {devicesWidth !== undefined && devicesWidth >= 1000 ? (
          <button
            className="border-2 rounded-full pointer  w-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5 font-inter font-medium min16Max24px bg-transparent hover:bg-secondary-green hover:border-secondary-green hover:text-gray-200  text-black   transition-all"
            onClick={exploreBtw}
          >
            <h5 className="">Explore more projects</h5>
          </button>
        ) : (
          <button
            className="border-2 rounded-full pointer  w-fit sm:w-full sm:text-center pl-7.5 pr-7.5 pt-2.5 pb-2.5 font-inter font-medium min16Max24px bg-transparent hover:bg-secondary-green hover:border-secondary-green hover:text-gray-200  text-black   transition-all"
            onClick={homeBtw}
          >
            <h5 className="">Explore more projects</h5>
          </button>
        )}
      </div>
      <div className="mt-30 sm:pb-10 min-[1000px]:mb-0">
        <FAQ />
      </div>
    </>
  );
}
export default ProjectCard;
