import Top from "../../shared/Top/Top";
import Head from "./components/Head";
import PageContent from "./components/PageContent";
import End from "../../shared/Footer/Footer";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
import { useState, useEffect } from "react";
function Call(): React.ReactElement {
  const pagesConfigData = PagesConfigDataApi();
  const { setCallPage, callPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!callPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setCallPage(true);
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
        <Head />
        <PageContent />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default Call;
