import { useState, useEffect, useLayoutEffect } from "react";
import Accessibility from "../../assets/img/accessibility.webp";
import logo from "../../assets/img/aviv-glaser.webp";
import whiteLogo from "../../assets/img/aviv-glaser-white-contrast.webp";
import { Google } from "react-bootstrap-icons";
import AccessibilityMenu from "../accessibility/AccessibilityMenu";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import { handleFocusInDialog, handleMainMenu } from "../../utils/screenReader";
import { appOrBrowser, handleResize } from "../../utils/view";
import { navLinks, socialLinks } from "./navbarData";
import "./NavBar.css";

export function NavBar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Layout effect: body.mobile is set before the first paint, so mobile never flashes the desktop layout
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
    setTimeout(handleFocusInDialog, 1000);
  }

  return (
    <header>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="logo">
            {/* CSS shows the one matching the contrast mode; lazy = the hidden one downloads at low priority */}
            <img src={logo} alt="Aviv Glaser Web Dev Logo" className="logo-img logo-dark" />
            <img src={whiteLogo} alt="Aviv Glaser Web Dev Logo" className="logo-img logo-light" loading="lazy" />
          </Navbar.Brand>

          <Button
            className="social-icon accessibility-button"
            onClick={toggleVisibility}
            aria-haspopup="dialog"
            aria-label={
              isVisible ? "Close accessibility menu" : "Open accessibility menu"
            }
          >
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="accessibility-logo">Accessibility menu</Tooltip>}
            >
              <img
                src={Accessibility}
                alt="Accessibility logo"
                className="accessibility-logo"
              />
            </OverlayTrigger>
          </Button>

          <AccessibilityMenu isVisible={isVisible} setIsVisible={setIsVisible} />

          {socialLinks.map((link) => (
            <div className={`social-icon ${link.className}`} key={link.href}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>{link.label}</Tooltip>}
              >
                <a
                  aria-label={`${link.label} - External link`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </OverlayTrigger>
            </div>
          ))}

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav role="menu">
              {navLinks.map((link) => (
                <Nav.Link
                  role="menuitem"
                  key={link.href}
                  href={link.href}
                  className={`${activeLink === link.href ? "active " : ""}navbar-link`}
                  onClick={() => setActiveLink(link.href)}
                  onKeyDown={handleMainMenu}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Email Me</Tooltip>}
                >
                  <button
                    role="link"
                    aria-label="Email me on Gmail - External link"
                    className="email-me"
                    onClick={appOrBrowser}
                  >
                    <span>
                      Let’s Chat <Google size={20} className="gmail-icon" />
                    </span>
                  </button>
                </OverlayTrigger>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
