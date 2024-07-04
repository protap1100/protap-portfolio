import { Link } from "react-router-dom";
import image from "../../assets/me.jpg";
import { useTypewriter } from "react-simple-typewriter";
import facebook from "../../assets/Social-Icons/facebook.png";
import twitter from "../../assets/Social-Icons/twitter.png";
import github from "../../assets/Social-Icons/github.png";
import linkedin from "../../assets/Social-Icons/linkedin.png";

const AboutMe = () => {
  const [text] = useTypewriter({
    words: [" Programmer", " Front End Developer", " Coder"],
    loop: true,
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="flex lg:flex-row mt-10 flex-col gap-5 border border-black p-10">
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">
          About Me
        </h1>
        <h1 className="text-2xl lg:text-4xl text-center font-bold">
          I Am A <span className="text-purple-700">{text}</span>{" "}
        </h1>
        <p className="text-center">
          I specialize in creating responsive and user-friendly web applications
          using React. My expertise in front-end development ensures
          high-quality, efficient, and visually appealing solutions for your
          projects.
        </p>
        <p className="text-center">
          Currently, I am actively looking for opportunities to contribute my
          skills and grow in a professional environment. I am passionate about
          building meaningful projects and solving complex problems through
          innovative technology solutions.
        </p>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/protap.biswas1100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12 w-12" src={facebook} alt="Facebook" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/protap-biswas1100/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12 w-12" src={linkedin} alt="LinkedIn" />{" "}
          </a>
          <a
            href="https://github.com/protap1100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12 w-12" src={github} alt="GitHub" />{" "}
          </a>
          <a
            href="https://twitter.com/protapb110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12 w-12" src={twitter} alt="Twitter" />{" "}
          </a>
        </div>
        <div className="flex gap-2 flex-col lg:flex-row mt-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1cV3KBG5B8V_tkgVqfRkX_TncC-Pcinx-"
            className="bg-btn px-5 py-3 rounded font-bold hover:bg-btn-hover text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
           Resume
          </a>

          <Link
            to="/contact"
            className="bg-btn px-5 py-3 rounded font-bold hover:bg-btn-hover text-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          className="rounded-xl w-72 h-96 transform transition-transform duration-700 hover:brightness-120 hover:shadow-xl"
          src={image}
          alt="About Me"
        />
      </div>
    </div>
  );
};

export default AboutMe;
