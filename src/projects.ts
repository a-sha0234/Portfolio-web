import cloudsweaper from "../src/screenshots/Picture1.png";
import ecom from "../src/screenshots/ecom.png";
import porfolioSite from "../src/screenshots/arunWeb.png";
import blog from "../src/screenshots/blog.png";

import projectBackgroundImg from "../src/projectBackgrounds/projectBackground..jpg";

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
    Live: "https://master--ticktock-ecom.netlify.app/",
    Repo: "https://github.com/a-sha0234/e-commerce",
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
    Live: "",
    Repo: "https://github.com/a-sha0234/Portfolio-web",
  },
  {
    ProjectName: "LifeNotes",
    languagesUsed: [
      { language: "SASS/CSS", color: "#093145" },
      { language: "JavaScript", color: "#9A2617" },
      { language: "React", color: "#FF3F80" },
      { language: "Node", color: "#C2571A" },
      { language: "Express", color: "#0066CC" },
      { language: "MongoDB", color: "DarkGreen" },
    ],
    languageImages: [projectBackgroundImg],
    screenshots: [blog],
    description:
      "A full stack blog website implemented using JAMStack arcutecture. Features include token authentication add comments, delete blogs",
    readMeLink: "https://github.com/a-sha0234/CloudSweaper#readme",
    // Live: "https://cloud-sweaper.vercel.app/",
    Repo: "https://github.com/a-sha0234/blog-app-clientSide",
  },
];

export default data;
