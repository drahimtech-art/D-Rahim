import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";

type StudentsAppData = {
  userInfo: UserData;
  setUserInfo: React.Dispatch<SetStateAction<UserData>>;
  contactMessages: Messages[];
  setContactMessages: React.Dispatch<SetStateAction<Messages[]>>;
  conections: Connections[];
  setConections: React.Dispatch<SetStateAction<Connections[]>>;
  chatContact: ChatContact | null;
  setChatContact: React.Dispatch<SetStateAction<ChatContact | null>>;
  inputMessage: string;
  setInputMessage: React.Dispatch<SetStateAction<string>>;
  sendMessage: boolean;
  setSendMessage: React.Dispatch<SetStateAction<boolean>>;
  files: Blob | undefined;
  setFiles: React.Dispatch<SetStateAction<Blob | undefined>>;
  isFiles: boolean;
  setIsFiles: React.Dispatch<SetStateAction<boolean>>;
  conectionsWithTimeStap: Connections[];
  setConectionsWithTimeStap: React.Dispatch<SetStateAction<Connections[]>>;
  sortedConections: Connections[];
  setSortedConections: React.Dispatch<SetStateAction<Connections[]>>;
  popUpControl: boolean;
  setPopUpControl: React.Dispatch<SetStateAction<boolean>>;
  popUpCard: ReactNode;
  setPopUpCard: React.Dispatch<SetStateAction<ReactNode>>;
};
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bio: string;
  connectionId: string;
  imageUrl: string | null;
};
type Messages = {
  from: string;
  to: string;
  type: string;
  imgUrl: string;
  date: string;
  time: string;
  text: string;
  _id?: string;
};
type Connections = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  chatGroupId: string;
  bio: string;
  date?: string;
  time?: string;
};
type ChatContact = {
  contactId: string;
  contactFirstName: string;
  contactLastName: string;
  contactImage: string | null;
  chatGroupId: string;
};
type SortingData = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  date: string;
  time: string;
};
const studentsData = createContext<StudentsAppData | null>(null);
export const StudentsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    bio: "",
    connectionId: "",
    imageUrl: null,
  });
  const [contactMessages, setContactMessages] = useState<Messages[]>([]);
  const [conections, setConections] = useState<Connections[]>([]);
  const [conectionsWithTimeStap, setConectionsWithTimeStap] = useState<
    Connections[]
  >([]);
  const [sortedConections, setSortedConections] = useState<Connections[]>([]);
  const [chatContact, setChatContact] = useState<ChatContact | null>(null);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const [files, setFiles] = useState<Blob | undefined>(undefined);
  const [isFiles, setIsFiles] = useState<boolean>(false);
  const [popUpControl, setPopUpControl] = useState<boolean>(false);
  const [popUpCard, setPopUpCard] = useState<ReactNode | undefined>();
  return (
    <studentsData.Provider
      value={{
        userInfo,
        setUserInfo,
        contactMessages,
        setContactMessages,
        conections,
        setConections,
        chatContact,
        setChatContact,
        inputMessage,
        setInputMessage,
        sendMessage,
        setSendMessage,
        files,
        setFiles,
        isFiles,
        setIsFiles,
        conectionsWithTimeStap,
        setConectionsWithTimeStap,
        sortedConections,
        setSortedConections,
        popUpControl,
        setPopUpControl,
        popUpCard,
        setPopUpCard,
      }}
    >
      {children}
    </studentsData.Provider>
  );
};
export const StudentsAppData = () => useContext(studentsData);
