import Top from "../../shared/Top/Top";
import Category from "../../shared/CategoryMenu/Category";
import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import End from "../../shared/Footer/Footer";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";

function Home() {
  const pagesConfigData = PagesConfigDataApi();
  const { setWorkPage, workPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!workPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setWorkPage(true);
        setShouldLoad(false);
      })();
    }, 1000);
    return () => {
      clearTimeout(removeLoadinigAnimationTimeOut);
    };
  }, []);
  return (
    <>
      <Top />
      <main>
        <Category />
        <div className="hidden min-[1000px]:flex w-full">
          <EndCategoryMenu />
        </div>
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default Home;
