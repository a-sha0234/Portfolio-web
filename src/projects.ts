import cloudsweaper from "../src/screenshots/Picture1.png";
import ecom from "../src/screenshots/ecom.png";
import porfolioSite from "../src/screenshots/arunWeb.png";
// import css from "../src/technologies/css.png";
// import sass from "../src/technologies/sass.png";
// import javascript from "../src/technologies/javascript.png";
// import typescript from "../src/technologies/TypeScript.png";
// import react from "../src/technologies/Reactsvg.png";
// import redux from "../src/technologies/Redux.png";
// import next from "../src/technologies/nextjs.png";
// import node from "../src/technologies/node.jpg";
import mongodb from "../src/technologies/mongodb.png";
// libraries
// import chartjs from "../src/technologies/chartjs.png";
import projectBackgroundImg from "../src/projectBackgrounds/projectBackground..jpg";

import { SiTypescript } from "react-icons/si";

let data = [
  {
    ProjectName: "CloudSweaper",
    languagesUsed: [
      { language: "CSS3", color: "#093145" },
      { language: "TypeScript", color: "#9A2617" },
      { language: "NextJs", color: "#C2571A" },
      { language: "HTML", color: "#FF3F80" },
    ],
    languageImages: [projectBackgroundImg],
    screenshots: [cloudsweaper],
    description:
      "A responsive weather based application. Features include: live data pulled from Openweather API, a reactive graph utalizing ChartJS and a geolocation feature  ",
    readMeLink: "https://github.com/a-sha0234/CloudSweaper#readme",
    Live: "https://cloud-sweaper.vercel.app/",
    Repo: "https://github.com/a-sha0234/CloudSweaper",
  },
  {
    ProjectName: "TickTock",
    languagesUsed: [
      { language: "SASS/CSS", color: "#093145" },
      { language: "TypeScript", color: "#9A2617" },
      { language: "React", color: "#C2571A" },
      { language: "Redux", color: "#FF3F80" },
    ],
    languageImages: [projectBackgroundImg],
    screenshots: [ecom],
    description:
      "A responsive ecommerce platform. Features include: add to cart, sorting feature and mobile responsiveness   ",
    readMeLink: "https://github.com/a-sha0234/CloudSweaper#readme",
    Live: "https://cloud-sweaper.vercel.app/",
    Repo: "https://github.com/a-sha0234/CloudSweaper",
  },
  {
    ProjectName: "Aruns Portfolio website",
    languagesUsed: [
      { language: "SASS/CSS", color: "#093145" },
      { language: "TypeScript", color: "#9A2617" },
      { language: "React", color: "#C2571A" },
    ],
    languageImages: [projectBackgroundImg],
    screenshots: [porfolioSite],
    description:
      "A responsive portfolio website. This website included parrallex scrolling, mobile responsiveness   ",
    readMeLink: "https://github.com/a-sha0234/CloudSweaper#readme",
    Live: "https://cloud-sweaper.vercel.app/",
    Repo: "https://github.com/a-sha0234/CloudSweaper",
  },
  // {
  //   ProjectName: "CloudSweaper",
  //   languagesUsed: ["CSS3, TypeScript, NextJs, HTML"],
  //   languageImages: [projectBackgroundImg],
  //   screenshots: [cloudsweaper],
  //   description:
  //     "A responsive weather based application. Features include: a  ",
  //   readMeLink: "https://github.com/a-sha0234/CloudSweaper#readme",
  //   Live: "https://cloud-sweaper.vercel.app/",
  //   Repo: "https://github.com/a-sha0234/CloudSweaper",
  // },
];

export default data;
