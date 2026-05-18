import { useRef, useState, useEffect } from "react";
import products from "../Products";
import mobileProducts from "../MobileProducts";
import CardList from "../Home/CardList";
import image0 from "/images/10.png";
import image1 from "/images/11.png";
import image2 from "/images/8.png";
import image3 from "/images/14.png";
import image4 from "/images/13.png";
import image5 from "/images/17.png";
import image6 from "/images/6.png";
import image7 from "/images/9.png";
import image8 from "/images/12.png";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
const countData = [
  [
    {
      image: image0,
      text: "Website Design ",
      subText: "",
      popUpHeadding:
        "Simplifying document conversion through speed, accuracy, and seamless accessibility.",
      popHeadText: "Pdf to Word",
      capabilities: [
        "UI/UX Design",
        "Document Conversion Flow",
        "Product Research",
        "Web App Design",
      ],
      duration: "3months",
      team: ["Product Design", "UI Designer", "Developer"],
      location: "Nigeria",
      industry: ["Productivity Tools", "Document Technology"],
      endText:
        "PDF to Word is a simple and efficient tool for converting PDF files into fully editable Word documents while preserving layout and formatting",
    },
    {
      image: image1,
      text: "Mobile Design ",
      subText: "",
      popUpHeadding:
        "Creating accessible healthcare solutions that connect people to better care and wellness.",
      popHeadText: "Vite Care ",
      capabilities: [
        "UI/UX Design",
        "Healthcare Experience Design",
        "User Resarch",
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
        "VitaCare is a digital healthcare platform designed to simplify access to medical services and help users to manage their health anytime.",
    },
    {
      image: image2,
      text: "Mobile Design ",
      subText: "",
      popUpHeadding:
        "Connecting people to delicious meals through fast, seamless, and convenient food ordering experiences.",
      popHeadText: "Come Chop",
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
    {
      image: image3,
      text: "Website Design ",
      subText: "",
      popUpHeadding:
        "Creating secure and seamless authentication experiences for modern digital platforms.",
      popHeadText: "Razor",
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
      image: image4,
      text: "Mobile Design ",
      subText: "",
      popUpHeadding:
        "Creating accessible healthcare solutions that connect people to quality care anytime, anywhere.",
      popHeadText: "Medi Link",
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
      image: image5,
      text: "Branding ",
      subText: "",
      popUpHeadding:
        "Transforming ideas into functional living spaces through smart design and visualization.",
      popHeadText: "Home Architect",
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
  ],
  [
    {
      image: image6,
      text: "Branding ",
      subText: "",
      popUpHeadding:
        "Creating secure identity verification through fast, seamless, and intelligent facial recognition.",
      popHeadText: "Face Scan",
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
      image: image7,
      text: "Website Design ",
      subText: "",
      popUpHeadding:
        "Empowering businesses to deploy, manage, and scale digital products with speed and efficiency.",
      popHeadText: "Xnora",
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
      image: image8,
      text: "Mobile Design ",
      subText: "",
      popUpHeadding:
        "Creating faster, smarter, and more meaningful communication experiences for everyday conversations.",
      popHeadText: "Target Message",
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
  ],
];
function Category() {
  const projectRef = useRef<HTMLSpanElement | null>(null);
  const mDesignRef = useRef<HTMLSpanElement | null>(null);
  const wDesignRef = useRef<HTMLSpanElement | null>(null);
  const brandingRef = useRef<HTMLSpanElement | null>(null);
  const ourWorkData: Array<OurWorkData[]> = products();
  const ourWorkDataMobile: Array<OurWorkData[]> = mobileProducts();
  const [ourWorkRender, setOurWorkRender] = useState<OurWorkData[]>(
    ourWorkData[0],
  );
  const [ourWorkFirstRender, setOurWorkFirstRender] = useState<boolean>(true);
  const [firstRenderCount, setFirstRenderCount] = useState<number>(1);
  const oneRef = useRef<HTMLHeadingElement | null>(null);
  const twoRef = useRef<HTMLHeadingElement | null>(null);
  const threeRef = useRef<HTMLHeadingElement | null>(null);
  const [allProductsMoblie, setAllProductsMoblie] = useState<OurWorkData[]>(
    ourWorkDataMobile[0],
  );
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
  console.log(devicesWidth);
  function projectCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    projectRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    mDesignRef.current.classList.remove("text-gray-200");
    mDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove("text-gray-200");
    wDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove("text-gray-200");
    brandingRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    setOurWorkFirstRender(true);
    setAllProductsMoblie([...ourWorkDataMobile[0]]);
    return setOurWorkRender([...ourWorkData[0]]);
  }
  function mDesignCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove("text-gray-200");
    projectRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove("text-gray-200");
    wDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove("text-gray-200");
    brandingRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    setOurWorkFirstRender(false);
    setAllProductsMoblie([...ourWorkDataMobile[1]]);
    return setOurWorkRender([...ourWorkData[1]]);
  }
  function wDesignCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove("text-gray-200");
    projectRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.remove("text-gray-200");
    mDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove("text-gray-200");
    brandingRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    setOurWorkFirstRender(false);
    setAllProductsMoblie([...ourWorkDataMobile[2]]);
    return setOurWorkRender([...ourWorkData[2]]);
  }
  function brandingCliked() {
    if (
      !projectRef.current ||
      !mDesignRef.current ||
      !wDesignRef.current ||
      !brandingRef.current
    )
      return;

    projectRef.current.classList.remove("text-gray-200");
    projectRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    mDesignRef.current.classList.remove("text-gray-200");
    mDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    wDesignRef.current.classList.remove("text-gray-200");
    wDesignRef.current.classList.add(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.remove(
      "bg-transparent",
      "hover:bg-secondary-green",
      "hover:border-secondary-green",
      "hover:text-gray-200",
      "text-black",
    );
    brandingRef.current.classList.add(
      "bg-primary-green",
      "border-primary-green",
      "text-gray-200",
    );
    setOurWorkFirstRender(false);
    setAllProductsMoblie([...ourWorkDataMobile[3]]);
    return setOurWorkRender([...ourWorkData[3]]);
  }
  function countPlus() {
    if (firstRenderCount === 3) return;
    setFirstRenderCount((prevCount) => (prevCount += 1));
  }
  function countMinus() {
    if (firstRenderCount === 1) return;
    setFirstRenderCount((prevCount) => (prevCount -= 1));
  }
  useEffect(() => {
    if (!oneRef.current || !twoRef.current || !threeRef.current) return;
    switch (firstRenderCount) {
      case 1:
        threeRef.current.classList.remove("text-green-500");
        twoRef.current.classList.remove("text-green-500");
        oneRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(ourWorkData[0]);
        })();
        break;
      case 2:
        threeRef.current.classList.remove("text-green-500");
        oneRef.current.classList.remove("text-green-500");
        twoRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(countData[0]);
        })();
        break;
      case 3:
        oneRef.current.classList.remove("text-green-500");
        twoRef.current.classList.remove("text-green-500");
        threeRef.current.classList.add("text-green-500");
        (() => {
          setOurWorkRender(countData[1]);
        })();
        break;
      default:
        break;
    }
  }, [firstRenderCount, ourWorkRender]);
  return (
    <>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:mt-30 mt-10">
        <span className="block">
          <h5 className="font-size-heading fontPoppins font-semibold">
            Our Work
          </h5>
        </span>
      </div>
      <div className="lg:pl-10 lg:pr-10 pl-5 pr-5 lg:flex-row flex flex-col mt-10 lg:mt-15 lg:gap-9.5 gap-4  lg:max-w-full overflow-hidden pb-2 ">
        <span
          className="w-fit  p-2.5 pl-7.5 pr-7.5 flex  justify-center items-center   h-fit font-inter   ourWorkHeadMenu  border-primary-green bg-primary-green  border   text-gray-200 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={projectRef}
          onClick={projectCliked}
        >
          <h5 className="">All Projects</h5>
        </span>
        <span
          className="  w-fit  p-2.5 pl-7.5 pr-7.5  flex justify-center items-center  h-fit font-inter ourWorkHeadMenu     border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={mDesignRef}
          onClick={mDesignCliked}
        >
          <h5>Moblie Design</h5>
        </span>
        <span
          className="w-fit   p-2.5 pl-7.5 pr-7.5 flex justify-center items-center   h-fit font-inter ourWorkHeadMenu   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={wDesignRef}
          onClick={wDesignCliked}
        >
          <h5>Website Design</h5>
        </span>
        <span
          className="w-fit   p-2.5 pl-7.5 pr-7.5 flex justify-center items-center   h-fit font-inter ourWorkHeadMenu   border text-black border-black hover:bg-secondary-green hover:text-gray-200 hover:border-green-500 transition-all  rounded-full overflow-hidden whitespace-nowrap pointer"
          ref={brandingRef}
          onClick={brandingCliked}
        >
          <h5>Branding</h5>
        </span>
      </div>

      {devicesWidth !== undefined && devicesWidth >= 700 ? (
        <CardList body={ourWorkRender} />
      ) : (
        <CardList body={allProductsMoblie} />
      )}

      {ourWorkFirstRender && (
        <div className="hidden lg:flex justify-center gap-6 lg:mt-16 mt-8 ">
          <span
            className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full"
            onClick={countMinus}
          >
            <i className="fa fa-arrow-left text-gray-200 text-[1.2rem]"></i>
          </span>
          <span className="flex gap-4 self-center text-[1rem] lg:text-[1.2rem] text-gray-400 font-semibold">
            <h5 ref={oneRef}>1</h5>
            <h5 ref={twoRef}>2</h5>
            <h5 ref={threeRef}>3</h5>
          </span>
          <span
            className="w-fit h-fit lg:p-5 p-3 bg-primary-green hover:bg-secondary-green rounded-full"
            onClick={countPlus}
          >
            <i className="fa fa-arrow-right text-gray-200 text-[1.2rem]"></i>
          </span>
        </div>
      )}
    </>
  );
}
export default Category;
