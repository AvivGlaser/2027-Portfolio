import equalWeb from "../../assets/img/equalWeb.webp";
import johnBryce from "../../assets/img/johnBryce.jpeg";
import BGU from "../../assets/img/bgu.webp";
import technion from "../../assets/img/technion.svg";
import BA from "../../assets/img/B.A.jpeg";
import pmi from "../../assets/img/pmi.webp";
import iaap from "../../assets/img/iaap.webp";
import questionMark from "../../assets/img/question-mark.svg";

import { ITimeLineElements } from "../../utils/interfaces";

const timelineElements: Array<ITimeLineElements> = [
  {
    id: 1,
    title: "???",
    location: "To be announced",
    description: "Details coming soon - stay tuned!",
    buttonText: "",
    date: "2027",
    icon: "work",
    image: questionMark,
    alt: "Question mark - next role to be announced",
  },
  {
    id: 2,
    title: "Project Management Professional (PMP)® Certification",
    location: "Project Management Institute (PMI)",
    description: "Pursuing the globally recognized PMP® certification to formally solidify my expertise in project leadership, risk management, and both Agile and Waterfall methodologies.",
    buttonText: "Take a peek",
    date: "2026", 
    icon: "school",
    image: pmi, 
    alt: "PMP Certification Logo",
    done: false,
    href: "https://www.pmi.org/certifications/project-management-pmp#path", 
  },
  {
    id: 3,
    title: "Certified Professional in Accessibility Core Competencies (CPACC)",
    location: "Int. Association of Accessibility Professionals",
    description: "Earning the CPACC certification to formalize my deep knowledge of digital accessibility, building upon my hands-on experience ensuring accessibility compliance across large-scale web projects.",
    buttonText: "Take a peek",
    done: false,
    date: "2026",
    icon: "school",
    image: iaap, 
    alt: "IAAP CPACC Logo",
    href: "https://www.accessibilityassociation.org/cpacc",
  },
  {
    id: 4,
    title:
      "Project Management in the AI era and Preparation for PMP® Certification",
    location: "Technion Continuing Studies",
    description: "Effective planning is key to any successful project. In this course, I mastered advanced AI-driven tools to optimize schedules, budgets, success metrics, and Gantt charts. Beyond technical frameworks like Agile and Waterfall, we also focused on the leadership skills necessary to navigate unexpected challenges and keep stakeholders aligned to deliver strong business outcomes. My next goal is to earn the globally recognized PMP® certification.",
    buttonText: " Take a peek ",
    date: "2026",
    icon: "school",
    done: true,
    image: technion,
    alt: "Technion logo image",
    href: "https://cont-edu.technion.ac.il/programs/%D7%A0%D7%99%D7%94%D7%95%D7%9C-%D7%99%D7%96%D7%9E%D7%95%D7%AA-%D7%95%D7%A9%D7%99%D7%95%D7%95%D7%A7/%D7%9E%D7%AA%D7%95%D7%93%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%9E%D7%AA%D7%A7%D7%93%D7%9E%D7%95%D7%AA-%D7%91%D7%A0%D7%99%D7%94%D7%95%D7%9C-%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%D7%99%D7%9D/",
    secondButtonText: "Course Certificate",
    secondHref:"https://www.linkedin.com/feed/update/urn:li:activity:7479417836319346689/",
    hiddenText: " External link to technion.com ",
  },
  {
    id: 5,
    title: "Customer Success Manager",
    location: "EqualWeb",
    description:
      "Managing hundreds of accounts via monday.com with automation and AI-assisted workflows, cutting delivery time from three to two months. Turns client feedback into structured Jira tickets, partnering with R&D on usability improvements. Owns the full customer lifecycle in HubSpot, from kickoffs to demos and hands-on support. Coordinates across Sales, Finance, R&D, and Project Management to resolve blockers and keep accounts moving smoothly.",
    buttonText: "Recommendation Letters",
    date: "2025 - 2026",
    icon: "work",
    image: equalWeb,
    alt: "EqualWeb logo image",
    href: "#recommendations",
  },
  {
    id: 6,
    title: "JavaScript Developer",
    location: "EqualWeb",
    description:
      "I began as a programmer ensuring accessibility on small sites, eventually leading large-scale high-stakes projects. I wrote clean, reusable code with clear structure and purpose. With the help of AI, I built CSS and JavaScript templates to boost efficiency, mastered debugging with DevTools, and deeply explored core JavaScript and HTML - always balancing accessibility, performance, and delivery speed under tight deadlines.",
    buttonText: "Recommendation Letters",
    date: "2023 - 2024",
    icon: "work",
    image: equalWeb,
    alt: "EqualWeb logo image",
    href: "#recommendations",
  },
  {
    id: 7,
    title: "Full-Stack Web Development bootcamp",
    location: "John Bryce",
    description:
      "During my full-stack web development bootcamp, I learned how to build secure, interactive, and user-friendly web applications from end to end. I gained hands-on experience setting up a complete backend environment from scratch, connecting it to a database, and handling smooth data flow between the server and the user. My final project was a fully functional vacations site. It featured secure authentication using JWT, allowing users to register, log in, and access protected endpoints. Admin users had full control over vacation data, with the ability to create, update, or delete vacations in real time. I learned a variety of technologies and tools, including React, TypeScript, Redux, Docker, Node.js, Express.js, and MySQL.",
    buttonText: "Course Certificate",
    date: "2021 - 2022",
    icon: "school",
    image: johnBryce,
    alt: "John Bryce logo image",
    done: true,
    href: "https://www.linkedin.com/in/aviv-glaser-226656202/overlay/1734883343928/single-media-viewer/?profileId=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
    hiddenText: " External link to linkedin.com ",
  },
  {
    id: 8,
    title: "B.A - Education & Communication",
    location: "Ben Gurion University",
    description:
      "I completed a B.A. in Education and Communication from Ben Gurion University, where I improved my English proficiency, strengthened my communication skills, and developed a creative approach to problem-solving. For over 8 years, I worked with children across the country, designing and leading educational programs that encouraged curiosity, collaboration, and hands-on learning.",
    buttonText: "B.A Degree",
    date: "2017 - 2020",
    icon: "school",
    image: BGU,
    done: true,
    alt: "Ben Gurion University logo image",
    href: BA,
    hiddenText: " Open degree image on a new tab ",
  },
];

export default timelineElements;