import image0 from "/images/0.png";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";
import image4 from "/images/4.png";
import image5 from "/images/5.png";
import image6 from "/images/6.png";
import image9 from "/images/9.png";
import image10 from "/images/10.png";
import image11 from "/images/11.png";
import image12 from "/images/12.png";
import image14 from "/images/14.png";
import image16 from "/images/16.png";
import image17 from "/images/17.png";
import imageP0 from "/images/p0.png";
import imageP1 from "/images/p1.png";
import imageP2 from "/images/p2.png";
import imageP3 from "/images/p3.png";
import imageP4 from "/images/p4.png";
import imageP5 from "/images/p5.png";
import imageP6 from "/images/p6.png";
import imageP9 from "/images/p9.png";
import imageP10 from "/images/p10.png";
import imageP11 from "/images/p11.png";
import imageP12 from "/images/p12.png";
import imageP14 from "/images/p14.png";
import imageP16 from "/images/p16.png";
import imageP17 from "/images/p17.png";
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
type DesignType = {
  moblieDesign: OurWorkData[];
  websiteDesign: OurWorkData[];
  branding: OurWorkData[];
};
const workType: DesignType = {
  moblieDesign: [
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
      image: image3,
      text: "Snap Moblie App",
      subText:
        "This case study showcases our end-to-end UX design process from research and wireframing to prototyping and final UI design.",
      popUpHeadding:
        "Creating faster, smarter, and more connected mobile experiences for everyday communication.",
      popHeadText: "Snap Moblie",
      popImageUrl: imageP3,
      capabilities: [
        "UI/UX Design",
        "Mobile App Design",
        "Fintech Strategy",
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
      image: image2,
      text: "Jobified Moblie App 🇳🇬",
      subText:
        "Creating a job-matching platform designed to bridge the gap between job seekers and employers through a smooth, user-centered experience.",
      popUpHeadding:
        "Creating smarter pathways to career growth, opportunity, and seamless job connections.",
      popHeadText: "Jobified Employer",
      popImageUrl: imageP2,
      capabilities: [
        "UI/UX Design",
        "Mobile App Design",
        "Fintech Strategy",
        "User Research",
      ],
      duration: "3months",
      team: ["Product Designer", "UI Designer", "UX Researcher", "Developer"],
      location: "Nigeria",
      industry: ["Recruitment Career Technology"],
      endText:
        "Creating a job-matching platform designed to bridge the gap between job seekers and employers through a smooth, user-centered experience.",
    },
    {
      image: image12,
      text: "Health PocketMoblie App 🇳🇬",
      subText:
        "Health in Pocket is a mobile health companion designed to put essential healthcare services directly in the hands of users.",
      popUpHeadding:
        "Creating faster, smarter, and more meaningful communication experiences for everyday conversations.",
      popHeadText: "Target Message",
      popImageUrl: imageP12,
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
      image: image5,
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
      image: image11,
      text: "Mobile Design ",
      subText:
        "VitaCare is a digital healthcare platform designed to simplify access to medical services and help users to manage their health anytime.",
      popUpHeadding:
        "Creating accessible healthcare solutions that connect people to better care and wellness.",
      popHeadText: "Vite-Care",
      popImageUrl: imageP11,
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
  ],
  websiteDesign: [
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
      image: image4,
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
    {
      image: image0,
      text: "Alhafeez foundation web App 🇳🇬🇬🇫",
      subText:
        "A non-profit organization dedicated to providing support, resources, and opportunities to underserved communities through sustainable initiatives.",
      popUpHeadding:
        "Creating pathways of hope, support, and sustainable change for underserved communities.",
      popHeadText: "Alhafeez Foundation",
      popImageUrl: imageP0,
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
      image: image14,
      text: "Razor Web App 🇧🇪🇬🇧🏝️",
      subText:
        "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
      popUpHeadding:
        "Creating secure and seamless authentication experiences for modern digital platforms.",
      popHeadText: "Razor",
      popImageUrl: imageP14,
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
  ],
  branding: [
    {
      image: image0,
      text: "Alhafeez foundation web App 🇳🇬🇬🇫",
      subText:
        "A non-profit organization dedicated to providing support, resources, and opportunities to underserved communities through sustainable initiatives.",
      popUpHeadding:
        "Creating pathways of hope, support, and sustainable change for underserved communities.",
      popHeadText: "Alhafeez Foundation",
      popImageUrl: imageP0,
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
      image: image14,
      text: "Razor Web App 🇧🇪🇬🇧🏝️",
      subText:
        "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
      popUpHeadding:
        "Creating secure and seamless authentication experiences for modern digital platforms.",
      popHeadText: "",
      popImageUrl: imageP14,
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
      image: image6,
      text: "Face Scan Mobile App 🇬🇫",
      subText:
        " a biometric authentication system that enables secure and seamless user verification using facial recognition technology.",
      popUpHeadding:
        "Creating secure identity verification through fast, seamless, and intelligent facial recognition.",
      popHeadText: "Face Scan",
      popImageUrl: imageP6,
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
      image: image17,
      text: "Home Architect web App🇳🇬",
      subText:
        "A design platform that helps users plan, visualize, and create functional home layouts through an intuitive and user-friendly interface.",
      popUpHeadding:
        "Transforming ideas into functional living spaces through smart design and visualization.",
      popHeadText: "Home Architect",
      popImageUrl: imageP17,
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
      image: image4,
      text: "Finance All Website 🇦🇺🇺🇸🇺",
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
      text: "Pdf To Word Web App 🇳🇬",
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
  ],
};
function products() {
  return workType;
}
export default products;
