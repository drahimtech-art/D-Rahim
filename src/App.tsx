import "./App.css";
import Home from "./Components/Home/Home";
import Service from "./Components/Services/Service";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
