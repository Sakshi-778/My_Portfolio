import "./ProjectCard.css";

function ProjectCard({ image, number, title, description, technology }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <span className="project-number">Project {number}</span>
        <h3>
          <strong>Title :</strong>
          {title}
        </h3>
        <p>
          <strong>Description :</strong>
          {description}
        </p>
        <p>
          <strong>Technology :</strong> {technology}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
