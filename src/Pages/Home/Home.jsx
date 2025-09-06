import Education from "../../Components/IsolatedCompo/Education";
import OthersSkill from "../../Components/IsolatedCompo/OthersSkill";
import Skill from "../../Components/IsolatedCompo/Skill";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
// import Project from "../Project/Project";

const Home = () => {
    return (
        <div className="mt-10">
           <AboutMe></AboutMe>
           <Project></Project>
           <OthersSkill></OthersSkill>
           <Education></Education>
           <Skill></Skill>
           <Contact></Contact>
        </div>
    );
};

export default Home;