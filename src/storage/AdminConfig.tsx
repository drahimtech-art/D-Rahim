import { useState, createContext, useContext } from "react";
//
interface AdminConfigType {
  filterDateList: string[];
  setFilterDateList: React.Dispatch<React.SetStateAction<string[]>>;
}
const AdminConfigContextData = createContext<AdminConfigType>({
  filterDateList: [],
  setFilterDateList: () => {},
});
function AdminConfigProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [filterDateList, setFilterDateList] = useState<string[]>([]);
  return (
    <AdminConfigContextData.Provider
      value={{ filterDateList, setFilterDateList }}
    >
      {children}
    </AdminConfigContextData.Provider>
  );
}
export const AdminConfigApi = () => useContext(AdminConfigContextData);
export default AdminConfigProvider;
