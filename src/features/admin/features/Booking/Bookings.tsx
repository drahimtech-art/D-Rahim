import TopBar from "../../shared/TopBar";
import SearchAndFilterBar from "./components/SearchAndFilterBar";
import List from "./components/List";
import type { BookingData } from "../../../../storage/AdminConfig";
import { useState } from "react";
function Bookings() {
  const [bookingList, setBookingList] = useState<BookingData[]>([]);
  const [constBookingList, setConstBookingList] = useState<BookingData[]>([]);
  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Bookings"}
        subHeading={"Manage all bookings and appointments requests."}
      />
      <SearchAndFilterBar
        constBookingList={constBookingList}
        setBookingList={setBookingList}
        setConstBookingList={setConstBookingList}
        searchSection="bookings"
      />
      <List bookingList={bookingList} />
    </article>
  );
}
export default Bookings;
