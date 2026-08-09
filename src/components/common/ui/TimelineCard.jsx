import "./TimelineCard.css";

const TimelineCard = ({ item }) => {
  return (
    <div className="timeline-card">

      <div className="timeline-header">

        <div>

          <h2>{item.company}</h2>

          <h4>{item.role}</h4>

          <span>{item.duration}</span>

        </div>

      </div>

      <p className="timeline-description">
        {item.description}
      </p>

      <div className="timeline-highlights">

        <h5>Highlights</h5>

        <ul>

          {item.highlights.map((highlight, index) => (

            <li key={index}>✓ {highlight}</li>

          ))}

        </ul>

      </div>

      <div className="timeline-tech">

        {item.technologies.map((tech, index) => (

          <span key={index}>
            {tech}
          </span>

        ))}

      </div>

    </div>
  );
};

export default TimelineCard;