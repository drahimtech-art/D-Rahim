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
  contactMessages: ContactMessages;
  setContactMessages: React.Dispatch<SetStateAction<ContactMessages>>;
};
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bio: string;
  connectionId: string;
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
  });
  const [contactMessages, setContactMessages] = useState<ContactMessages>({
    userId: "",
    contactId: "",
    messages: [],
  });

  return (
    <studentsData.Provider
      value={{
        userInfo,
        setUserInfo,
        contactMessages,
        setContactMessages,
      }}
    >
      {children}
    </studentsData.Provider>
  );
};
export const StudentsAppData = () => useContext(studentsData);
