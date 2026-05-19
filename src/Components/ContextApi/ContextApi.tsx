import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type SetStateAction,
} from "react";
type Data = {
  projectInfo: OurWorkData;
  setProjectInfo: React.Dispatch<SetStateAction<OurWorkData>>;
};
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
const DataContext = createContext<Data | null>(null);
export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [projectInfo, setProjectInfo] = useState<OurWorkData>({
    image: "",
    text: "",
    subText: "",
    popUpHeadding: "",
    popHeadText: "",
    capabilities: [],
    duration: "",
    team: [],
    location: "",
    industry: [],
    endText: "",
  });
  return (
    <DataContext.Provider
      value={{
        projectInfo,
        setProjectInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const AppDataContext = () => useContext(DataContext);
