import "./Skills.css";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/Skillcard";

import skills from "../../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <Container>

        <SectionTitle
          subtitle="Tech Stack"
          title="Technologies I Work With"
          description="I build modern full-stack applications using technologies that focus on performance, scalability, and maintainability."
          align="center"
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              {...skill}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Skills;