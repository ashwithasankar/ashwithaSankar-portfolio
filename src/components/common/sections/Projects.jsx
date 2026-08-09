import "./Projects.css";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import projects from "../../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section">

      <Container>

        <SectionTitle
  subtitle="Selected Work"
  title="Projects Built With Purpose"
  description="A selection of web, AI, and IoT projects built through hands-on development."
  align="center"
/>

        <div className="projects-grid">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Projects;