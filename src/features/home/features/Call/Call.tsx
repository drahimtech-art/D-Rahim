import Top from "../../shared/Top/Top";
import Head from "./components/Head";
import PageContent from "./components/PageContent";
import End from "../../shared/Footer/Footer";
function Call(): React.ReactElement {
  return (
    <>
      <Top />
      <main>
        <Head />
        <PageContent />
      </main>
      <End />
    </>
  );
}
export default Call;
