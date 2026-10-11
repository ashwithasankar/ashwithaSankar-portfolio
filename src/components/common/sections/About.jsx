import "./About.css";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="about section">
      <Container>

        <SectionTitle
          subtitle="About Me"
          title="Building Clean & Scalable Web Applications"
          description="MERN Stack Developer with hands-on experience in web development, frontend engineering, and full-stack projects."
        />

        <div className="about-grid">

          <div className="about-content">
            <p>
              I'm <strong>Ashwitha S</strong>, a MERN Stack Developer with a
              background in Electronics and Communication Engineering, passionate about building modern, responsive, and scalable web applications.
            </p>

            <p>
              I enjoy turning ideas into functional digital experiences, developing intuitive user interfaces, integrating APIs, and building backend services using modern web technologies.
            </p>

            <p>
              I also explore AI and IoT to build practical technology
              solutions beyond web development.
            </p>
          </div>

          <div className="about-card">
            <h3>Quick Facts</h3>

            <ul>
              <li>
                <strong>Role:</strong> MERN Stack Developer
              </li>

              <li>
                <strong>Education:</strong> B.E. Electronics & Communication Engineering
              </li>

              <li>
                <strong>Frontend:</strong> React, JavaScript, HTML, CSS, Bootstrap
              </li>

              <li>
                <strong>Backend:</strong> Node.js, Express.js
              </li>

              <li>
                <strong>Database:</strong> MongoDB
              </li>

              <li>
                <strong>Interests:</strong> Full-Stack Development, AI, IoT
              </li>
            </ul>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default About;