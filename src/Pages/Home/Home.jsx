import Education from "../../Components/IsolatedCompo/Education";
import AboutMe from "../AboutMe/AboutMe";
// import Project from "../Project/Project";

const Home = () => {
    return (
        <div className="mt-10">
           <AboutMe></AboutMe>
           <Education></Education>
        </div>
    );
};

export default Home;