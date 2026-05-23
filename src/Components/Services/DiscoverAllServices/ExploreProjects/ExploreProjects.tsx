import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image0 from "/images/p0.png";
import image1 from "/images/p1.png";
import image2 from "/images/p2.png";
import image3 from "/images/p3.png";
import image4 from "/images/p4.png";
import image5 from "/images/p5.png";
import image6 from "/images/p6.png";
import image8 from "/images/p8.png";
import image9 from "/images/p9.png";
import image10 from "/images/p10.png";
import image11 from "/images/p11.png";
import image12 from "/images/p12.png";
import image14 from "/images/p14.png";
import image13 from "/images/p13.png";
import image16 from "/images/p16.png";
import image17 from "/images/p17.png";
import Top from "../../../Top/Top";
import Card from "./Card";
import End from "../../../End/End";
type PropContent = {
  popHeadText: string;
  popUpHeadding: string;
  popImageUrl?: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
const projectsData: PropContent[] = [
  {
    popUpHeadding:
      "Creating pathways of hope, support, and sustainable change for underserved communities.",
    popHeadText: "Alhafeez Foundation",
    popImageUrl: image0,
    capabilities: [
      "Community Support",
      "Humanitarian Aid",
      "Education Programes",
    ],
    duration: "3months",
    team: ["Program Coordinator", "Volunteers", "Community Leaders"],
    location: "Nigeria",
    industry: ["Non-profit Organization", "Humanitarian Services"],
    endText:
      "Alhafeez foundation is a non-profit organization dedicated to providing support, resources, and opportunities to underserved communities through sustainable initiatives.",
  },
  {
    popUpHeadding:
      "Creating seamless, secure, and accessible financial solutions for everyday transactions.",
    popHeadText: "Wankard",
    popImageUrl: image1,
    capabilities: [
      "UI/UX Design",
      "Mobile App Design",
      "Fintech Strategy",
      "User Research",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Fintech", "Digital Payments"],
    endText:
      "wankard is a fintech app focused on creating a clean, accessible, and efficient platform for day to day transactions",
  },
  {
    popUpHeadding:
      "Creating smarter pathways to career growth, opportunity, and seamless job connections.",
    popHeadText: "Jobified Employer",
    popImageUrl: image2,
    capabilities: [
      "UI/UX Design",
      "Mobile App Design",
      "Fintech Strategy",
      "User Research",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Recruitment", "Career Technology"],
    endText:
      "Creating a job-matching platform designed to bridge the gap between job seekers and employers through a smooth, user-centered experience.",
  },
  {
    popUpHeadding:
      "Creating faster, smarter, and more connected mobile experiences for everyday communication.",
    popHeadText: "Snap Mobile",
    popImageUrl: image3,
    capabilities: [
      "UI/UX Design",
      "Mobile App Design",
      "User Experience Strategy",
      "User Research",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Mobile Technology", "Communication"],
    endText:
      "Snap Mobile case study showcases our end-to-end UX design process from research and wireframing to prototyping and final UI design.",
  },
  {
    popUpHeadding:
      "Creating smarter financial insights, seamless tracking, and better money management for everyone.",
    popHeadText: "Finance All",
    popImageUrl: image4,
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
    popUpHeadding:
      "Creating seamless travel experiences through smarter booking, planning, and journey management.",
    popHeadText: "Travel Express",
    popImageUrl: image5,
    capabilities: [
      "UI/UX Design",
      "Travel Booking Experience",
      "User Research",
      "Mobile App Design",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Travel Technology", "Transportation"],
    endText:
      "Travel express is a travel experience platform designed to simplify trip planning and enhance the way users explore new destinations",
  },
  {
    popUpHeadding:
      "Simplifying document conversion through speed, accuracy, and seamless accessibility.",
    popHeadText: "Pdf to word",
    popImageUrl: image10,
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
  {
    popUpHeadding:
      "Creating accessible healthcare solutions that connect people to better care and wellness.",
    popHeadText: "Vite-Care",
    popImageUrl: image11,
    capabilities: [
      "UI/UX Design",
      "Healthcare Experience",
      "User Research",
      "Mobile App Design",
    ],
    duration: "3months",
    team: [
      "Product Designer",
      "UI Designer",
      "Healthcare Research",
      "Developer",
    ],
    location: "Nigeria",
    industry: ["HealthTech", "Healthcare"],
    endText:
      "VitaCare is a digital healthcare platform designed to simplify access to medical services and help users to manage their health anytime.",
  },
  {
    popUpHeadding:
      "Creating secure and seamless authentication experiences for modern digital platforms.",
    popHeadText: "Razor",
    popImageUrl: image14,
    capabilities: [
      "UI/UX Design",
      "Mobile App Design",
      "Fintech Strategy",
      "User Research",
    ],
    duration: "2months",
    team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
    location: "Nigeria",
    industry: ["Cybersecurity", "Authentication Technology"],
    endText:
      "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and inteuitve interface",
  },
  {
    popUpHeadding:
      "Transforming ideas into functional living spaces through smart design and visualization.",
    popHeadText: "Home Architect",
    popImageUrl: image17,
    capabilities: [
      "UI/UX Design",
      "Architecture Planning",
      "3D Visualization",
      "Product Research",
    ],
    duration: "3months",
    team: [
      "Product Designer",
      "UI Designer",
      "Architectural Consultant",
      "Developer",
    ],
    location: "Nigeria",
    industry: ["Architecture", "Real Estate Tecnology"],
    endText:
      "A design platform that helps users plan, visualize, and create functional home layouts through an intuitive and user-friendly interface.",
  },
  {
    popUpHeadding:
      "Creating secure identity verification through fast, seamless, and intelligent facial recognition.",
    popHeadText: "Face Scan",
    popImageUrl: image6,
    capabilities: [
      "UI/UX Design",
      "Biometric Authentication",
      "Security Research",
      "Mobile Experience Design",
    ],
    duration: "2months",
    team: ["Product Designer", "UI Designer", "Developer"],
    location: "Nigeria",
    industry: ["Security Technology", "Biometic Solutions"],
    endText:
      "a biometric authentication system that enables secure and seamless user verification using facial recognition technology",
  },
  {
    popUpHeadding:
      "Empowering businesses to deploy, manage, and scale digital products with speed and efficiency.",
    popHeadText: "Xnora",
    popImageUrl: image9,
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
    popUpHeadding:
      "Creating accessible healthcare solutions that connect people to quality care anytime, anywhere.",
    popHeadText: "Medi Link",
    popImageUrl: image13,
    capabilities: [
      "UI/UX Design",
      "Healtcare Experience Design",
      "User Research",
      "Mobile App Design",
    ],
    duration: "3months",
    team: [
      "Product Designer",
      "UI Designer",
      "Healthcare Researcher",
      "Developer",
    ],
    location: "Nigeria",
    industry: ["HealthTech", "Healthcare"],
    endText:
      "A Clean, modern, and easy to remember. It sounds trustworthy and feels like a real health-tech product",
  },
  {
    popUpHeadding:
      "Creating faster, smarter, and more meaningful communication experiences for everyday conversations.",
    popHeadText: "Target Message",
    popImageUrl: image12,
    capabilities: [
      "UI/UX Design",
      "Messaging Experience Design",
      "User Research",
      "Moblie App Design",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "Developer"],
    location: "Nigeria",
    industry: ["Communication Technology", "Social Networking"],
    endText:
      "A mobile app designed to put essential end-to-end encrypted messaging in the hands of users",
  },
  {
    popUpHeadding:
      "Transforming youth service operations through seamless digital experiences, accessibility, and efficiency.",
    popHeadText: "NYSC Redesign web App 🇳🇬",
    popImageUrl: image16,
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
    popUpHeadding:
      "Connecting people to delicious meals through fast, seamless, and convenient food ordering experiences.",
    popHeadText: "Come Chop",
    popImageUrl: image8,
    capabilities: [
      "UI/UX Design",
      "Food Ordering Experience",
      "User Research",
      "Mobile App Design",
    ],
    duration: "3months",
    team: ["Product Designer", "UI Designer", "Developer"],
    location: "Nigeria",
    industry: ["Food Technology", "Delivery Services"],
    endText:
      "Come Chop is a food delivery platform designed to connect users with local restaurants and",
  },
];
function ExploreProjects() {
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
  if (devicesWidth !== undefined && devicesWidth < 1000) {
    const url = "discover/all/services";
    return urlNavigator(url, { replace: true });
  }

  return (
    <>
      <Top />
      <div className="flex flex-col w-full gap-27.25">
        {projectsData.map((e, i) => {
          return <Card body={e} key={`project-key${i}`} />;
        })}
      </div>
      <End />
    </>
  );
}
export default ExploreProjects;
