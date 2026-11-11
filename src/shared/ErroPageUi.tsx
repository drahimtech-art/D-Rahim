import Logo from "/images/logo.png";
import erro404Img from "/images/pana.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingAnimation from "../features/home/shared/LoadingState/LoadingAnimation";
import { PagesConfigDataApi } from "../storage/PagesConfig";
function ErroPageUi(): React.ReactElement {
  const urlNavigator = useNavigate();
  const pagesConfigData = PagesConfigDataApi();
  const { setWorkPage, setBookACallPage } = pagesConfigData;
  const [shouldAppLoad, setShouldAppLoad] = useState<boolean>(false);
  //
  function work() {
    setWorkPage(false);
    urlNavigator("/", { replace: true });
  }
  function contact() {
    setBookACallPage(false);
    urlNavigator("/book/call", { replace: true });

    setShouldAppLoad(true);
  }
  return (
    <>
      <main className="w-full  flex flex-col  h-screen max-h-fit min-[1000px]:max-h-screen bg-white">
        {/**top bar */}
        <article className="bg-white min-[1000px]:block hidden  sticky top-0  z-20">
          <div className="flex  w-full max-h-28.75  z-5 items-center min-[1000px]:p-10 p-5    bg-white  ">
            <header className="flex">
              <div className="w-7  min-[1000px]:w-8 h-10">
                <img src={Logo} alt="logo"></img>
              </div>
              <span className="mt-0.5">
                <h5 className="font-inter  font-semibold text-[1.1rem]">
                  D'RAHIM
                </h5>
                <h5 className="-mt-1 font-semibold text-[0.5rem]">
                  TECH INNOVATION
                </h5>
              </span>
            </header>
            <nav className="ml-auto">
              <section className="hidden min-[1000px]:block ml-auto ">
                <span
                  className="block w-fit h-fit min-[1000px]:p-2 p-1 min-[1000px]:pl-7 min-[1000px]:pr-7 pr-5 pl-5 rounded-full bg-primary-green hover:bg-secondary-green pointer"
                  onClick={contact}
                >
                  <h5 className="text-white ourWorkHeadMenu  font-inter ">
                    Get In Touch{" "}
                  </h5>
                </span>
              </section>
            </nav>
          </div>
        </article>
        {/**content */}
        <article className="w-full h-full flex  justify-center min-[1000px]:justify-start  items-center min-[1000px]:p-10 p-5  ">
          <div className="flex flex-col min-[1000px]:flex-row  min-[1000px]:gap-[152px] gap-[20px] h-full items-center max-h-[409px] ">
            <section className="hidden min-[1000px]:block">
              <div className="flex flex-col gap-[10px] w-full max-w-[422px]">
                <h4 className="font-sans font-semibold min35pxMax60px">
                  Oops...
                </h4>
                <h5 className="font-inter font-normal min24pxMax48px">
                  Page not found
                </h5>
                <p className="font-inter font-normal min14pxMax18px">
                  The page you are looking for doesn’t exist or an other error
                  occurred, go back to home page.
                </p>
              </div>
              <nav className="mt-[28px]">
                <section className=" ">
                  <span
                    className="block w-fit h-fit min-[1000px]:p-2 p-1 min-[1000px]:pl-7 min-[1000px]:pr-7 pr-5 pl-5 rounded-full bg-primary-green hover:bg-secondary-green pointer"
                    onClick={work}
                  >
                    <h5 className="text-white ourWorkHeadMenu  font-inter ">
                      Go Back
                    </h5>
                  </span>
                </section>
              </nav>
            </section>
            <section>
              <img className="w-fit h-fit " src={erro404Img} />
            </section>
            <section className="block min-[1000px]:hidden pb-[100px]">
              <div className="flex flex-col gap-[10px] w-full max-w-[422px]">
                <h4 className="font-sans font-semibold min35pxMax60px">
                  Oops...
                </h4>
                <h5 className="font-inter font-normal min24pxMax48px">
                  Page not found
                </h5>
                <p className="font-inter font-normal min14pxMax18px">
                  The page you are looking for doesn’t exist or an other error
                  occurred, go back to home page.
                </p>
              </div>
              <nav className="mt-[28px]">
                <section className=" flex justify-center">
                  <span
                    className="block w-fit h-fit p-3.25 pl-9.25 pr-9.25  rounded-full bg-primary-green hover:bg-secondary-green pointer"
                    onClick={work}
                  >
                    <h5 className="text-white ourWorkHeadMenu  font-inter ">
                      Go Back
                    </h5>
                  </span>
                </section>
              </nav>
            </section>
          </div>
        </article>
      </main>
      {shouldAppLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default ErroPageUi;
