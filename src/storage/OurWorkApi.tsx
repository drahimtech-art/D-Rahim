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
  listOfProjects: DesignType | undefined;
  setListOfProjects: React.Dispatch<SetStateAction<DesignType | undefined>>;
};
type OurWorkData = {
  imageUrl: string;
  imageText: string;
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
type DesignType = {
  moblieDesign: OurWorkData[];
  webSiteDesign: OurWorkData[];
  branding: OurWorkData[];
};
const OurWork = createContext<Data | null>(null);
export const OurWorkProvider = ({ children }: { children: ReactNode }) => {
  const [projectInfo, setProjectInfo] = useState<OurWorkData>({
    imageUrl: "",
    imageText: "",
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
  const [listOfProjects, setListOfProjects] = useState<DesignType | undefined>(
    undefined,
  );
  return (
    <OurWork.Provider
      value={{
        projectInfo,
        setProjectInfo,
        listOfProjects,
        setListOfProjects,
      }}
    >
      {children}
    </OurWork.Provider>
  );
};
export const OurWorkApi = () => useContext(OurWork);
