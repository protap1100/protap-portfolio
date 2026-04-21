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

const ProfileCard = ({ platform, link, color }) => {
  const Icon = logoMap[platform];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
    >
      {Icon && <Icon className={`text-2xl ${color}`} />}
      <span className={`font-medium text-gray-800 hover:${color}`}>
        {platform.charAt(0).toUpperCase() + platform.slice(1)}
      </span>
    </a>
  );
};

const ProfileSection = ({ title, data, color }) => {
  return (
    <div className="mb-10">
      <h2 className={`text-2xl font-semibold mb-4 ${color}`}>
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(data).map(([platform, link]) => (
          <ProfileCard
            key={platform}
            platform={platform}
            link={link}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

const OthersSkill = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/skilllink.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setError("Failed to load data");
      });
  }, []);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!data) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  const { problemSolvingProfiles, otherProfiles } = data;

  return (
    <section className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-2xl mt-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Problem Solving & DSA Track
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Explore my profiles across coding platforms and communities
      </p>

      {/* Sections */}
      <ProfileSection
        title="💡 Problem Solving Profiles"
        data={problemSolvingProfiles}
        color="text-green-700"
      />

      <ProfileSection
        title="📚 Other Profiles"
        data={otherProfiles}
        color="text-purple-700"
      />
    </section>
  );
};

export default OthersSkill;