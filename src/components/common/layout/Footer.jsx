import "./Footer.css";

import Container from "../ui/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <Container>

        <div className="footer-content">

          <div className="footer-logo">
            <h2>Ashwitha</h2>
            <p>MERN Stack Developer</p>
          </div>

          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">

            <a
              href="https://github.com/ashwithasankar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashwitha-sankar-1762a3294"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="footer-bottom">
          © {year} Ashwitha. All rights reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;