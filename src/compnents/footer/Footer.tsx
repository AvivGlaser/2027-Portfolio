import { Container, Row, Col } from "react-bootstrap";
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
            {/* Each link shows its name above the icon, so no hover is needed to tell them apart */}
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a className="footer-link" href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="footer-link-label">{link.label}</span>
                    <span className="footer-link-icon" aria-hidden="true">{link.icon}</span>
                    <span className="screen-reader-element">, {link.hiddenText}</span>
                  </a>
                </li>
              ))}
            </ul>

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
