import Journeys from "./pages/Journeys";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stations from "./pages/Stations";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import StationView from "./pages/stationView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Journeys />,
      },
      {
        path: "stations",
        element: <Stations />,
      },
      {
        path: "stations/:id",
        element: <StationView />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
