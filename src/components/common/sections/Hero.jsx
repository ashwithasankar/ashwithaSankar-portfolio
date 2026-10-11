import "./Hero.css";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="home" className="hero">
<div className="hero-light hero-light-main"></div>
<div className="hero-light hero-light-secondary"></div>
<div className="hero-glow-ring"></div>

      <Container>
        <div className="hero-wrapper">

          {/* Hero Content */}
          <div className="hero-content">

            <span className="hero-tag">
              MERN STACK DEVELOPER
            </span>

            <h1>
              Building Modern
              <br />
              MERN Applications
            </h1>

            <p>
              I'm <strong>Ashwitha S</strong>, a MERN Stack Developer and 2026 Electronics and Communication Engineering graduate with hands-on experience in web development and full-stack projects. I'm passionate about building modern, responsive, and scalable web applications using the MERN stack. 
            </p>

            <div className="hero-buttons">

              <Button>
                View Projects
              </Button>

              <Button variant="outline">
                Download Resume
              </Button>

            </div>

            {/* Stats */}
            <div className="hero-stats">

              <div className="stat">
                <h3>01</h3>
                <span>Internship</span>
              </div>

              <div className="stat">
                <h3>04</h3>
                <span>Projects</span>
              </div>

              <div className="stat">
                <h3>MERN</h3>
                <span>Stack</span>
              </div>

              <div className="stat">
                <h3>Open</h3>
                <span>To Work</span>
              </div>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
};

export default Hero;