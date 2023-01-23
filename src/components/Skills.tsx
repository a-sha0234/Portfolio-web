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
import { Parallax } from "react-scroll-parallax";

export default function Skills() {
  return (
    <main className="skills">
      <h1>Skills</h1>
      <article style={{ display: "flex", justifyContent: "center" }}>
        <Parallax scaleX={[0, 8]}>
          <div id="underline"></div>
        </Parallax>
      </article>

      <article className="skills__labels">
        <Parallax opacity={[0, 3]}>
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
        </Parallax>
      </article>
    </main>
  );
}
