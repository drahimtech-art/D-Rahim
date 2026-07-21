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

  const [popUpControl, setPopUpControl] = useState<boolean>(false);
  const [popUpCard, setPopUpCard] = useState<ReactNode | undefined>();
  return (
    <studentsData.Provider
      value={{
        userInfo,
        setUserInfo,
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
