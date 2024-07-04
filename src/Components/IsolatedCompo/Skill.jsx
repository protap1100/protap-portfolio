import { useSpring, animated } from 'react-spring';

const skills = [
  { name: 'CSS3', logo: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', logo: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Node.js', logo: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node-dot-js&logoColor=white', url: 'https://nodejs.org/' },
  { name: 'Express.js', logo: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB', url: 'https://expressjs.com/' },
  { name: 'Netlify', logo: 'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=00C7B7', url: 'https://www.netlify.com/' },
  { name: 'Firebase', logo: 'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase', url: 'https://firebase.google.com/' },
  { name: 'DaisyUI', logo: 'https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white', url: 'https://daisyui.com/' },
  { name: 'NPM', logo: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white', url: 'https://www.npmjs.com/' },
  { name: 'NestJS', logo: 'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white', url: 'https://nestjs.com/' },
  { name: 'Nodemon', logo: 'https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD', url: 'https://nodemon.io/' },
  { name: 'React', logo: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', url: 'https://reactjs.org/' },
  { name: 'Tailwind CSS', logo: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white', url: 'https://tailwindcss.com/' },
  { name: 'Vite', logo: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white', url: 'https://vitejs.dev/' },
  { name: 'MySQL', logo: 'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white', url: 'https://www.mysql.com/' },
  { name: 'Figma', logo: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', url: 'https://www.figma.com/' }
];

const Skill = () => {
  const fade = useSpring({ 
    from: { opacity: 0 }, 
    to: { opacity: 1 }, 
    config: { duration: 1000 }
  });

  return (
    <div className="container mx-auto mt-10">
      <animated.div style={fade}>
        <h1 className="text-center text-3xl font-bold mb-6 ">My Skill</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(skill => (
            <a 
              key={skill.name} 
              href={skill.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
              <img src={skill.logo} alt={skill.name} />
            </a>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Skill;
