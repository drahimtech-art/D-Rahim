import closeIcon from "/images/icons/Close.png";
import noImgIcon from "/images/icons/addImgFrame.png";
import penIcon from "/images/icons/PencilSimpleLine.png";
import arrowDownIcon from "/images/icons/iconamoon_arrow-down-2-duotone.png";
import { useState, useRef, type ChangeEvent } from "react";
export interface PortfolioDataType {
  pImage: string;
  title: string;
  about: string;
  heading: string;
  image: Blob;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  projectType: string;
}
function AddNewProjectPopUp({
  closePopUp,
  isAddNewProjectRequstSent,
  handleUploadNewProject,
}: {
  closePopUp: (boolean: boolean) => void;
  isAddNewProjectRequstSent: boolean;
  handleUploadNewProject: (projectData: PortfolioDataType) => void;
}): React.ReactElement {
  const [renderIndustry, setRenderIndustry] = useState<boolean>(false);
  //
  const [title, setTitle] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [heading, setHeading] = useState<string>("");
  const [capabilities, setCapabilities] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [industry, setIndustry] = useState<string>("Select your Industry");
  const [projectType, setProjectType] = useState<string>("Select your Service");
  const [renderProjectTypeService, setRenderProjectTypeService] =
    useState<boolean>(false);
  //
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [imageUrl, setImgeUrl] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  //
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file.type.includes("image")) return alert("File type is not an image");
    const createDisplayImageUrl = URL.createObjectURL(file);
    setImgeUrl(createDisplayImageUrl);
    setFile(file);
  }
  function validateProjectPostData() {
    if (isAddNewProjectRequstSent) return;
    if (
      title.length < 3 ||
      about.length < 3 ||
      heading.length < 3 ||
      capabilities.length < 3 ||
      duration.length < 3 ||
      team.length < 3 ||
      location.length < 3 ||
      industry[0] === "Select your Industry" ||
      projectType === "Select your Service"
    )
      return alert("Can't upload one or more fileds are empty!");
    if (!file) return alert("Can't upload project image not found");
    const projectInfo: PortfolioDataType = {
      pImage: "",
      title: title,
      about: about,
      heading: heading,
      image: file,
      capabilities: capabilities.split(","),
      duration: duration,
      team: team.split(","),
      location: location,
      industry: industry.split(","),
      projectType: projectType,
    };
    handleUploadNewProject(projectInfo);
  }
  function handleRenderIndustry(): void {
    setRenderProjectTypeService(false);
    setRenderIndustry(!renderIndustry);
  }
  function handleRenderProjectTypeService(): void {
    setRenderIndustry(false);
    setRenderProjectTypeService(!renderProjectTypeService);
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <article className=" w-[90%] max-w-450 max-h-[1586.620px] h-[95%] overflow-hidden rounded-[50px] p-12.5 pb-0 bg-[#FFFFFF] ">
        <div className="w-full h-full relative overflow-y-scroll scroll-container ">
          <section className="flex items-center">
            <h5 className="font-inter font-medium text-[50.44px]">
              Project Information
            </h5>
            <span className="ml-auto  flex justify-center w-[70px]">
              <div className="pointer bg-white  absolute top-0 p-3.5 transition-all hover:bg-transparent  z-10 right-0">
                <button className="pointer " onClick={() => closePopUp(false)}>
                  <img className="w-[40px] h-[40px]" src={closeIcon}></img>
                </button>
              </div>
              <h5 className="font-medium text-[14px]  mt-14">Close</h5>
            </span>
          </section>
          <article className="w-full h-fit pb-10 flex gap-[75px] mt-10">
            {/**image section */}
            <section className="w-[45%] flex flex-col gap-[16px]">
              <img
                className="w-full h-fit max-h-[450px]"
                src={imageUrl ? imageUrl : noImgIcon}
              ></img>
              <button
                className="flex w-fit pointer gap-1 items-center"
                onClick={() => {
                  if (!fileInputRef.current) return;
                  fileInputRef.current.click();
                }}
              >
                <img className="w-[24px] h-[24px]" src={penIcon}></img>
                <h5 className="font-medium font-inter text-[20px] text-[#06A87B]">
                  Upload project image
                </h5>
              </button>
              <input
                className="hidden w-0 h-0 cursor-not-allowed"
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </section>
            {/**input section */}
            <article className="w-[55%] h-fit flex flex-col gap-[30px]">
              {/**project title */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Project Title
                </h5>
                <input
                  className="w-full h-[60px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </section>
              {/**project heading */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Project Heading
                </h5>
                <input
                  className="w-full h-[60px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                ></input>
              </section>
              {/**project about */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Tell us about your project
                </h5>
                <textarea
                  className="w-full min-h-[124px] h-[124px] max-h-[250px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </section>
              {/**industry selection */}
              <section className="w-full flex flex-col gap-1 relative">
                <h5 className="font-inter font-medium text-[24px]">Industry</h5>
                <button
                  className="w-full pointer h-[60px] border p-3 border-[#56D566]  rounded-[12px] flex items-center"
                  onClick={handleRenderIndustry}
                >
                  <h5 className="text-[#3C3C43] font-inter text-[16px] font-medium">
                    {industry}
                  </h5>
                  <span className="w-fit  ml-auto">
                    {!renderIndustry ? (
                      <img className="w-[24px] h-[24px] " src={arrowDownIcon} />
                    ) : (
                      <img
                        className="w-[24px] h-[24px] rotate-180"
                        src={arrowDownIcon}
                      />
                    )}
                  </span>
                </button>
                {renderIndustry && (
                  <article className="w-full flex flex-col absolute z-10 border border-[#56D566] bg-[#FFFFFF]  rounded-[12px] mt-25">
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer rounded-t-[12px]"
                      onClick={() => {
                        setIndustry("GovTech");
                        setRenderIndustry(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        GovTech
                      </h5>
                    </section>
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer"
                      onClick={() => {
                        setIndustry(" Healthcare");
                        setRenderIndustry(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        Healthcare
                      </h5>
                    </section>
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer"
                      onClick={() => {
                        setIndustry("FinTech");
                        setRenderIndustry(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        FinTech
                      </h5>
                    </section>
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76]  rounded-b-[12px] pointer"
                      onClick={() => {
                        setIndustry("Logistics");
                        setRenderIndustry(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        Logistics
                      </h5>
                    </section>
                  </article>
                )}
              </section>
              {/**service selection */}
              <section className="w-full flex flex-col gap-1 relative">
                <h5 className="font-inter font-medium text-[24px]">Service</h5>
                <button
                  className="w-full pointer h-[60px] border p-3 border-[#56D566]  rounded-[12px] flex items-center"
                  onClick={handleRenderProjectTypeService}
                >
                  <h5 className="text-[#3C3C43] font-inter text-[16px] font-medium">
                    {projectType}
                  </h5>
                  <span className="w-fit  ml-auto">
                    {!renderProjectTypeService ? (
                      <img className="w-[24px] h-[24px] " src={arrowDownIcon} />
                    ) : (
                      <img
                        className="w-[24px] h-[24px] rotate-180"
                        src={arrowDownIcon}
                      />
                    )}
                  </span>
                </button>
                {renderProjectTypeService && (
                  <article className="w-full flex flex-col absolute z-10 border border-[#56D566] bg-[#FFFFFF]  rounded-[12px] mt-25">
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer rounded-t-[12px]"
                      onClick={() => {
                        setProjectType("Mobile Design");
                        setRenderProjectTypeService(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        Mobile Design
                      </h5>
                    </section>
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76] pointer"
                      onClick={() => {
                        setProjectType("Website Design");
                        setRenderProjectTypeService(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        Website Design
                      </h5>
                    </section>
                    <section
                      className="w-full h-[50px] p-3.25 transition-all hover:bg-[#11AC76]  rounded-b-[12px] pointer"
                      onClick={() => {
                        setProjectType("Branding");
                        setRenderProjectTypeService(false);
                      }}
                    >
                      <h5 className="font-inter font-medium text-[16px]">
                        Branding
                      </h5>
                    </section>
                  </article>
                )}
              </section>
              {/**capability */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">
                  Capability
                </h5>
                <input
                  className="w-full h-[60px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={capabilities}
                  onChange={(e) => setCapabilities(e.target.value)}
                ></input>
              </section>
              {/**teams */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">Teams</h5>
                <input
                  className="w-full h-[60px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                ></input>
              </section>
              {/**duration */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">Duration</h5>
                <input
                  className="w-full h-[60px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                ></input>
              </section>
              {/**location */}
              <section className="flex flex-col gap-1">
                <h5 className="font-inter font-medium text-[24px]">Location</h5>
                <input
                  className="w-full h-[60px] text-[#3C3C43] font-inter text-[16px] font-medium border border-[#56D566] rounded-[12px] p-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
              </section>
              {/**action */}
              <section className="flex ">
                <div className="ml-auto flex gap-[20px]">
                  <button
                    className="pointer flex w-37.5 gap-2 pl-2 bg-[#f3126149] border-button-bgGreen  pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border  rounded-[30px]"
                    onClick={() => closePopUp(false)}
                  >
                    <h5 className="font-inter font-normal text-black">
                      Cancel
                    </h5>
                  </button>
                  <button
                    className="pointer flex w-37.5 gap-2 pl-2 bg-button-bgGreen border-button-bgGreen  pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border  rounded-[30px]"
                    style={{
                      cursor: isAddNewProjectRequstSent
                        ? "not-allowed"
                        : "pointer",
                    }}
                    onClick={validateProjectPostData}
                  >
                    <h5 className="font-inter font-normal text-[16px]">
                      Upload
                    </h5>
                  </button>
                </div>
              </section>
            </article>
          </article>
        </div>
      </article>
    </div>
  );
}
export default AddNewProjectPopUp;
