import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
import BookACallContent from "./components/BookACallContent";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
function BookACall() {
  const pagesConfigData = PagesConfigDataApi();
  const { setBookACallPage, bookACallPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!bookACallPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setBookACallPage(true);
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
        <BookACallContent />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default BookACall;
