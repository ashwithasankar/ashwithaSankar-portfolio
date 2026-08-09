import "./Contact.css";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ContactInfo from "../ui/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <Container>

        <SectionTitle
          subtitle="Let's Connect"
          title="Get In Touch"
          description="I'm open to internships, full-time opportunities, and freelance collaborations."
          align="center"
        />

        <div className="contact-grid">

          <ContactInfo
            title="Email"
            value="ashwiashwitha197@gmail.com"
            link="mailto:ashwiashwitha197@gmail.com"
          />

          <ContactInfo
            title="LinkedIn"
            value="https://www.linkedin.com/in/ashwitha-sankar"
            link="https://www.linkedin.com/in/ashwitha-sankar-1762a3294 "
          />

          <ContactInfo
            title="GitHub"
            value="https://github.com/ashwithasankar"
            link="https://github.com/ashwithasankar  "
          />

        </div>
      <div className="talk-btn-wrapper">
  <a
    href="mailto:ashwiashwitha197@gmail.com?subject=Let's Build Together"
    className="talk-btn"
  >
    Let's Build Together →
  </a>
</div>

      </Container>
    </section>
  );
};

export default Contact;