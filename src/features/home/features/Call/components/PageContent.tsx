import mapIcon from "/images/icons/Map.svg";
import whatsAppIcon from "/images/icons/whatsApp_icon.png";
import type { BookingRequiredData } from "../../../../../storage/ClientBookingInfo";
import { useState, useEffect, useRef } from "react";
import FormSubmitResponse from "../../../shared/formSubmitResponse/FormSubmitResponse";
import { postRequstSevice } from "../api/Api";
import NotificationBar from "../../../shared/notificationBar/NotificationBar";
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
  const [renderInputErrUx, setRenderInputErrUx] = useState<boolean>(false);
  const [inputErrUxTreeSection, setInputErrUxTreeSection] = useState<number>(0);
  const [inputErrUxMsg, setInputErrUxMsg] = useState<string>(
    "This field is required",
  );
  //
  const fullNameInputRef = useRef<HTMLInputElement | null>(null);
  const jobTitleInputRef = useRef<HTMLInputElement | null>(null);
  const companyNameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement | null>(null);
  const aboutProjectInputRef = useRef<HTMLInputElement | null>(null);
  const trafficSourceInputRef = useRef<HTMLInputElement | null>(null);
  const aboutProjectTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const trafficSourceTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  function addInputErrUx(
    ref:
      | React.RefObject<HTMLInputElement | null>
      | React.RefObject<HTMLTextAreaElement | null>,
  ): void {
    if (!ref.current) return;
    ref.current.classList.remove("min-[1000px]:border-0");
    ref.current.classList.remove("border-b-2");
    ref.current.classList.remove("border-gray-600");
    ref.current.classList.add("pt-2");
    ref.current.classList.add("border-[#C0392B]");
  }
  function removeInputErrUx(
    ref:
      | React.RefObject<HTMLInputElement | null>
      | React.RefObject<HTMLTextAreaElement | null>,
  ): void {
    if (!ref.current) return;
    ref.current.classList.remove("pt-2");
    ref.current.classList.remove("border-[#C0392B]");
    ref.current.classList.add("min-[1000px]:border-0");
    ref.current.classList.add("border-b-2");
    ref.current.classList.add("border-gray-600");
  }
  //
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
    if (clientFullName.length < 3) {
      addInputErrUx(fullNameInputRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(0);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(fullNameInputRef);
    }
    if (jobTitle.length < 3) {
      addInputErrUx(jobTitleInputRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(1);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(jobTitleInputRef);
    }
    if (email.length < 3) {
      addInputErrUx(emailInputRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(2);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(emailInputRef);
    }
    if (!validateEmail(email)) {
      addInputErrUx(emailInputRef);
      setInputErrUxMsg("Enter a valid email ");
      setInputErrUxTreeSection(2);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(emailInputRef);
    }
    if (phoneNumber.length < 3) {
      addInputErrUx(phoneNumberInputRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(3);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(phoneNumberInputRef);
    }
    if (companyName.length < 3) {
      addInputErrUx(companyNameInputRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(4);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(companyNameInputRef);
    }
    if (aboutProject.length < 3) {
      addInputErrUx(aboutProjectInputRef);
      addInputErrUx(aboutProjectTextAreaRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(5);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(aboutProjectInputRef);
      removeInputErrUx(aboutProjectTextAreaRef);
    }
    if (trafficSource.length < 4) {
      addInputErrUx(trafficSourceInputRef);
      addInputErrUx(trafficSourceTextAreaRef);
      setInputErrUxMsg("This field is required");
      setInputErrUxTreeSection(6);
      setRenderInputErrUx(true);
      return;
    } else {
      removeInputErrUx(trafficSourceInputRef);
      removeInputErrUx(trafficSourceTextAreaRef);
    }

    //
    setRenderInputErrUx(false);
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
          setRenderFormResponse(true);
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
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Full Name
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 0 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <div className="relative w-full h-full min-[1000px]:mt-6">
                <input
                  className="border-2  min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7  rounded-2xl min-[1000px]:rounded-none"
                  value={clientFullName}
                  ref={fullNameInputRef}
                  onChange={(e) => setClientFullName(e.target.value)}
                ></input>
                {renderInputErrUx && inputErrUxTreeSection === 0 && (
                  <NotificationBar errMassage={inputErrUxMsg} />
                )}
              </div>
            </span>
            <span className="flex flex-col font-inter">
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Job Title
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 1 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <div className="relative w-full h-full min-[1000px]:mt-6">
                <input
                  className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 rounded-2xl min-[1000px]:rounded-none"
                  value={jobTitle}
                  ref={jobTitleInputRef}
                  onChange={(e) => setJobTitle(e.target.value)}
                ></input>
                {renderInputErrUx && inputErrUxTreeSection === 1 && (
                  <NotificationBar errMassage={inputErrUxMsg} />
                )}
              </div>
            </span>
            <span className="flex flex-col font-inter">
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Business Email
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 2 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <div className="relative w-full h-full min-[1000px]:mt-6">
                <input
                  className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 rounded-2xl min-[1000px]:rounded-none"
                  value={email}
                  ref={emailInputRef}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {renderInputErrUx && inputErrUxTreeSection === 2 && (
                  <NotificationBar errMassage={inputErrUxMsg} />
                )}
              </div>
            </span>
            <span className="flex flex-col font-inter">
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Phone Number
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 3 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <div className="relative w-full h-full min-[1000px]:mt-6">
                <input
                  className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 rounded-2xl min-[1000px]:rounded-none"
                  value={phoneNumber}
                  ref={phoneNumberInputRef}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                {renderInputErrUx && inputErrUxTreeSection === 3 && (
                  <NotificationBar errMassage={inputErrUxMsg} />
                )}
              </div>
            </span>
            <span className="flex flex-col font-inter">
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Company Name
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 4 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <div className="relative w-full h-full min-[1000px]:mt-6">
                <input
                  className="border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7 rounded-2xl min-[1000px]:rounded-none"
                  value={companyName}
                  ref={companyNameInputRef}
                  onChange={(e) => setCompanyName(e.target.value)}
                ></input>
                {renderInputErrUx && inputErrUxTreeSection === 4 && (
                  <NotificationBar errMassage={inputErrUxMsg} />
                )}
              </div>
            </span>
            <span className="flex flex-col h-full font-inter">
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  Tell us about your project
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 5 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <span>
                <div className="relative w-full h-full min-[1000px]:mt-6">
                  <input
                    className="min-[1000px]:inline-block hidden h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4 sm:min-h-12  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7  rounded-2xl min-[1000px]:rounded-none"
                    value={aboutProject}
                    ref={aboutProjectInputRef}
                    onChange={(e) => setAboutProject(e.target.value)}
                  ></input>
                  <textarea
                    className="min-[1000px]:hidden inline-block  h-41.75  border-2 min-[1000px]:border-0 pl-4 sm:min-h-12 min-[1000px]:h-full min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7  rounded-2xl min-[1000px]:rounded-none"
                    value={aboutProject}
                    ref={aboutProjectTextAreaRef}
                    onChange={(e) => setAboutProject(e.target.value)}
                  ></textarea>
                  {renderInputErrUx && inputErrUxTreeSection === 5 && (
                    <NotificationBar errMassage={inputErrUxMsg} />
                  )}
                </div>
              </span>
            </span>
            <span className="flex flex-col h-full font-inter mt-0 min-[1000px]:mt-5">
              <span className="flex items-center gap-3">
                <h5 className="ourWorkHeadMenu font-inter font-medium">
                  How did you find D'rahim tech innovation?
                </h5>
                {renderInputErrUx && inputErrUxTreeSection === 6 && (
                  <h5 className="ourWorkHeadMenu font-inter font-bold text-[#C0392B]">
                    *
                  </h5>
                )}
              </span>
              <span>
                <div className="relative w-full h-full  min-[1000px]:mt-6 ">
                  <input
                    className="min-[1000px]:inline-block hidden h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4 sm:min-h-12  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7  rounded-2xl min-[1000px]:rounded-none"
                    value={trafficSource}
                    ref={trafficSourceInputRef}
                    onChange={(e) => setTrafficSource(e.target.value)}
                  ></input>
                  <textarea
                    className="min-[1000px]:hidden min-h-41.75  max-h-[200px] inline-block   h-41.75 min-[1000px]:h-full border-2 min-[1000px]:border-0 pl-4  min-[1000px]:border-b-2 border-gray-600 w-full p-2.5 min-[620px]:p-0 min-[1000px]:pb-7  rounded-2xl min-[1000px]:rounded-none"
                    value={trafficSource}
                    ref={trafficSourceTextAreaRef}
                    onChange={(e) => setTrafficSource(e.target.value)}
                  ></textarea>
                  {renderInputErrUx && inputErrUxTreeSection === 6 && (
                    <NotificationBar errMassage={inputErrUxMsg} />
                  )}
                </div>
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
