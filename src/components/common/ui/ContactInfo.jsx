import "./ContactInfo.css";

const ContactInfo = ({ title, value, link }) => {
  return (
    <div className="contact-info">
      <h4>{title}</h4>

      <a href={link} target="_blank" rel="noreferrer">
        {value}
      </a>
    </div>
  );
};

export default ContactInfo;