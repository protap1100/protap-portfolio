import { Link } from "react-router-dom";
import image from "../../assets/me.jpg";
import { useTypewriter } from "react-simple-typewriter";
import facebook from '../../assets/Social-Icons/facebook.png'
import instagram from '../../assets/Social-Icons/instagram.png'
import twitter from '../../assets/Social-Icons/twitter.png'
import github from '../../assets/Social-Icons/github.png'
const AboutMe = () => {
  const [text] = useTypewriter({
    words: [" Programmer", " Front End Developer", " Coder"],
    loop: true,
    cursorStyle:'_',
    typeSpeed:70,
    deleteSpeed:50,
    delaySpeed:1000,
  });
  return (
    <div className="flex lg:flex-row flex-col gap-5 border border-black p-10">
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
       <h1 className=" text-2xl lg:text-4xl   text-center font-bold">About Me</h1>
       <h1 className=" text-2xl lg:text-4xl  text-center font-bold">I Am A <span className="text-purple-700">{text}</span> </h1>
       <h1 className="text-center">Currently Learning Mern Stack. Building Project on MERN Stack. </h1>
       <div className="flex gap-5">
            <Link to='#'> <img className="h-12 w-12" src={facebook} alt="" /> </Link>
            <Link to='#'> <img className="h-12 w-12" src={instagram} alt="" /> </Link>
            <Link to='#'> <img className="h-12 w-12" src={github} alt="" /> </Link>
            <Link to='#'> <img className="h-12 w-12" src={twitter} alt="" /> </Link>
       </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img className="h-96 w-72 rounded-xl" src={image} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
