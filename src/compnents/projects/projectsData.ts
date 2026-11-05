import eCommerce from "../../assets/img/e-commerece-project.webp";
import vacations from "../../assets/img/vacations-project.webp";
import basketBallGallery from "../../assets/img/basketball-gallery-project.webp";
import oldPortfolio from "../../assets/img/old-protfolio-project.webp";
import qbrPresentation from "../../assets/img/qbr-presentation-project.svg";
import businessDashboard from "../../assets/img/business-dashboard-project.svg";
import { IProjectsData } from "../../utils/interfaces";


const projectsData: Array<IProjectsData> = [
  {
    title: "My Previous Portfolio",
    description: "My portfolio before I got hired",
    link: "https://aviv-glaser-portfolio.web.app/",
    imgUrl: oldPortfolio,
    alt: "image of my old portfolio site",
    section: "Deployed",
  },
  {
    title: "E-Commerce site",
    description:
      "This was my first project in the web-development world, An e-commerce site with basic CRUD functionality  ",
    imgUrl: eCommerce,
    alt: "image of my e-commerce website",
    link: "https://e-commerce-project-aviv-glaser.web.app/",
    section: "Deployed",
  },
  {
    title: "Vacations Site",
    description:
      "Full-Stack vacations site with JWT auth, interactive UI, admin management, payments, reports, and unit & integration tests.",
    imgUrl: vacations,
    alt: "image from my vacations website",
    link: "https://github.com/AvivGlaser/Vacations-App-2.0",
    section: "GitHub",
  },
  {
    title: "Basketball Gallery Showcase",
    description:
      "a small project designed to showcase basketball teams using React 19, TypeScript, MongoDB, and Next.js.",
    imgUrl: basketBallGallery,
    alt: "image from my basketball gallery showcase website",
    link: "https://github.com/AvivGlaser/BasketballGallery",
    section: "GitHub",
  },
  {
    title: "QBR Presentation in English",
    description:
      "A short video of me presenting a sample Quarterly Business Review in English - walking through results, insights and next-quarter goals the way I would with a real customer.",
    imgUrl: qbrPresentation,
    alt: "Illustration of a presenter next to a Quarterly Business Review slide with a play button",
    section: "Future",
  },
  {
    title: "Business Metrics Dashboard",
    description:
      "An interactive dashboard: enter key business numbers and instantly get ROI, KPIs, upsell and cross-sell potential, and other key metrics.",
    imgUrl: businessDashboard,
    alt: "Illustration of a dashboard with revenue inputs, ROI and upsell figures and a trend chart",
    section: "Future",
  },
];

export default projectsData;
