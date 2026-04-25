import "./App.css";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
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
