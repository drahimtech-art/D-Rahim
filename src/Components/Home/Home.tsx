import Top from "../Top/Top";
import Category from "../CategoryMenu/Category";
import EndCategoryMenu from "../CategoryMenu/EndCategoryMenu";
import End from "../End/End";
function Home() {
  return (
    <div>
      <Top />
      <Category />
      <div className="hidden sm:flex w-full">
        <EndCategoryMenu />
      </div>
      <End />
    </div>
  );
}
export default Home;
