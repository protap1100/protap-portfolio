import { createBrowserRouter} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement:<><h1>Error Page</h1></>,
    children : [
        {
            index : true,
            element : <Home></Home>
        },
        {
            path:'/about',
            element : <AboutMe></AboutMe>
        },
        {
            path : '/contact',
            element : <Contact></Contact>
        },
        {
            path : '/project',
            element : <Project></Project>
        }
    ]
  },
]);
