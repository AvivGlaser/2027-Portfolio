import { Github, Linkedin } from "react-bootstrap-icons";
import { INavLink, ISocialLink } from "../../utils/interfaces";

export const navLinks: Array<INavLink> = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
  { href: "#what-now", label: "Current" },
  { href: "#recommendations", label: "Recommendations" },
];

export const socialLinks: Array<ISocialLink> = [
  {
    href: "https://www.linkedin.com/in/aviv-glaser-226656202/",
    label: "My Linkedin",
    className: "linkedin-icon",
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://github.com/AvivGlaser",
    label: "My GitHub",
    className: "github-icon",
    icon: <Github size={20} />,
  },
];
