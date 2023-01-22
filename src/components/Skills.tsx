// import css from "../technologies/css.png";
// import sass from "../technologies/sass.png";
// import javascript from "../technologies/javascript.png";
// import typescript from "../technologies/TypeScript.png";
// import react from "../technologies/Reactsvg.png";
// import redux from "../technologies/Redux.png";
// import next from "../technologies/nextjs.png";
// import node from "../technologies/node.png";
// import mongodb from "../technologies/mongodb.png";
// import chartjs from "../technologies/chartjs.png";
// import html from "../technologies/html.png";
import { DiReact, DiSass } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";

export default function Skills() {
  return (
    <main className="skills">
      <h1>Skills</h1>

      <article className="skills__labels">
        <div className="skills__grid">
          <div style={{ gridArea: "item1" }}>
            <AiOutlineHtml5 color="blue" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item2" }}>
            <TbBrandCss3 color="green" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item3" }}>
            <DiSass color="pink" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item4" }}>
            <SiJavascript color="yellow" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item5" }}>
            <SiTypescript color="aqua" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item6" }}>
            <DiReact color="aqua" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item7" }}>
            <SiRedux color="purple" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item8" }}>
            <TbBrandNextjs size={120} className="items" />
          </div>
          <div style={{ gridArea: "item9" }}>
            <FaNodeJs color="green" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item10" }}>
            <SiMongodb color="green" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item11" }}>
            <SiJest color="red" className="items" size={120} />
          </div>
          <div style={{ gridArea: "item12" }}>
            <FaGitAlt size={120} className="items" />
          </div>
        </div>
      </article>
    </main>
  );
}
