import Top from "../../shared/Top/Top";
import Category from "../../shared/CategoryMenu/Category";
import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import End from "../../shared/Footer/Footer";
import { useEffect } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
function Home() {
  const pagesConfigData = PagesConfigDataApi();
  const { setWorkPage } = pagesConfigData;
  useEffect(() => {
    (() => {
      setWorkPage(true);
    })();
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
    </>
  );
}
export default Home;
