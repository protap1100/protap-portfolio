import { useEffect, useState } from "react";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
  SiMedium,
  SiBeatsbydre,
} from "react-icons/si";

const logoMap = {
  beecrowd: SiBeatsbydre, // temporary since react-icons doesn't have Beecrowd
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  hackerrank: SiHackerrank,
  medium: SiMedium,
};

const OthersSkill = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/skilllink.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (!data) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  const { problemSolvingProfiles, otherProfiles } = data;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-2xl">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        🚀 Problem Solving & DSA Track
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Explore my profiles on popular problem-solving platforms and tech communities.
      </p>

      {/* Problem Solving */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
          💡 Problem Solving Profiles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(problemSolvingProfiles).map(([platform, link]) => {
            const Icon = logoMap[platform];
            return (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                {Icon && <Icon className="text-2xl text-indigo-600" />}
                <span className="font-medium text-gray-800 hover:text-indigo-600">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Other Profiles */}
      <div>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
          📚 Other Profiles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(otherProfiles).map(([platform, link]) => {
            const Icon = logoMap[platform];
            return (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                {Icon && <Icon className="text-2xl text-purple-600" />}
                <span className="font-medium text-gray-800 hover:text-purple-600">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OthersSkill;
