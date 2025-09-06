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
  beecrowd: SiBeatsbydre, 
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
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-5">
        Problem solving and DSA learning track
      </h1>
      <h1 className="text-xl text-center mb-10">
        Here is the link of some famous problem solving platform link
      </h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-green-600 mb-2">
          💡 Problem Solving Profiles
        </h2>
        <ul className="space-y-3">
          {Object.entries(problemSolvingProfiles).map(([platform, link]) => {
            const Icon = logoMap[platform];
            return (
              <li key={platform} className="flex items-center gap-2">
                {Icon && <Icon className="text-xl text-gray-700" />}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Other Profiles */}
      <div>
        <h2 className="text-lg font-semibold text-purple-600 mb-2">
          📚 Other Profiles
        </h2>
        <ul className="space-y-3">
          {Object.entries(otherProfiles).map(([platform, link]) => {
            const Icon = logoMap[platform];
            return (
              <li key={platform} className="flex items-center gap-2">
                {Icon && <Icon className="text-xl text-gray-700" />}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OthersSkill;
