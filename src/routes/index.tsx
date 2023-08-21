import { createBrowserRouter } from "react-router-dom";
import { Dates } from "../pages/Dates/Dates";
import Pills from "../pages/Pilss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dates />,
  },
  {
    path: "/pills",
    element: <Pills />,
  },
]);

export { router };
