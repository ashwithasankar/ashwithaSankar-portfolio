import "./SkillCard.css";

const SkillCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <Icon />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default SkillCard;