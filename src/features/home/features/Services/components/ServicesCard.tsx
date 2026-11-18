import cv1 from "/images/service_card_cover_2.png";
import cv1Image from "/images/grovtech.png";
import cv1ImageM from "/images/grovtech_0.png";
import pcv1Image from "/images/grovtech-p.png";
import cv2 from "/images/service_card_cover_3.png";
import cv2Image from "/images/healthcare.png";
import pcv2Image from "/images/healthcare-p.png";
import cv2ImageM from "/images/healthcare_0.png";
import cv3 from "/images/service_card_cover_6.png";
import cv3Image from "/images/fintech.png";
import pcv3Image from "/images/fintech-p.png";
import cv3ImageM from "/images/fintech_0.png";
import cv4 from "/images/service_card_cover_10.png";
import cv4Image from "/images/hrtech.png";
import pcv4Image from "/images/hrtech-p.png";
import cv4ImageM from "/images/hrtech_0.png";
import cv5 from "/images/service_card_cover_7.png";
import cv5Image from "/images/logistics.png";
import cv5ImageM from "/images/logistics.png";
import { useState, useEffect } from "react";
import CardPopUp from "../../../shared/Card/CardPopUp";
import type { ProjectData } from "../../../../../storage/PortfolioProjectApi";
function ServiceCard() {
  const [devicesWidth, setDevicesWidth] = useState<number | undefined>();
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const [data, setData] = useState<ProjectData | undefined>(undefined);
  const projectInfo: ProjectData[] = [
    {
      pImage: pcv1Image,
      title: "NYSC Redesign web App ",
      about:
        "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
      heading:
        "Transforming youth service operations through seamless digital experiences, accessibility, and efficiency.",

      sImage: pcv1Image,
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
      creationDate: new Date(),
      projectType: "Website Design",
      projectStatus: "Active",
      _id: "",
      __v: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      pImage: pcv4Image,
      title: "Jobified Moblie App 🇳🇬",
      about:
        "Creating a job-matching platform designed to bridge the gap between job seekers and employers through a smooth, user-centered experience.",
      heading:
        "Creating smarter pathways to career growth, opportunity, and seamless job connections.",

      sImage: pcv4Image,
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
      creationDate: new Date(),
      projectType: "Moblie Design",
      projectStatus: "Active",
      _id: "",
      __v: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      pImage: pcv2Image,
      title: "Mobile Design ",
      about:
        "VitaCare is a digital healthcare platform designed to simplify access to medical services and help users to manage their health anytime.",
      heading:
        "Creating accessible healthcare solutions that connect people to better care and wellness.",
      sImage: pcv2Image,
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
      creationDate: new Date(),
      projectType: "Moblie Design",
      projectStatus: "Active",
      _id: "",
      __v: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      pImage: pcv3Image,
      title: "Wankard Moblie App 🇳🇬",
      about:
        "Wankard is a fintech app focused on creating a clean, accessible, and efficient platform for day to day transactions.",
      heading:
        "Creating seamless, secure, and accessible financial solutions for everyday transactions.",
      sImage: pcv3Image,
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
      creationDate: new Date(),
      projectType: "Moblie Design",
      projectStatus: "Active",
      _id: "",
      __v: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
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
  return (
    <>
      <article className="min-[1000px]:mt-20 mt-10 min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  w-full  min-[1000px]:max-h-171.5 overflow-hidden">
        <div className="flex min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:gap-4 gap-7.5 overflow-x-scroll hid-scrollbar-width min-[1000px]:overflow-auto">
          <section className="relative min-w-70 h-70 min-[1000px]:max-h-171.5 bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:w-full min-[1000px]:h-full ">
            {devicesWidth !== undefined && devicesWidth >= 1000 ? (
              <img
                className="  min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  w-full max-h-171.5 min-[1000px]:bg-[#bdb9b9]"
                src={cv1Image}
              ></img>
            ) : (
              <img
                className="  min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0  w-full max-h-171.5 min-[1000px]:bg-[#bdb9b9]"
                src={cv1ImageM}
              ></img>
            )}
            <span className="min-w-70 min-[1000px]:w-full ">
              <img
                className="w-full h-full pointer min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:hover:opacity-0 transition-all"
                src={cv1}
                onClick={() => {
                  if (devicesWidth && devicesWidth >= 1000) {
                    setData(projectInfo[0]);
                    setIsPopUpVisible(true);
                  }
                }}
              ></img>
            </span>
          </section>
          <article className="flex gap-7.5 min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:gap-4 min-[1000px]:max-h-171.5 min-[1000px]:min-w-145 w-full ">
            <section className="min-w-70 h-70 min-[1000px]:w-full relative  ">
              {devicesWidth !== undefined && devicesWidth >= 1000 ? (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv2Image}
                ></img>
              ) : (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv2ImageM}
                ></img>
              )}
              <span className="min-w-70 min-[1000px]:w-full ">
                <img
                  className="w-full h-full pointer min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:hover:opacity-0 transition-all"
                  src={cv2}
                  onClick={() => {
                    if (devicesWidth && devicesWidth >= 1000) {
                      setData(projectInfo[2]);
                      setIsPopUpVisible(true);
                    }
                  }}
                ></img>
              </span>
            </section>
            <section className="min-w-70 h-70 min-[1000px]:w-full relative min-[1000px]:h-70   max-h-81    ">
              {devicesWidth !== undefined && devicesWidth >= 1000 ? (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv3Image}
                ></img>
              ) : (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv3ImageM}
                ></img>
              )}
              <span className="min-w-70 min-[1000px]:w-full ">
                <img
                  className="w-full h-full pointer min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:hover:opacity-0 transition-all"
                  src={cv3}
                  onClick={() => {
                    if (devicesWidth && devicesWidth >= 1000) {
                      setData(projectInfo[3]);
                      setIsPopUpVisible(true);
                    }
                  }}
                ></img>
              </span>
            </section>
            <section className="min-w-70 h-70 min-[1000px]:w-full relative min-[1000px]:h-70   max-h-81    ">
              {devicesWidth !== undefined && devicesWidth >= 1000 ? (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv5Image}
                ></img>
              ) : (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv5ImageM}
                ></img>
              )}
              <span className="min-w-70 min-[1000px]:w-full ">
                <img
                  className="w-full h-full pointer min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:hover:opacity-0 transition-all"
                  src={cv5}
                ></img>
              </span>
            </section>
            <section className="min-w-70 h-70 min-[1000px]:w-full relative min-[1000px]:h-70   max-h-81    ">
              {devicesWidth !== undefined && devicesWidth >= 1000 ? (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv4Image}
                ></img>
              ) : (
                <img
                  className="min-[1000px]:rounded-4xl object-fill absolute min-[1000px]:block h-38 min-[1000px]:h-full pt-2.5 pl-4 pr-4 min-[1000px]:pl-0 min-[1000px]:pr-0 min-[1000px]:pt-0 w-full "
                  src={cv4ImageM}
                ></img>
              )}
              <span className="min-w-70 min-[1000px]:w-full ">
                <img
                  className="w-full h-full pointer min-[1000px]:absolute top-0 min-[1000px]:bg-[#bdb9b9] min-[1000px]:rounded-4xl rounded-2xl min-[1000px]:hover:opacity-0 transition-all"
                  src={cv4}
                  onClick={() => {
                    if (devicesWidth && devicesWidth >= 1000) {
                      setData(projectInfo[1]);
                      setIsPopUpVisible(true);
                    }
                  }}
                ></img>
              </span>
            </section>
          </article>
        </div>
      </article>
      {devicesWidth !== undefined && devicesWidth >= 1000 && data && (
        <CardPopUp
          control={isPopUpVisible}
          setIsPopUpVisible={setIsPopUpVisible}
          body={data}
        />
      )}
    </>
  );
}
export default ServiceCard;
