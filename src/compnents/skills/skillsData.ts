import reactLogo from "../../assets/img/react.webp";
import javascriptLogo from "../../assets/img/javascript.webp";
import typescriptLogo from "../../assets/img/typescript.webp";
import expressJsLogo from "../../assets/img/express.webp";
import nodeJSLogo from "../../assets/img/nodejs.webp";
import reduxLogo from "../../assets/img/redux.webp";
import dockerLogo from "../../assets/img/docker.webp";
import materialUILogo from "../../assets/img/m-ui.webp";
import mySQLLogo from "../../assets/img/mysql.webp";
import GitLogo from "../../assets/img/git.svg";
import jQueryLogo from "../../assets/img/jquery.svg";
import hubspotLogo from "../../assets/img/hubspot.svg";
import mondayLogo from "../../assets/img/monday.svg";
import jiraLogo from "../../assets/img/jira.svg";
import { ILogo } from "../../utils/interfaces";

export const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const techSkills: Array<ILogo> = [
  { img: reactLogo, title: "React", alt: "react-logo" },
  { img: hubspotLogo, title: "HubSpot", alt: "hubspot-logo" },
  { img: mondayLogo, title: "monday.com", alt: "monday.com-logo" },
  { img: jiraLogo, title: "Jira", alt: "jira-logo" },
  { img: javascriptLogo, title: "JavaScript", alt: "javascript-logo" },
  { img: typescriptLogo, title: "TypeScript", alt: "typescript-logo" },
  { img: reduxLogo, title: "Redux", alt: "redux-logo" },
  {
    img: expressJsLogo,
    title: "Express.JS",
    alt: "express-logo",
    className: "express-js-logo",
  },
  { img: materialUILogo, title: "Material-UI", alt: "material-ui-logo" },
  { img: nodeJSLogo, title: "Node.JS", alt: "nodejs-logo" },
  { img: dockerLogo, title: "Docker", alt: "docker-logo" },
  { img: mySQLLogo, title: "MySQL", alt: "mysql-logo" },
  { img: GitLogo, title: "Git", alt: "git-logo", className: "git-logo" },
  { img: jQueryLogo, title: "jQuery", alt: "jQuery-logo" },
];
