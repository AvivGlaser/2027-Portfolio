import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import logo from "../../assets/img/aviv-glaser.webp";
import whiteLogo from "../../assets/img/aviv-glaser-white-contrast.webp";
import { footerLinks } from "./footerData";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Aviv Glaser Web Dev Logo" className="logo-img logo-dark" loading="lazy" />
            <img src={whiteLogo} alt="Aviv Glaser Web Dev Logo" className="logo-img logo-light" loading="lazy" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            {footerLinks.map((link) => (
              <div className="social-icon" key={link.alt}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-${link.alt}`}>{link.alt}</Tooltip>}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span className="screen-reader-element">
                      &nbsp; {link.hiddenText}
                    </span>
                  </a>
                </OverlayTrigger>
              </div>
            ))}

            <p>
              Aviv Glaser Copyright {new Date().getFullYear()}. All Rights
              Reserved&nbsp;©
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
