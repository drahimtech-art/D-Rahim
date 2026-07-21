import Top from "../../shared/Top/Top";
import Category from "../../shared/CategoryMenu/Category";
import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import End from "../../shared/Footer/Footer";
function Home() {
  return (
    <>
      <Top />
      <Category />
      <div className="hidden min-[1000px]:flex w-full">
        <EndCategoryMenu />
      </div>
      <End />
    </>
  );
}
export default Home;
