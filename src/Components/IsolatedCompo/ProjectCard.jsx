import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaKey, FaList, FaTools } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { name, liveLink, githubClient, githubServer, image, keyFeature, overview, technology } = project;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img className="h-48 w-full object-cover" src={image} alt={name} />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <a href={liveLink} className="flex items-center mt-2 text-indigo-600 hover:underline">
          <FaExternalLinkAlt className="mr-2" /> Live Link
        </a>
        <p className="mt-4 text-gray-700">{overview}</p>
        <div className="mt-4">
          <h3 className="flex items-center text-sm font-medium text-gray-900">
            <FaKey className="mr-2" /> Key Features:
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            {keyFeature.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="flex items-center text-sm font-medium text-gray-900">
            <FaTools className="mr-2" /> Technology Used:
          </h3>
          <div className="flex flex-wrap mt-2">
            {technology.map((tech, index) => (
              <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-semibold">{tech}</span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="flex items-center text-sm font-medium text-gray-900">
            <FaGithub className="mr-2" /> Source Code:
          </h3>
          <div className="flex mt-2">
            <a href={githubClient} className="mr-4 text-indigo-600 hover:underline">Client</a>
            <a href={githubServer} className="text-indigo-600 hover:underline">Server</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
