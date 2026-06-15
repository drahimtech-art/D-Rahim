import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, type ComponentType } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Main_Home/Home/Home";
const Service = lazy(() => import("./Components/Main_Home/Services/Service"));
const About = lazy(() => import("./Components/Main_Home/About/About"));
const Mentorship = lazy(
  () => import("./Components/Main_Home/Mentorship/Mentorship"),
);
const GetInTouch = lazy(
  () => import("./Components/Main_Home/GetInTouch/GetInTouch"),
);
const BookACall = lazy(
  () => import("./Components/Main_Home/BookACall/BookACall"),
);
const ProjectInfo = lazy(
  () => import("./Components/Main_Home/ProjectInfo/ProjectInfo"),
);
const DiscoverAllServices = lazy(
  () =>
    import("./Components/Main_Home/Services/DiscoverAllServices/DiscoverAllServices"),
);
const ExploreProjects = lazy(
  () =>
    import("./Components/Main_Home/Services/DiscoverAllServices/ExploreProjects/ExploreProjects") as Promise<{
      default: ComponentType<any>;
    }>,
);
const UiUx = lazy(
  () => import("./Components/Main_Home/Services/ServicesCardInfo/UiUx"),
);
const SimpleBranding = lazy(
  () =>
    import("./Components/Main_Home/Services/ServicesCardInfo/SimpleBranding"),
);
const DesignWorkShop = lazy(
  () =>
    import("./Components/Main_Home/Services/ServicesCardInfo/DesignWorkShop"),
);
const ConceptSpring = lazy(
  () =>
    import("./Components/Main_Home/Services/ServicesCardInfo/ConceptSpring"),
);
//ourwork page
const AdminLogin = lazy(() => import("./Components/Login/AdminLogin"));
const AdminDasboard = lazy(
  () => import("./Components/AdminDasboard/AdminDasbord"),
);
//access student page
const AccessLogin = lazy(() => import("./Components/Login/AccessLogin"));
import AccessStudentPage from "./Components/AccessStudentPage/AccessStudentPage";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <ScrollToTop />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project/info",
          element: <ProjectInfo />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/uiux",
          element: <UiUx />,
        },
        {
          path: "/simplebranding",
          element: <SimpleBranding />,
        },
        {
          path: "/conceptspring",
          element: <ConceptSpring />,
        },
        {
          path: "/designworkshop",
          element: <DesignWorkShop />,
        },
        {
          path: "/discover/all/services",
          element: <DiscoverAllServices />,
        },
        {
          path: "/explore/projects",
          element: <ExploreProjects />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/mentorship",
          element: <Mentorship />,
        },
        {
          path: "/contact",
          element: <GetInTouch />,
        },
        {
          path: "/book/call",
          element: <BookACall />,
        },
        {
          //devmode
          path: "/devmode/admin/login",
          element: <AdminLogin />,
        },
        {
          //devmode
          path: "/devmode/admin/:id",
          element: <AdminDasboard />,
        },
        {
          //devmode
          path: "/devmode/access/login",
          element: <AccessLogin />,
        },
        {
          //devmode
          path: "/devmode/students",
          element: <AccessStudentPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
