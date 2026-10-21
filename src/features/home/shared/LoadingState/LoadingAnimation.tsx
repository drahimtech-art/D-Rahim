import { useEffect, useRef } from "react";
import loadingAnimationLogo from "/images/loadinAnimationLogo.png";
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
      className="w-full h-screen max-h-screen bodyMaxSizing  bg-[#004B3F] font-bold text-2xl top-0 fixed z-50"
      ref={animationBody}
    >
      <section className="flex justify-center items-center w-full h-full">
        <div className="w-[250px] h-[250px] min-[300px]:w-[300px] min-[300px]:h-[300px] relative  rounded-full">
          {/**rotation ring */}
          <div className=" w-[250px] h-[250px] min-[300px]:w-[300px] min-[300px]:h-[300px] relative  bg-[#004B3F]  border-7 border-[#20D98A]  rounded-full animation-180deg">
            <div className="absolute bg-[#004B3F]  w-[100px] h-[50px] min-[300px]:w-[200px] min-[300px]:h-[90px]   top-[40%] -ml-4"></div>
          </div>
          {/**loading logo */}
          <div className="w-full h-full z-10 absolute top-0   flex justify-center items-center">
            <div className="w-[240px] h-[240px] min-[300px]:min-w-[292px] min-[300px]:min-h-[292px] min-[300px]:max-w-[292px] min-[300px]:max-h-[292px] flex justify-center items-center">
              <header className="flex items-center">
                <img
                  className="w-[240px] h-[240px] min-[300px]:min-w-[292px] min-[300px]:min-h-[292px] min-[300px]:max-w-[292px] min-[300px]:max-h-[292px]"
                  src={loadingAnimationLogo}
                ></img>
              </header>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
export default LoadingAnimation;
