import { createContext, useContext, useState, useEffect } from "react";
import { SocketApi } from "./SocketApi";
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
  callPage: boolean;
  setCallPage: React.Dispatch<React.SetStateAction<boolean>>;
  discoverAllServicesPage: boolean;
  setDiscoverAllServicesPage: React.Dispatch<React.SetStateAction<boolean>>;
  exploreProjectsPage: boolean;
  setExporeProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
  uiUxPage: boolean;
  setUiUxPage: React.Dispatch<React.SetStateAction<boolean>>;
  simpleBrandingPage: boolean;
  setSimpleBrandingPage: React.Dispatch<React.SetStateAction<boolean>>;
  designWorkShopsPage: boolean;
  setDesignWorkShopsPage: React.Dispatch<React.SetStateAction<boolean>>;
  conceptSprintPage: boolean;
  setConceptSprintPage: React.Dispatch<React.SetStateAction<boolean>>;
  projectInfoPage: boolean;
  setProjectInfoPage: React.Dispatch<React.SetStateAction<boolean>>;
}
/*
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
  */
export interface WebsiteVistedClientData {
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
  serverId?: string;
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
  callPage: false,
  setCallPage: () => {},
  discoverAllServicesPage: false,
  setDiscoverAllServicesPage: () => {},
  exploreProjectsPage: false,
  setExporeProjectsPage: () => {},
  uiUxPage: false,
  setUiUxPage: () => {},
  simpleBrandingPage: false,
  setSimpleBrandingPage: () => {},
  designWorkShopsPage: false,
  setDesignWorkShopsPage: () => {},
  conceptSprintPage: false,
  setConceptSprintPage: () => {},
  projectInfoPage: false,
  setProjectInfoPage: () => {},
});
export function PagesConfigProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const location = window.location;
  //pages
  const [workPage, setWorkPage] = useState<boolean>(false);
  const [servicesPage, setServicesPage] = useState<boolean>(false);
  const [aboutPage, setAboutPage] = useState<boolean>(false);
  const [mentorshipPage, setMentorshipPage] = useState<boolean>(false);
  const [contactPage, setContactPage] = useState<boolean>(false);
  const [bookACallPage, setBookACallPage] = useState<boolean>(false);
  const [callPage, setCallPage] = useState<boolean>(false);
  const [discoverAllServicesPage, setDiscoverAllServicesPage] =
    useState<boolean>(false);
  const [exploreProjectsPage, setExporeProjectsPage] = useState<boolean>(false);
  const [uiUxPage, setUiUxPage] = useState<boolean>(false);
  const [simpleBrandingPage, setSimpleBrandingPage] = useState<boolean>(false);
  const [designWorkShopsPage, setDesignWorkShopsPage] =
    useState<boolean>(false);
  const [conceptSprintPage, setConceptSprintPage] = useState<boolean>(false);
  const [projectInfoPage, setProjectInfoPage] = useState<boolean>(false);
  //user
  const [visitedClientData, setVisitedClientData] = useState<
    WebsiteVistedClientData | undefined
  >(undefined);
  //
  const [isVisitValidated, setIsVisitValidated] = useState<boolean>(false);
  const [isComponentFirstMount, setIsComponentFirstMount] =
    useState<boolean>(false);
  //create new user
  useEffect(() => {
    if (visitedClientData) return;
    if (
      location.hash !== "" &&
      location.hash !== "#/" &&
      location.hash !== "#/services" &&
      location.hash !== "#/about" &&
      location.hash !== "#/mentorship" &&
      location.hash !== "#/contact"
    )
      return;
    const userId = crypto.randomUUID();
    const dateVisited = new Date();
    const deviceWidth = window.innerWidth;
    const desktop = deviceWidth >= 1025 ? true : false;
    const mobile = deviceWidth >= 320 && deviceWidth < 768 ? true : false;
    const tablet = deviceWidth >= 768 && deviceWidth < 1025 ? true : false;
    const other = deviceWidth < 320 ? true : false;
    //
    const newVisitedClientData: WebsiteVistedClientData = {
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
        other: true,
      },
      dateVisited,
    };
    function createNewVistedClientData(): void {
      setVisitedClientData(newVisitedClientData);
    }
    createNewVistedClientData();
    //check if user bounce with a timeout of 10s seconds if valid push data to server else do nothing
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
  }, [
    workPage,
    servicesPage,
    aboutPage,
    mentorshipPage,
    contactPage,
    bookACallPage,
  ]);
  //
  function returnIsVisitValidated(): boolean {
    return isVisitValidated;
  }
  //
  useEffect(() => {
    if (!socket) return;
    if (!visitedClientData) return;
    const didUserStay = returnIsVisitValidated();
    const validateVistBounce = setTimeout(() => {
      if (didUserStay) return;
      socket.emit("validated-new-user", visitedClientData);
      setIsVisitValidated(true);
    }, 10000); // 10s
    if (didUserStay) {
      socket.emit("validated-new-user", visitedClientData);
    }
    return () => {
      clearTimeout(validateVistBounce);
    };
  }, [visitedClientData, socket]);
  //
  useEffect(() => {
    if (!socket) return;
    if (!visitedClientData) return;
    if (isComponentFirstMount) return;
    setIsComponentFirstMount(true);
    socket.emit("new-visited-user", visitedClientData.userId);
  }, [visitedClientData, socket]);
  //

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
        callPage,
        setCallPage,
        discoverAllServicesPage,
        setDiscoverAllServicesPage,
        exploreProjectsPage,
        setExporeProjectsPage,
        uiUxPage,
        setUiUxPage,
        simpleBrandingPage,
        setSimpleBrandingPage,
        designWorkShopsPage,
        setDesignWorkShopsPage,
        conceptSprintPage,
        setConceptSprintPage,
        projectInfoPage,
        setProjectInfoPage,
      }}
    >
      {children}
    </PagesConfigContextData.Provider>
  );
}

export const PagesConfigDataApi = () => useContext(PagesConfigContextData);
