import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Home from "./Components/Home/Home";
import Service from "./Components/Services/Service";
const About = lazy(() => import("./Components/About/About"));
const Mentorship = lazy(() => import("./Components/Mentorship/Mentorship"));

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/mentorship",
        element: <Mentorship />,
      },
    ],
    {
      basename: "/D-Rahim/",
    },
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
