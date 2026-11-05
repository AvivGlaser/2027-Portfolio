import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsData from "./projectsData";
import colorSharp2 from "../../assets/img/color-sharp2.webp";
import "./Projects.css";

const sections = {
  Future: "Future Projects",
  Deployed: "Deployed Projects",
  GitHub: "GitHub Projects",
};
const sectionKeys = Object.keys(sections) as Array<keyof typeof sections>;
const projectsParagraph: string =
  "Explore my diverse projects, ranging from full-stack applications to e-commerce sites, with a mix of live demos and GitHub repos. Stay tuned for future projects that showcase my growing skills in React, TypeScript, and backend development.";

export default function Projects() {
  return (
    <section className="project" id="projects">
      {/* Rises in as it scrolls into view - scroll-driven CSS in Projects.css */}
      <div className="projects-content">
        <h2>Projects</h2>
        <p className="project-paragraph">{projectsParagraph}</p>
        <Tab.Container id="projects-tabs" defaultActiveKey="Future">
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            {sectionKeys.map((section) => (
              <Nav.Item key={section}>
                <Nav.Link eventKey={section} className="project-tab-panel-links">
                  {sections[section]}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content id="projects-tab-content">
            {sectionKeys.map((section) => (
              <Tab.Pane eventKey={section} key={section}>
                <Row className="mx-0">
                  {projectsData
                    .filter((project) => project.section === section)
                    .map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
}
