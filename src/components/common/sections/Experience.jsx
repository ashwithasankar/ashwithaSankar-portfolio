import "./Experience.css";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TimelineCard from "../ui/TimelineCard";

import experience from "../../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <Container>

        <SectionTitle
          subtitle="Professional Journey"
          title="Professional Experience"
          description="Hands-on industry experience contributing to production-ready web applications."
          align="center"
        />

        <div className="timeline">
          {experience.map((item) => (
            <TimelineCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Experience;