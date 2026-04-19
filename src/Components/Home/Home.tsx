import Top from "../Top/Top";
import Category from "../CategoryMenu/Category";
import CardList from "./CardList";
import EndCategoryMenu from "../CategoryMenu/EndCategoryMenu";
import End from "../End/End";
function Home() {
  return (
    <>
      <Top />
      <Category />
      <CardList />
      <EndCategoryMenu />
      <End />
    </>
  );
}
export default Home;
