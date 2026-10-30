import { useState, useEffect } from "react";
import type { BookingData } from "../../../../../storage/AdminConfig";
function SearchAndFilterBar({
  searchSection,
  setBookingList,
  constBookingList,
  setConstBookingList,
}: {
  searchSection: string;
  setBookingList: React.Dispatch<React.SetStateAction<BookingData[]>>;
  constBookingList: BookingData[];
  setConstBookingList: React.Dispatch<React.SetStateAction<BookingData[]>>;
}): React.ReactElement {
  const [renderFilterBar, setRenderFilterBar] = useState<boolean>(false);
  //
  const [searchWordsList, setSearchWordsList] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<
    "Pending" | "Cancelled" | "Confirmed" | "All"
  >("All");
  //
  function cheackIfEnterIsClickedOnSearch(e: any) {
    const key: string = e.key;
    if (key === "Enter") {
      handleBookingListApiFetch(false, filterStatus);
    }
  }
  function handleBookingListApiFetch(
    _: boolean,
    status?: "Pending" | "Cancelled" | "Confirmed" | "All",
  ) {
    const filtedList: BookingData[] = [];
    console.log(searchWordsList);
    for (let i = 0; i < constBookingList.length; i++) {
      if (searchWordsList.trim().length > 0) {
        if (
          constBookingList[i].clientFullName
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase()) ||
          constBookingList[i].companyName
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase()) ||
          constBookingList[i].email
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase()) ||
          constBookingList[i].jobTitle
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase()) ||
          constBookingList[i].aboutProject
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase()) ||
          new Date(constBookingList[i].date)
            .toDateString()
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase()) ||
          constBookingList[i].time
            .trim()
            .toLocaleLowerCase()
            .includes(searchWordsList.trim().toLocaleLowerCase())
        ) {
          if (status === "All") {
            filtedList.push(constBookingList[i]);
          } else if (constBookingList[i].status === status) {
            filtedList.push(constBookingList[i]);
          }
        }
      } else {
        if (status === "All") {
          filtedList.push(constBookingList[i]);
        } else if (constBookingList[i].status === status) {
          filtedList.push(constBookingList[i]);
        }
      }
    }
    setBookingList(filtedList);
  }
  //
  useEffect(() => {
    //handleBookingListApiFetch(true, undefined);
    if (constBookingList.length !== 0) return;
    /**
       *   getProjectData({
        searchWordsList: "",
        filterStatus: "All",
      })
        .then((res) => {
          //alert(res.message);
          setBookingList(res.data);
          setConstBookingList(res.data);
          setIsFilterRequstSent(false);
        })
        .catch((error) => {
          console.warn(error);
          setIsFilterRequstSent(false);
        });
       * 
       */
  }, []);

  return (
    <>
      <div className="w-full mt-10  flex pt-7.5 pb-7.5 pl-2.5 pr-2.5 bg-[#FFFFFF]">
        <span className=" w-92.75 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px] mr-auto">
          <i className="fa fa-search text-2xl"></i>
          <input
            className="w-full h-full pl-2"
            placeholder={`Search ${searchSection ? searchSection : "...."}...`}
            value={searchWordsList}
            onChange={(e) => setSearchWordsList(e.target.value)}
            onKeyDown={cheackIfEnterIsClickedOnSearch}
          ></input>
        </span>
        {/** */}
        <div className="w-fit h-full flex items-center gap-5.5">
          <div className="w-37.5 relative">
            <button
              className="flex pointer w-37.5 gap-2 pl-2 pr-2 pt-1.5 pb-1.5 text-[#757575] justify-center items-center border border-gray-500 rounded-[30px]"
              onClick={() => setRenderFilterBar(!renderFilterBar)}
            >
              <h5 className="font-inter font-normal text-[16px]">
                {filterStatus === "All" ? "All Status" : filterStatus}
              </h5>
              <i className="fa fa-angle-down text-[18px] font-light"></i>
            </button>
            {renderFilterBar && (
              <article className="absolute w-[150px] flex flex-col gap-[8px] z-50 h-fit pl-6.25 pr-6.25 pt-3.25 pb-3.25 rounded-[10px] bg-[#FFFFFF] mt-[0.5px] ">
                <button
                  className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]"
                  onClick={() => {
                    if (filterStatus === "All") return;
                    setFilterStatus("All");
                    setRenderFilterBar(false);
                    handleBookingListApiFetch(false, "All");
                  }}
                >
                  <h5>All</h5>
                </button>
                <button
                  className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]"
                  onClick={() => {
                    if (filterStatus === "Confirmed") return;
                    setFilterStatus("Confirmed");
                    setRenderFilterBar(false);
                    handleBookingListApiFetch(false, "Confirmed");
                  }}
                >
                  <h5>Confirmed</h5>
                </button>
                <button
                  className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]"
                  onClick={() => {
                    if (filterStatus === "Pending") return;
                    setFilterStatus("Pending");
                    setRenderFilterBar(false);
                    handleBookingListApiFetch(false, "Pending");
                  }}
                >
                  <h5>Pending</h5>
                </button>
                <button
                  className="pointer w-full h-[40px] border border-[#D9D9D9] text-[#757575] flex justify-center items-center rounded-[30px]"
                  onClick={() => {
                    if (filterStatus === "Cancelled") return;
                    setFilterStatus("Cancelled");
                    setRenderFilterBar(false);
                    handleBookingListApiFetch(false, "Cancelled");
                  }}
                >
                  <h5>Cancelled</h5>
                </button>
              </article>
            )}
          </div>
          <span className="flex w-37.5 gap-2 pl-2 bg-primary-green pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border border-gray-500 rounded-[30px]">
            <i className="fa fa-plus text-[18px] font-light"></i>
            <h5 className="font-inter font-normal text-[16px]">Add New</h5>
          </span>
        </div>
      </div>
      {renderFilterBar && (
        <div
          className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0"
          onClick={() => setRenderFilterBar(!renderFilterBar)}
        ></div>
      )}
    </>
  );
}
export default SearchAndFilterBar;
