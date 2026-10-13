import { useState, useEffect, createContext, useContext } from "react";
import type { AnalyticsDataType } from "../features/admin/features/analytics/api/Api";
//
interface AdminConfigType {
  filterDateList: string[];
  setFilterDateList: React.Dispatch<React.SetStateAction<string[]>>;
  filterDateRangeText: string;
  analyticsData: AnalyticsDataType;
  setAnalyticsData: React.Dispatch<React.SetStateAction<AnalyticsDataType>>;
}
const AdminConfigContextData = createContext<AdminConfigType>({
  filterDateList: [],
  setFilterDateList: () => {},
  filterDateRangeText: "",
  analyticsData: {
    _id: "",
    dateMonthYearDate: "",
    liveVistors: 0,
    newUsers: 0,
    pageViewed: 0,
    bouncedBackUsers: 0,
    returningUsers: 0,
    deviceType: {
      desktop: 0,
      mobile: 0,
      tablet: 0,
      other: 0,
      _id: "",
    },
    platformVisitedFrom: {
      facebook: 0,
      linkedIn: 0,
      youtub: 0,
      tiktok: 0,
      behance: 0,
      instagram: 0,
      twitter: 0,
      google: 0,
      pintrest: 0,
      other: 0,
      _id: "",
    },
    __v: 0,
  },
  setAnalyticsData: () => {},
});
function AdminConfigProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [filterDateList, setFilterDateList] = useState<string[]>([
    new Date().toDateString(),
  ]);
  const [filterDateRangeText, setFilterDateRangeText] = useState<string>("");
  const [analyticsData, setAnalyticsData] = useState<AnalyticsDataType>({
    _id: "",
    dateMonthYearDate: "",
    liveVistors: 0,
    newUsers: 0,
    pageViewed: 0,
    bouncedBackUsers: 0,
    returningUsers: 0,
    deviceType: {
      desktop: 0,
      mobile: 0,
      tablet: 0,
      other: 0,
      _id: "",
    },
    platformVisitedFrom: {
      facebook: 0,
      linkedIn: 0,
      youtub: 0,
      tiktok: 0,
      behance: 0,
      instagram: 0,
      twitter: 0,
      google: 0,
      pintrest: 0,
      other: 0,
      _id: "",
    },
    __v: 0,
  });
  //
  useEffect(() => {
    if (filterDateList.length > 1) {
      const startingDate = `${filterDateList[0].split(" ")[1]} ${filterDateList[0].split(" ")[2]}`;
      const endingDate = `${filterDateList[filterDateList.length - 1].split(" ")[1]} ${filterDateList[filterDateList.length - 1].split(" ")[2]}`;
      const endingYear = `${filterDateList[filterDateList.length - 1].split(" ")[3]}`;
      const filterUiText = `${startingDate} - ${endingDate}, ${endingYear}`;
      setFilterDateRangeText(filterUiText);
    } else {
      const startingDate = `${filterDateList[0].split(" ")[1]} ${filterDateList[0].split(" ")[2]}`;
      const endingDate = `${filterDateList[0].split(" ")[1]} ${filterDateList[0].split(" ")[2]}`;
      const endingYear = `${filterDateList[0].split(" ")[3]}`;
      const filterUiText = `${startingDate} - ${endingDate}, ${endingYear}`;
      setFilterDateRangeText(filterUiText);
    }
  }, [filterDateList]);
  return (
    <AdminConfigContextData.Provider
      value={{
        filterDateList,
        setFilterDateList,
        filterDateRangeText,
        analyticsData,
        setAnalyticsData,
      }}
    >
      {children}
    </AdminConfigContextData.Provider>
  );
}
export const AdminConfigApi = () => useContext(AdminConfigContextData);
export default AdminConfigProvider;
