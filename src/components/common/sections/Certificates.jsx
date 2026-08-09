import "./Certificates.css";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CertificateCard from "../ui/CertificateCard";

import certificates from "../../../data/certificates";

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <Container>

        <SectionTitle
          subtitle="Achievements"
          title="Certificates"
          description="Professional certifications and learning milestones."
          align="center"
        />

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Certificates;