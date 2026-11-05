import { Col } from "react-bootstrap";
import { IProjectsData } from "../../utils/interfaces";

export function ProjectCard({ title, description, imgUrl, alt, link, section }: IProjectsData) {
  return (
    <Col sm={6} md={4} className="project-col">
      <div className="project-card">
        {/* width/height reserve the 16:9 box before the image arrives, so nothing jumps */}
        <img src={imgUrl} alt={alt} width={960} height={540} loading="lazy" decoding="async" />
        <div className="project-card-overlay">
          <h3>{title}</h3>
          <span>{description}</span>
          <br />
          {section !== "Future" && (
            <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
              {section === "GitHub" ? "Link to GitHub repo" : "Live Demo"}
              <span className="screen-reader-element"> &nbsp; External Link </span>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
}
