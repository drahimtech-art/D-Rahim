import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "../../shared/SearchAndFilterBar";
import List from "./components/List";
function Payment(): React.ReactElement {
  return (
    <article className="w-full h-full">
      <TopBar
        heading="Payments"
        subHeading="Track all payments and invoices."
      />
      <SearchAndFilterBar searchSection="payments" />
      <List />
    </article>
  );
}
export default Payment;
//
