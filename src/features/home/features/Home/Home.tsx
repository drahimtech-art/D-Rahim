import Top from "../../shared/Top/Top";
import Category from "../../shared/CategoryMenu/Category";
import EndCategoryMenu from "../../shared/CategoryMenu/EndCategoryMenu";
import End from "../../shared/Footer/Footer";
function Home() {
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
