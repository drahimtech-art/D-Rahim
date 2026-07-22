import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type SetStateAction,
} from "react";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
type DesignType = {
  moblieDesign: OurWorkData[];
  websiteDesign: OurWorkData[];
  branding: OurWorkData[];
};
type OurWorkDataType = {
  projectInfo: OurWorkData;
  setProjectInfo: React.Dispatch<SetStateAction<OurWorkData>>;
  listOfProjects: DesignType;
  setListOfProjects: React.Dispatch<SetStateAction<DesignType>>;
};
const OurWork = createContext<OurWorkDataType>({
  projectInfo: {
    image: "",
    text: "",
    subText: "",
    popUpHeadding: "",
    popHeadText: "",
    popImageUrl: "",
    capabilities: [],
    duration: "",
    team: [],
    location: "",
    industry: [],
    endText: "",
  },
  setProjectInfo: () => {},
  listOfProjects: {
    moblieDesign: [],
    websiteDesign: [],
    branding: [],
  },
  setListOfProjects: () => {},
});
export const OurWorkProvider = ({ children }: { children: ReactNode }) => {
  const [projectInfo, setProjectInfo] = useState<OurWorkData>({
    image: "",
    text: "",
    subText: "",
    popUpHeadding: "",
    popHeadText: "",
    popImageUrl: "",
    capabilities: [],
    duration: "",
    team: [],
    location: "",
    industry: [],
    endText: "",
  });
  const [listOfProjects, setListOfProjects] = useState<DesignType>({
    moblieDesign: [],
    websiteDesign: [],
    branding: [],
  });
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
