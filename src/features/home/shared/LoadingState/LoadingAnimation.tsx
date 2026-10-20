import { useEffect, useRef } from "react";
import appLogo from "/images/logo.png";
function LoadingAnimation({
  shouldFadeOut,
}: {
  shouldFadeOut: boolean;
}): React.ReactElement {
  const animationBody = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  //
  useEffect(() => {
    if (!animationBody.current || !shouldFadeOut) return;
    animationBody.current.classList.add("loadFadeOut");
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <article
      className="w-full h-screen max-h-screen bodyMaxSizing  bg-green-900 font-bold text-2xl top-0 fixed z-50"
      ref={animationBody}
    >
      <section className="flex justify-center items-center w-full h-full">
        <div className=" w-[300px] h-[300px] relative min-[700px]:w-[500px]  min-[700px]:h-[500px]  rounded-full">
          {/**rotation ring */}
          <div className=" w-[300px] h-[300px] relative min-[700px]:w-[500px]  min-[700px]:h-[500px] bg-green-900 border-7 border-green-500  rounded-full animation-180deg">
            <div className="absolute bg-green-900 w-[200px] h-[90px]  min-[700px]:h-[150px]  top-[40%] -ml-4"></div>
          </div>
          {/**loading logo */}
          <div className="w-full h-full z-10 absolute top-0  p-10 flex justify-center items-center">
            <div className="w-[90%] h-[50%]  flex justify-center items-center">
              <header className="flex items-center">
                <div className="w-[70px] min-[700px]:w-[80px]  h-full">
                  <img
                    className="w-full  h-full"
                    src={appLogo}
                    alt="logo"
                  ></img>
                </div>
                <span className="">
                  <h5 className="font-inter text-gray-100 font-semibold min45Max80px">
                    D'RAHIM
                  </h5>
                  <h5 className=" w-fit font-semibold text-gray-100  min21Max40px -mt-4 sm:-mt-5">
                    TECH INNOVATION
                  </h5>
                </span>
              </header>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
export default LoadingAnimation;
