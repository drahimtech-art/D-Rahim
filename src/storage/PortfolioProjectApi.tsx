import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type SetStateAction,
} from "react";
export type ProjectData = {
  pImage: string;
  title: string;
  about: string;
  heading: string;
  sImage: string;
  capabilities: string[];
  duration: string;
  team: string;
  location: string;
  industry: string[];
  projectType: string;
  creationDate: Date;
  projectStatus: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
type DesignType = {
  moblieDesign: ProjectData[];
  websiteDesign: ProjectData[];
  branding: ProjectData[];
};
type ProjectDataType = {
  projectInfo: ProjectData;
  setProjectInfo: React.Dispatch<SetStateAction<ProjectData>>;
  listOfProjects: DesignType;
  setListOfProjects: React.Dispatch<SetStateAction<DesignType>>;
  allRandomSelectedProjectInfo: ProjectData[][] | undefined;
  setAllRandomSelectedProjectInfo: React.Dispatch<
    SetStateAction<ProjectData[][] | undefined>
  >;
};
const ProjectDataContext = createContext<ProjectDataType>({
  projectInfo: {
    pImage: "",
    title: "",
    about: "",
    heading: "",
    sImage: "",
    capabilities: [],
    duration: "",
    team: "",
    location: "",
    industry: [],
    projectType: "",
    creationDate: new Date(),
    projectStatus: "",
    _id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  setProjectInfo: () => {},
  listOfProjects: {
    moblieDesign: [],
    websiteDesign: [],
    branding: [],
  },
  setListOfProjects: () => {},
  allRandomSelectedProjectInfo: undefined,
  setAllRandomSelectedProjectInfo: () => {},
});
export const ProjectDataProvider = ({ children }: { children: ReactNode }) => {
  const [projectInfo, setProjectInfo] = useState<ProjectData>({
    pImage: "",
    title: "",
    about: "",
    heading: "",
    sImage: "",
    capabilities: [],
    duration: "",
    team: "",
    location: "",
    industry: [],
    projectType: "",
    creationDate: new Date(),
    projectStatus: "",
    _id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  });
  const [listOfProjects, setListOfProjects] = useState<DesignType>({
    moblieDesign: [],
    websiteDesign: [],
    branding: [],
  });
  const [allRandomSelectedProjectInfo, setAllRandomSelectedProjectInfo] =
    useState<ProjectData[][] | undefined>(undefined);
  return (
    <ProjectDataContext.Provider
      value={{
        projectInfo,
        setProjectInfo,
        listOfProjects,
        setListOfProjects,
        allRandomSelectedProjectInfo,
        setAllRandomSelectedProjectInfo,
      }}
    >
      {children}
    </ProjectDataContext.Provider>
  );
};
export const ProjectDataApi = () => useContext(ProjectDataContext);
