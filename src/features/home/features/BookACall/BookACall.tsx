import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
import BookACallContent from "./components/BookACallContent";
import { useEffect } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
function BookACall() {
  const pagesConfigData = PagesConfigDataApi();
  const { setBookACallPage } = pagesConfigData;
  useEffect(() => {
    (() => {
      setBookACallPage(true);
    })();
  }, []);
  return (
    <>
      <Top />
      <main>
        <BookACallContent />
      </main>
      <End />
    </>
  );
}
export default BookACall;
