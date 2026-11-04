import ron from "../../assets/img/ron.webp";
import naor from "../../assets/img/naor.webp";
import alona from "../../assets/img/alona.webp";
import fabian from "../../assets/img/fabian.webp";
import alonaLetter from "../../assets/img/rec-letter-alona.jpeg";
import { IRecommendation } from "../../utils/interfaces";

export const recommendations: Array<IRecommendation> = [
  {
    name: "Ron Elli",
    role: "Senior Project Manager at EqualWeb",
    text: "Besides being very thorough and responsible, Aviv makes me laugh a lot - my days are so much more enjoyable with him around.",
    img: ron,
    letter: "/Recommendation-Letter-Ron-Elli.pdf",
    hiddenText: "By Ron - PDF, opens in a new tab",
  },
  {
    name: "Naor Bacharlia",
    role: "Project Manager at EqualWeb",
    text: "Aviv communicates client-side issues to our customers with detailed documentation, as well as resolving urgent accessibility matters on the spot.",
    img: naor,
    letter: "/Recommendation-Letter-Naor-Bacharlia.pdf",
    hiddenText: "By Naor - PDF, opens in a new tab",
  },
  {
    name: "Alona Elazari",
    role: "Head of Education at Kibbutz Sa'ar",
    text: "During his work, Aviv built personal and meaningful connections with his apprentices, showing responsibility, dedication, and initiative.",
    img: alona,
    letter: alonaLetter,
    hiddenText: "By Alona - image, opens in a new tab",
  },
  {
    name: "Fabian Bensik",
    role: "Head of Education at Kibbutz Shoval",
    text: "Aviv led by example serving children and their parents needs. He did so with warmth, calmness, attentive listening, and genuine care.",
    img: fabian,
    letter: "/Recommendation-Letter-Fabian-Bensik.pdf",
    hiddenText: "By Fabian - PDF, opens in a new tab",
  },
];

export const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
