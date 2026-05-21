import image1 from "/images/9.png";
import image2 from "/images/15.png";
import image3 from "/images/16.png";
import image4 from "/images/5.png";
import image5 from "/images/4.png";
import image6 from "/images/10.png";
import FAQ from "../../ProjectInfo/FAQ";
function ProjectCard() {
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10  pl-5 pr-5 min-[1000px]:mt-30">
        <span className="block min-[1000px]:mt-30">
          <h5 className="fontPoppins font-semibold min40Max60px">
            Our Projects
          </h5>
          <h5 className="mt-5 text-[24px] w-full  font-inter min-[1000px]:max-w-247.75">
            We’ve partnered with companies across a wide range of industries,
            from mobile banking to earthworks operations. What connects all our
            projects is a shared approach: deep empathy for end users, rapid
            iteration, and close collaboration with our clients’ teams.
          </h5>
        </span>
        <div className="mt-15 h-fit flex flex-col min-[1000px]:gap-27.25">
          <div className="grid grid-cols-3 gap-10 min-h-fit ">
            <span className="block w-full h-full ">
              <img
                className="w-full h-full min-[1000px]:max-h-101 "
                src={image1}
              ></img>
              <h5 className="text-[24px] font-inter font-bold overflow-hidden">
                Xnora Web App
              </h5>
              <h5 className="text-[24px] font-inter line-clamp-3">
                Xnora is a modern web platform built for seamless deployment and
                efficient performance. It provides a clean, enviroment for
                deployment.
              </h5>
            </span>
            <span className="block w-full h-full">
              <img
                className="w-full h-full min-[1000px]:max-h-101"
                src={image2}
              ></img>
              <h5 className="text-[24px] font-inter font-bold overflow-hidden">
                Wankard Moblie App
              </h5>
              <h5 className="text-[24px] font-inter line-clamp-3">
                wankard is a fintech app focused on creating a clean,
                accessible, and efficient platform for day to day transactions
              </h5>
            </span>
            <span className="block w-full h-full">
              <img
                className="w-full h-full min-[1000px]:max-h-101"
                src={image3}
              ></img>
              <h5 className="text-[24px] font-inter font-bold overflow-hidden">
                NYSC Redesign web
              </h5>
              <h5 className="text-[24px] font-inter line-clamp-3">
                A user-centered digital project aimed at improving the
                experience of corps members by simplifing processes, and
                modernizing the overall platform
              </h5>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-10  min-h-fit ">
            <span className="block w-full h-full">
              <img
                className="w-full h-full min-[1000px]:max-h-101"
                src={image4}
              ></img>
              <h5 className="text-[24px] font-inter font-bold overflow-hidden">
                Travel Express Moblie App
              </h5>
              <h5 className="text-[24px] font-inter line-clamp-3">
                Travel express is a travel experience platform designed to
                simplify trip planning and enhance the way users explore new
                destinations
              </h5>
            </span>
            <span className="block w-full h-full">
              <img
                className="w-full h-full min-[1000px]:max-h-101"
                src={image5}
              ></img>
              <h5 className="text-[24px] font-inter font-bold overflow-hidden">
                Finance All Website
              </h5>
              <h5 className="text-[24px] font-inter line-clamp-3">
                A financial dashboard designed to provide a clear, real-time
                overview of personal and business finaces. it delivers insights
                and analytics.
              </h5>
            </span>
            <span className="block w-full h-full">
              <img
                className="w-full h-full min-[1000px]:max-h-101"
                src={image6}
              ></img>
              <h5 className="text-[24px] font-inter font-bold overflow-hidden">
                Pdf To Word Web App
              </h5>
              <h5 className="text-[24px] font-inter line-clamp-3">
                PDF to Word is a simple and efficient tool for converting PDF
                files into fully editable Word documents while preserving layout
                and formatting
              </h5>
            </span>
          </div>

          <button className="border-2 rounded-full pointer  w-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5">
            <h5 className="font-inter font-medium text-[24px]">
              Explore more projects
            </h5>
          </button>
        </div>
      </div>
      <div className="mt-30">
        <FAQ />
      </div>
    </>
  );
}
export default ProjectCard;
