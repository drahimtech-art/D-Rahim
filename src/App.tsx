import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
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
            path: "/discover/all/services",
            element: <DiscoverAllServices />,
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
