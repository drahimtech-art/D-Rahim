import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, type ComponentType } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home/Home";
import Service from "./Components/Services/Service";
const About = lazy(() => import("./Components/About/About"));
const Mentorship = lazy(() => import("./Components/Mentorship/Mentorship"));
const GetInTouch = lazy(() => import("./Components/GetInTouch/GetInTouch"));
const BookACall = lazy(() => import("./Components/BookACall/BookACall"));
const ProjectInfo = lazy(() => import("./Components/ProjectInfo/ProjectInfo"));
const DiscoverAllServices = lazy(
  () => import("./Components/Services/DiscoverAllServices/DiscoverAllServices"),
);
const ExploreProjects = lazy(
  () =>
    import("./Components/Services/DiscoverAllServices/ExploreProjects/ExploreProjects") as Promise<{
      default: ComponentType<any>;
    }>,
);
const UiUx = lazy(() => import("./Components/Services/ServicesCardInfo/UiUx"));
const SimpleBranding = lazy(
  () => import("./Components/Services/ServicesCardInfo/SimpleBranding"),
);
function App() {
  const routes = createBrowserRouter(
    [
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
            path: "/services/uiux",
            element: <UiUx />,
          },
          {
            path: "/services/simplebranding",
            element: <SimpleBranding />,
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
        ],
      },
    ],
    {
      basename: "/D-Rahim/",
    },
  );
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
