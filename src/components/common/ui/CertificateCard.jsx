import "./CertificateCard.css";

const CertificateCard = ({ certificate }) => {
  return (
    <article className="certificate-card">

      <div className="certificate-card-top">
        <span className="certificate-label">
          CERTIFICATE
        </span>

        <span className="certificate-year">
          {certificate.year}
        </span>
      </div>

      <div className="certificate-content">

        <h3>{certificate.title}</h3>

        <p className="certificate-issuer">
          {certificate.issuer}
        </p>

        {certificate.description && (
          <p className="certificate-description">
            {certificate.description}
          </p>
        )}

      </div>

      {certificate.link && certificate.link !== "#" && (
        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View Certificate
          <span>↗</span>
        </a>
      )}

    </article>
  );
};

export default CertificateCard;