import { useState, useEffect, createContext, useContext } from "react";
//
interface AdminConfigType {
  filterDateList: string[];
  setFilterDateList: React.Dispatch<React.SetStateAction<string[]>>;
  filterDateRangeText: string;
}
const AdminConfigContextData = createContext<AdminConfigType>({
  filterDateList: [],
  setFilterDateList: () => {},
  filterDateRangeText: "",
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
      value={{ filterDateList, setFilterDateList, filterDateRangeText }}
    >
      {children}
    </AdminConfigContextData.Provider>
  );
}
export const AdminConfigApi = () => useContext(AdminConfigContextData);
export default AdminConfigProvider;
