import { createContext, useContext, useState } from "react";
interface PagesConfigConextType {
  workPage: boolean;
  setWorkPage: React.Dispatch<React.SetStateAction<boolean>>;
  servicesPage: boolean;
  setServicesPage: React.Dispatch<React.SetStateAction<boolean>>;
  aboutPage: boolean;
  setAboutPage: React.Dispatch<React.SetStateAction<boolean>>;
  mentorshipPage: boolean;
  setMentorshipPage: React.Dispatch<React.SetStateAction<boolean>>;
}
interface PagesLoaded {
  workPage: boolean;
  setWorkPage: React.Dispatch<React.SetStateAction<boolean>>;
  servicesPage: boolean;
  setServicesPage: React.Dispatch<React.SetStateAction<boolean>>;
  aboutPage: boolean;
  setAboutPage: React.Dispatch<React.SetStateAction<boolean>>;
  mentorshipPage: boolean;
  setMentorshipPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const PagesConfigContextData = createContext<PagesConfigConextType>({
  workPage: false,
  setWorkPage: () => {},
  servicesPage: false,
  setServicesPage: () => {},
  aboutPage: false,
  setAboutPage: () => {},
  mentorshipPage: false,
  setMentorshipPage: () => {},
});

export function PagesConfigProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [workPage, setWorkPage] = useState<boolean>(false);
  const [servicesPage, setServicesPage] = useState<boolean>(false);
  const [aboutPage, setAboutPage] = useState<boolean>(false);
  const [mentorshipPage, setMentorshipPage] = useState<boolean>(false);
  return (
    <PagesConfigContextData.Provider
      value={{
        workPage,
        setWorkPage,
        servicesPage,
        setServicesPage,
        aboutPage,
        setAboutPage,
        mentorshipPage,
        setMentorshipPage,
      }}
    >
      {children}
    </PagesConfigContextData.Provider>
  );
}

export const PagesConfigDataApi = () => useContext(PagesConfigContextData);
