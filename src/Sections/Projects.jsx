import Project from "../components/Project";
import {myprojects} from "../constants";
const Projects = () => {
  return (
      <section className="relative c-space section-spacing" id="Projects">
        <h2 className="text-heading">My Projects</h2>
        <p>Here are some of the projects I've worked on recently.</p>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
        {myprojects.map((project) => (
          <Project key={project.id} {...project}/>
        ))}
      </section>
  );
};

export default Projects;
