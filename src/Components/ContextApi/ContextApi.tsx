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
  userInfo: UserData;
  setUserInfo: React.Dispatch<SetStateAction<UserData>>;
  contactMessages: ContactMessages;
  setContactMessages: React.Dispatch<SetStateAction<ContactMessages>>;
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
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bio: string;
};
type Messages = {
  from: string;
  to: string;
  type: string;
  imgUrl: string;
  date: string;
  time: string;
  text: string;
};
type ContactMessages = {
  userId: string;
  contactId: string;
  messages: Messages[];
};
const DataContext = createContext<Data | null>(null);
export const DataContextProvider = ({ children }: { children: ReactNode }) => {
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
  const [userInfo, setUserInfo] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    bio: "",
  });
  const [contactMessages, setContactMessages] = useState<ContactMessages>({
    userId: "",
    contactId: "",
    messages: [],
  });
  return (
    <DataContext.Provider
      value={{
        projectInfo,
        setProjectInfo,
        userInfo,
        setUserInfo,
        contactMessages,
        setContactMessages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const AppDataContext = () => useContext(DataContext);
