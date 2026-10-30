import mapIcon from "/images/icons/Map.svg";
import whatsAppIcon from "/images/icons/whatsApp_icon.png";
import type { BookingRequiredData } from "../../../../../storage/ClientBookingInfo";
import { useState, useEffect } from "react";
import FormSubmitResponse from "../../../shared/formSubmitResponse/FormSubmitResponse";
import { postRequstSevice } from "../api/Api";
function PageContent({
  bookingInfo,
  setBookingInfo,
}: {
  bookingInfo: BookingRequiredData | undefined;
  setBookingInfo: React.Dispatch<
    React.SetStateAction<BookingRequiredData | undefined>
  >;
}): React.ReactElement {
  const [clientFullName, setClientFullName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [aboutProject, setAboutProject] = useState<string>("");
  const [trafficSource, setTrafficSource] = useState<string>("");
  const [renderFormResponse, setRenderFormResponse] = useState<boolean>(false);
  function closeFormResponse() {
    setRenderFormResponse(!renderFormResponse);
  }
  //
  useEffect(() => {
    if (!bookingInfo) return;
    (() => {
      setClientFullName(bookingInfo.clientFullName);
      setJobTitle(bookingInfo.jobTitle);
      setEmail(bookingInfo.email);
      setPhoneNumber(bookingInfo.phoneNumber);
      setCompanyName(bookingInfo.companyName);
      setAboutProject(bookingInfo.aboutProject);
      setTrafficSource(bookingInfo.trafficSource);
    })();
  }, []);
  //
  function validateEmail(e: string): boolean {
    if (typeof e !== "string") return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(e.trim());
  }
  //
  function submitClientInputForm() {
    if (clientFullName.length < 3) return alert("full name required");
    if (jobTitle.length < 3) return alert("jobTitle required");
    if (email.length < 3) return alert("emailrequired");
    if (phoneNumber.length < 3) return alert("phone number required");
    if (companyName.length < 3) return alert("company name required");
    if (aboutProject.length < 3) return alert("project description required");
    if (trafficSource.length < 3) return alert("how do you here about us");
    if (!validateEmail(email))
      return alert("please enter in a valide email address");
    if (bookingInfo) {
      setBookingInfo({
        ...bookingInfo,
        clientFullName,
        jobTitle,
        email,
        phoneNumber,
        companyName,
        aboutProject,
        trafficSource,
      });
      postRequstSevice({
        ...bookingInfo,
        clientFullName,
        jobTitle,
        email,
        phoneNumber,
        companyName,
        aboutProject,
        trafficSource,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <article className="flex min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5 min-[1000px]:mt-15 mt-10 min-[1000px]:gap-10 gap-5">
        <section className="min-[1000px]:w-[60%] min-[1000px]:max-w-232">
          <span className="ourWorkMenuText fontPoppins font-semibold min-[1000px]:hidden">
            <h5>Enter Details</h5>
          </span>
          <div className=" flex flex-col min-[1000px]:max-w-232 min-[1000px]:gap-1.5 gap-5 min-[1000px]:mt-0 mt-10">
            <span className="flex flex-col font-inter">
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                Full Name
              </h5>
              <input
                className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                value={clientFullName}
                onChange={(e) => setClientFullName(e.target.value)}
              ></input>
            </span>
            <span className="flex flex-col font-inter">
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                Job Title
              </h5>
              <input
                className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
            </span>
            <span className="flex flex-col font-inter">
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                Business Email
              </h5>
              <input
                className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </span>
            <span className="flex flex-col font-inter">
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                Phone Number
              </h5>
              <input
                className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </span>
            <span className="flex flex-col font-inter">
              <h5 className="ourWorkHeadMenu font-inter font-medium">
                Company Name
              </h5>
              <input
                className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              ></input>
            </span>
            <span className="flex flex-col h-full font-inter">
              <span>
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Tell us about your project
                </h5>
              </span>
              <span>
                <input
                  className="min-[1000px]:inline-block hidden h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4 sm:min-h-12  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                  value={aboutProject}
                  onChange={(e) => setAboutProject(e.target.value)}
                ></input>
                <textarea
                  className="min-[1000px]:hidden inline-block  h-41.75  border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                  value={aboutProject}
                  onChange={(e) => setAboutProject(e.target.value)}
                ></textarea>
              </span>
            </span>
            <span className="flex flex-col h-full font-inter mt-0 min-[1000px]:mt-5">
              <span>
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  How did you find D'rahim tech innovation?
                </h5>
              </span>
              <span>
                <input
                  className="min-[1000px]:inline-block hidden h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4 sm:min-h-12  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                  value={trafficSource}
                  onChange={(e) => setTrafficSource(e.target.value)}
                ></input>
                <textarea
                  className="min-[1000px]:hidden inline-block  h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 min-[1000px]:mt-6 rounded-2xl min-[1000px]:rounded-none"
                  value={trafficSource}
                  onChange={(e) => setTrafficSource(e.target.value)}
                ></textarea>
              </span>
            </span>
          </div>
          <div className="mt-10">
            <span className="w-full  min-[1000px]:max-w-201.75 ">
              <h5 className=" text-[16px] ml-2 ">
                <strong className="font-normal text-[#2563EB]">
                  {" "}
                  By clicking Submit Application
                </strong>
                , you consent to D’rahim Tech Innovation collecting and
                processing the personal information you provide in accordance
                with our Privacy Policy.
              </h5>
            </span>
            <button
              className="flex mr-auto pointer pl-7.5 pr-7.5 p-2.5 items-center justify-center mt-10 bg-button-bgGreen min-[1000px]:w-fit min-[1000px]:h-12.5 w-fit rounded-full"
              onClick={submitClientInputForm}
            >
              <h5 className="text-center min22 text-gray-200 font-medium font-inter">
                Submit Application
              </h5>
            </button>
          </div>
        </section>
        <section className="w-[40%] ml-auto hidden min-[1000px]:block">
          <section className="w-full flex justify-center  ">
            <div className="w-full max-w-[229px] h-fit">
              <div className="w-full flex justify-center">
                <img className="w-fit h-fit pointer" src={whatsAppIcon}></img>
              </div>
              <h5 className="text-black  text-center mt-3.25 font-inter font-normal min18pxMax20px">
                Chat via Whatsapp
              </h5>
            </div>
          </section>
          <div className="w-full mt-[17px] h-full">
            <div className=" w-full h-[50%]  max-h-112.5  rounded-2xl">
              <img className="w-full h-full  rounded-2xl" src={mapIcon} />
            </div>
            <span className="flex justify-center w-full mt-2">
              <h5 className="font-normal font-inter logoMainText">
                Find Us On The Map
              </h5>
            </span>
          </div>
        </section>
      </article>
      {renderFormResponse && (
        <FormSubmitResponse closePopUp={closeFormResponse} />
      )}
    </>
  );
}
export default PageContent;
