import "./ProjectCard.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">

      <div className="project-category">
        {project.category}
      </div>

      <h3 className="project-title">
        {project.title}
      </h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          <FiGithub />
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="project-btn primary"
        >
          <FiExternalLink />
          Live Demo
        </a>
      </div>

    </article>
  );
};

export default ProjectCard;