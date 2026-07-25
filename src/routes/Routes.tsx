import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, type ComponentType } from "react";
import { StudentsContextProvider } from "../storage/StudentsApi";
import { SocketProviderContext } from "../storage/SocketApi";
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
    import("../features/home/features/Services/features/ExploreProjects/ExploreProjects") as Promise<{
      default: ComponentType<any>;
    }>,
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
//ourwork page
const AdminLogin = lazy(() => import("../auth/Login/AdminLogin"));
const AdminDasboard = lazy(() => import("../features/admin/AdminDasbord"));
//access student page
const AccessLogin = lazy(() => import("../auth/Login/AccessLogin"));
const AccessStudentPage = lazy(
  () => import("../features/students/AccessStudentPage"),
);
//auth loaders //url delays
import AccessAuth from "../features/students/auth/AccessStudentsAuthMiddleware/AccesAuth";
function Routes() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <ScrollToTop />,
      children: [
        {
          path: "/",
          element: <HomeLoadingState children={<Home />} />,
        },
        {
          path: "/project/info",
          element: <HomeLoadingState children={<ProjectInfo />} />,
        },
        {
          path: "/services",
          element: <HomeLoadingState children={<Service />} />,
        },
        {
          path: "/uiux",
          element: <HomeLoadingState children={<UiUx />} />,
        },
        {
          path: "/simplebranding",
          element: <HomeLoadingState children={<SimpleBranding />} />,
        },
        {
          path: "/conceptspring",
          element: <HomeLoadingState children={<ConceptSpring />} />,
        },
        {
          path: "/designworkshop",
          element: <HomeLoadingState children={<DesignWorkShop />} />,
        },
        {
          path: "/discover/all/services",
          element: <HomeLoadingState children={<DiscoverAllServices />} />,
        },
        {
          path: "/explore/projects",
          element: <HomeLoadingState children={<ExploreProjects />} />,
        },
        {
          path: "/about",
          element: <HomeLoadingState children={<About />} />,
        },
        {
          path: "/mentorship",
          element: <HomeLoadingState children={<Mentorship />} />,
        },
        {
          path: "/contact",
          element: <HomeLoadingState children={<GetInTouch />} />,
        },
        {
          path: "/book/call",
          element: <HomeLoadingState children={<BookACall />} />,
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
          path: "/students/login/access",
          element: <AccessLogin />,
        },
        {
          //devmode
          path: "/access/:id",
          element: (
            <StudentsContextProvider>
              <SocketProviderContext>
                <AccessAuth>
                  <AccessStudentPage />
                </AccessAuth>
              </SocketProviderContext>
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
