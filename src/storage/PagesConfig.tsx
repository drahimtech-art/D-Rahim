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
    linkedIn: boolean;
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
  setBookACallPage: () => {},
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
  const [visitedClientData, setVisitedClientData] = useState<
    WebsiteVistedClientData | undefined
  >(undefined);
  //create new user
  useEffect(() => {
    if (visitedClientData) return;
    const userId = crypto.randomUUID();
    const dateVisited = new Date();
    const deviceWidth = window.innerWidth;
    const desktop = deviceWidth >= 1025 ? true : false;
    const mobile = deviceWidth >= 320 && deviceWidth < 768 ? true : false;
    const tablet = deviceWidth >= 768 && deviceWidth < 1025 ? true : false;
    const other = deviceWidth < 320 ? true : false;
    //
    const newVisitedClientData = {
      userId,
      pageVisited: {
        homePage: workPage,
        servicesPage,
        aboutPage,
        mentorshipPage,
        contactPage,
      },
      deviceType: {
        desktop,
        mobile,
        tablet,
        other,
      },
      platformVisitedFrom: {
        facebook: false,
        linkedIn: false,
        youtub: false,
        tiktok: false,
        behance: false,
        instagram: false,
        twitter: false,
        google: false,
        other: false,
      },
      dateVisited,
    };
    function createNewVistedClientData(): void {
      setVisitedClientData(newVisitedClientData);
    }
    createNewVistedClientData();
    //check if user bounce with a timeout of 10s seconds if valid push data to server else do nothing
    const userBounceValidator = setTimeout(() => {
      //alert("user didn't bounce");
    }, 10000); // 10s
    return () => {
      clearTimeout(userBounceValidator);
    };
  }, []);
  //update user data if user visit new page
  useEffect(() => {
    if (
      !workPage &&
      !servicesPage &&
      !aboutPage &&
      !mentorshipPage &&
      !contactPage &&
      !bookACallPage
    )
      return;
    if (!visitedClientData) return;
    function updateVistedClientData(): void {
      setVisitedClientData((prevData) => {
        if (!prevData) return undefined;
        return {
          ...prevData,
          pageVisited: {
            homePage: workPage,
            servicesPage,
            aboutPage,
            mentorshipPage,
            contactPage,
          },
        };
      });
    }
    updateVistedClientData();
    console.log("update");
  }, [
    workPage,
    servicesPage,
    aboutPage,
    mentorshipPage,
    contactPage,
    bookACallPage,
  ]);
  //
  useEffect(() => {
    console.log(visitedClientData);
  }, [visitedClientData]);
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
