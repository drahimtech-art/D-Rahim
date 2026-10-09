import { createContext, useContext, useState, useEffect } from "react";
interface PagesConfigConextType {
  workPage: boolean;
  setWorkPage: React.Dispatch<React.SetStateAction<boolean>>;
  servicesPage: boolean;
  setServicesPage: React.Dispatch<React.SetStateAction<boolean>>;
  aboutPage: boolean;
  setAboutPage: React.Dispatch<React.SetStateAction<boolean>>;
  mentorshipPage: boolean;
  setMentorshipPage: React.Dispatch<React.SetStateAction<boolean>>;
  contactPage: boolean;
  setContactPage: React.Dispatch<React.SetStateAction<boolean>>;
  bookACallPage: boolean;
  setBookACallPage: React.Dispatch<React.SetStateAction<boolean>>;
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
  contactPage: boolean;
  setContactPage: React.Dispatch<React.SetStateAction<boolean>>;
  bookACallPage: boolean;
  setBookACallPage: React.Dispatch<React.SetStateAction<boolean>>;
}
interface WebsiteVistedClientData {
  userId: string;
  pageVisited: {
    homePage: boolean;
    servicesPage: boolean;
    aboutPage: boolean;
    mentorshipPage: boolean;
    contactPage: boolean;
  };
  deviceType: {
    desktop: boolean;
    mobile: boolean;
    tablet: boolean;
    other: boolean;
  };
  platformVisitedFrom: {
    facebook: boolean;
    linkined: boolean;
    youtub: boolean;
    tiktok: boolean;
    behance: boolean;
    instagram: boolean;
    twitter: boolean;
    google: boolean;
    other: boolean;
  };
  dateVisited: Date;
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
  contactPage: false,
  setContactPage: () => {},
  bookACallPage: false,
  setBookACallPage: () => false,
});

export function PagesConfigProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  //pages
  const [workPage, setWorkPage] = useState<boolean>(false);
  const [servicesPage, setServicesPage] = useState<boolean>(false);
  const [aboutPage, setAboutPage] = useState<boolean>(false);
  const [mentorshipPage, setMentorshipPage] = useState<boolean>(false);
  const [contactPage, setContactPage] = useState<boolean>(false);
  const [bookACallPage, setBookACallPage] = useState<boolean>(false);
  //user
  const [visitedClientData, setVistedClientData] = useState();
  useEffect(() => {
    console.log("config mounted");
  }, []);
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
        contactPage,
        setContactPage,
        bookACallPage,
        setBookACallPage,
      }}
    >
      {children}
    </PagesConfigContextData.Provider>
  );
}

export const PagesConfigDataApi = () => useContext(PagesConfigContextData);
