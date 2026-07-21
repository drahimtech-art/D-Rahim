import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, type ComponentType } from "react";
import { StudentsContextProvider } from "../storage/StudentsApi";
import { SocketProviderContext } from "../storage/SocketApi";
import ScrollToTop from "./components/ScrollToTop";
import Home from "../features/home/features/Home/Home";
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
    import("../features/home/features/Services/features/DiscoverAllServices/ExploreProjects/ExploreProjects") as Promise<{
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
