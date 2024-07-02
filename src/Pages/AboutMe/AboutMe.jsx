import { Link } from "react-router-dom";
import image from "../../assets/me.jpg";
// import image2 from "../../assets/about.png";
import { useTypewriter } from "react-simple-typewriter";
import facebook from '../../assets/Social-Icons/facebook.png'
// import instagram from '../../assets/Social-Icons/instagram.png'
import twitter from '../../assets/Social-Icons/twitter.png'
import github from '../../assets/Social-Icons/github.png'
import linkedin from '../../assets/Social-Icons/linkedin.png'
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
    <div className="flex lg:flex-row mt-10 flex-col gap-5 border border-black p-10">
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
       <h1 className=" text-2xl lg:text-4xl   text-center font-bold">About Me</h1>
       <h1 className=" text-2xl lg:text-4xl  text-center font-bold">I Am A <span className="text-purple-700">{text}</span> </h1>
       <h1 className="text-center">Currently Learning Mern Stack. Building Project on MERN Stack. </h1>
       <div className="flex gap-5">
            <Link to='https://www.facebook.com/protap.biswas1100'> <img className="h-12 w-12" src={facebook} alt="" /> </Link>
            <Link to='https://www.linkedin.com/in/protap-biswas1100/'> <img className="h-12 w-12" src={linkedin} alt="" /> </Link>
            <Link to='https://github.com/protap1100'> <img className="h-12 w-12" src={github} alt="" /> </Link>
            <Link to='https://twitter.com/protapb110'> <img className="h-12 w-12" src={twitter} alt="" /> </Link>
       </div>
       <div className="flex gap-2 flex-col lg:flex-row">
        <Link to='https://drive.google.com/file/d/1cV3KBG5B8V_tkgVqfRkX_TncC-Pcinx-/view?usp=drive_link' className="bg-btn px-5 py-3 rounded font-bold hover:bg-btn-hover text-white">Download Cv</Link>
        <Link className="bg-btn px-5 py-3 rounded font-bold hover:bg-btn-hover text-white">Contact Me</Link>
       </div>
      </div>
      <div className="flex-1 flex justify-center ">
      <img className="rounded-xl w-72 h-96 transform transition-transform duration-700 hover:brightness-120 hover:shadow-xl" src={image} alt="About Me" />
      </div>
    </div>
  );
};

export default AboutMe;
