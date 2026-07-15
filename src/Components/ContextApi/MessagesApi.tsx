import { createContext, useContext, useState } from "react";

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
  invite: boolean;
  isConnected: boolean;
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
  isConnected: boolean;
};
type SortingData = {
  contactFirstName: string;
  contactLastName: string;
  contactId: string;
  contactImage: string | null;
  invite: boolean;
  isConnected: boolean;
  date: string;
  time: string;
};
type MessagesApiDataType = {
  contactMessages: Messages[];
  setContactMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
  conections: Connections[] | [];
  setConections: React.Dispatch<React.SetStateAction<Connections[]>>;
  chatContact: ChatContact | null;
  setChatContact: React.Dispatch<React.SetStateAction<ChatContact | null>>;
  inputMessage: string;
  setInputMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: boolean;
  setSendMessage: React.Dispatch<React.SetStateAction<boolean>>;
  files: Blob | undefined;
  setFiles: React.Dispatch<React.SetStateAction<Blob | undefined>>;
  isFiles: boolean;
  setIsFiles: React.Dispatch<React.SetStateAction<boolean>>;
  conectionsWithTimeStap: Connections[];
  setConectionsWithTimeStap: React.Dispatch<
    React.SetStateAction<Connections[]>
  >;
  sortedConections: Connections[];
  setSortedConections: React.Dispatch<React.SetStateAction<Connections[]>>;
};
const MessagesApiData = createContext<MessagesApiDataType>({
  contactMessages: [],
  setContactMessages: () => {},
  conections: [],
  setConections: () => {},
  chatContact: null,
  setChatContact: () => {},
  inputMessage: "",
  setInputMessage: () => {},
  sendMessage: false,
  setSendMessage: () => {},
  files: undefined,
  setFiles: () => {},
  isFiles: false,
  setIsFiles: () => {},
  conectionsWithTimeStap: [],
  setConectionsWithTimeStap: () => {},
  sortedConections: [],
  setSortedConections: () => {},
});
export function MessagesApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
  return (
    <MessagesApiData.Provider
      value={{
        contactMessages: contactMessages,
        setContactMessages: setContactMessages,
        conections: conections,
        setConections: setConections,
        chatContact: chatContact,
        setChatContact: setChatContact,
        inputMessage: inputMessage,
        setInputMessage: setInputMessage,
        sendMessage: sendMessage,
        setSendMessage: setSendMessage,
        files: files,
        setFiles: setFiles,
        isFiles: isFiles,
        setIsFiles: setIsFiles,
        conectionsWithTimeStap: conectionsWithTimeStap,
        setConectionsWithTimeStap: setConectionsWithTimeStap,
        sortedConections: sortedConections,
        setSortedConections: setSortedConections,
      }}
    >
      {children}
    </MessagesApiData.Provider>
  );
}
export const MessagesApi = () => useContext(MessagesApiData);
