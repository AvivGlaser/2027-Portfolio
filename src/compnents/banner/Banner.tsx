import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { Linkedin } from "react-bootstrap-icons";
import { useTypewriter } from "../../utils/useTypewriter";
import "./Banner.css";

const toRotate = ["Customer Success", "Technical Project"];
// Longest title reserves the header's height so the text below never jumps
const longestTitle = toRotate.reduce((a, b) => (b.length > a.length ? b : a));
// Screen readers get the whole title at once instead of the typing animation
const fullTitle = `Hi! I'm Aviv, a ${toRotate.slice(0, -1).join(", ")} and ${toRotate[toRotate.length - 1]} Manager`;
const linkedInUrl =
  "https://www.linkedin.com/messaging/compose/?recipient=aviv-glaser-226656202";
const summary =
  "Thank you for visiting! I began my professional journey almost a decade ago in the education field, mentoring hundreds of kids across Israel. When COVID hit, I decided to start over in a completely different world and wrote my first lines of code close to the age of 30. After one of the hardest years of my life, I completed a Full-Stack Web Development program and joined EqualWeb. Since then, my journey has continued inside the company itself - from Web Developer to Customer Success, combining technology with what I’ve always enjoyed most: working with people.";

export function Banner() {
  const text = useTypewriter(toRotate);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="fade-in">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1 data-full={`Hi! I'm Aviv, A ${longestTitle} Manager`}>
              <span className="screen-reader-element">{fullTitle}</span>
              <span aria-hidden="true">
                {`Hi! I'm Aviv, A `}
                <span className="wrap">{text}</span>
                {` Manager`}
              </span>
            </h1>
            <p className="summary">{summary}</p>
            <OverlayTrigger overlay={<Tooltip>Message me in Linkedin</Tooltip>}>
              <a
                className="connect-btn"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message me on Linkedin - External link"
              >
                Let’s Connect <Linkedin size={20} />
              </a>
            </OverlayTrigger>
          </Col>
          <Col xs={12} md={6} xl={5} className="zoom-in">
            <img src={headerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
