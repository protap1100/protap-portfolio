import { useEffect, useState } from "react";
import ProjectCard from "../../Components/IsolatedCompo/ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div> Loading....</div>;
  }

  return (
    <div className="mt-10">
      <div className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          My Projects Showcase
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore the projects I ve worked on during my learning journey. Each
          project demonstrates my skills and growth as a developer.
        </p>
        <p className="mt-4 font-bold">Total Project: {projects.length}</p>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}>
              {" "}
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
