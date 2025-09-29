import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import HomePage from "../pages/HomePage";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts/>,
    children: [
        {
            index: true,
            element: <HomePage/>
        },
        {
            path: "portfolio",
            element: <Portfolio/>
        },
        {
            path: "services",
            element: <Services/>
        },
        {
            path: "aboutUs",
            element: <AboutUs/>
        },
        {
            path: "contactUs",
            element: <ContactUs/>
        }
    ]
  },
]);