import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { StudentsContextProvider } from "../storage/StudentsApi";
import ScrollToTop from "./components/ScrollToTop";
const Home = lazy(() => import("../features/home/features/Home/Home"));
import HomeLoadingState from "../features/home/shared/LoadingState/LoadingState";
const Service = lazy(
  () => import("../features/home/features/Services/Service"),
);
const About = lazy(() => import("../features/home/features/About/About"));
const Mentorship = lazy(
  () => import("../features/home/features/Mentorship/Mentorship"),
);
const GetInTouch = lazy(
  () => import("../features/home/features/GetInTouch/GetInTouch"),
);
const BookACall = lazy(
  () => import("../features/home/features/BookACall/BookACall"),
);
const ProjectInfo = lazy(
  () =>
    import("../features/home/features/Home/components/ProjectInfo/ProjectInfo"),
);
const DiscoverAllServices = lazy(
  () =>
    import("../features/home/features/Services/features/DiscoverAllServices/DiscoverAllServices"),
);
const ExploreProjects = lazy(
  () =>
    import("../features/home/features/Services/features/DiscoverAllServices/features/ExploreProjects/ExploreProjects"),
);
const UiUx = lazy(
  () =>
    import("../features/home/features/Services/features/ServicesCardInfo/UiUx"),
);
const SimpleBranding = lazy(
  () =>
    import("../features/home/features/Services/features/ServicesCardInfo/SimpleBranding"),
);
const DesignWorkShop = lazy(
  () =>
    import("../features/home/features/Services/features/ServicesCardInfo/DesignWorkShop"),
);
const ConceptSpring = lazy(
  () =>
    import("../features/home/features/Services/features/ServicesCardInfo/ConceptSpring"),
);
const Call = lazy(() => import("../features/home/features/Call/Call"));
//login page
const AdminLogin = lazy(() => import("../auth/Login/AdminLogin"));
const AdminDasboard = lazy(() => import("../features/admin/AdminDasbord"));
//access student page
const AccessLogin = lazy(() => import("../auth/Login/AccessLogin"));
const AccessStudentPage = lazy(
  () => import("../features/students/AccessStudentPage"),
);
//auth loaders //url delays
const AccessAuth = lazy(
  () =>
    import("../features/students/auth/AccessStudentsAuthMiddleware/AccesAuth"),
);
const ValidateAdminRoute = lazy(() => import("../auth/ValidateAdminRoute"));
const AdminConfigProvider = lazy(() => import("../storage/AdminConfig"));
function Routes() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <ScrollToTop />,
      children: [
        {
          path: "/",
          element: <HomeLoadingState Children={Home} />,
        },
        {
          path: "/project/info",
          element: <HomeLoadingState Children={ProjectInfo} />,
        },
        {
          path: "/services",
          element: <HomeLoadingState Children={Service} />,
        },
        {
          path: "/uiux",
          element: <HomeLoadingState Children={UiUx} />,
        },
        {
          path: "/simplebranding",
          element: <HomeLoadingState Children={SimpleBranding} />,
        },
        {
          path: "/conceptspring",
          element: <HomeLoadingState Children={ConceptSpring} />,
        },
        {
          path: "/designworkshop",
          element: <HomeLoadingState Children={DesignWorkShop} />,
        },
        {
          path: "/discover/all/services",
          element: <HomeLoadingState Children={DiscoverAllServices} />,
        },
        {
          path: "/explore/projects",
          element: <HomeLoadingState Children={ExploreProjects} />,
        },
        {
          path: "/about",
          element: <HomeLoadingState Children={About} />,
        },
        {
          path: "/mentorship",
          element: <HomeLoadingState Children={Mentorship} />,
        },
        {
          path: "/contact",
          element: <HomeLoadingState Children={GetInTouch} />,
        },
        {
          path: "/book/call",
          element: <HomeLoadingState Children={BookACall} />,
        },
        {
          path: "/schedule/call",
          element: <HomeLoadingState Children={Call} />,
        },
        {
          path: "/admin/access/login",
          element: <AdminLogin />,
        },
        {
          path: "/admin/access/:id",
          element: (
            <ValidateAdminRoute>
              <AdminConfigProvider>
                <AdminDasboard />
              </AdminConfigProvider>
            </ValidateAdminRoute>
          ),
        },
        {
          //devmode
          path: "/students/login/access",
          element: <AccessLogin />,
        },
        {
          //devmode
          path: "/access/:id",
          element: (
            <StudentsContextProvider>
              <AccessAuth>
                <AccessStudentPage />
              </AccessAuth>
            </StudentsContextProvider>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <Suspense>
        <RouterProvider router={routes}></RouterProvider>
      </Suspense>
    </>
  );
}
export default Routes;
