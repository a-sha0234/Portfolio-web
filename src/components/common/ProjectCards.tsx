import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
// import { CgReadme } from "react-icons/cg";
import TechTags from "./technologyTags";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

interface Props {
  data: any;
}

const ProjectsCards: React.FC<Props> = ({ data }) => {
  console.log(data);

  let techLangauges = data.languagesUsed.map((info: string) => {
    return <TechTags data={info} />;
  });

  return (
    <main className="projectCard">
      <article className="projectCard__screenshot">
        <img src={data.screenshots} />
        {/* <Parallax scaleX={[0, 1]}>
          <div className="line">se</div>
        </Parallax> */}
      </article>

      <article className="projectCard__description">
        <div>
          <h1>{data.ProjectName}</h1>
          <p style={{ color: "grey" }}>{data.description} </p>
        </div>
        <div className="github">
          <a href={data.Live} target="_blank">
            <MdLiveTv color="white" size={40} />
          </a>
          <a href={data.Repo} target="_blank">
            <AiFillGithub color="white" size={40} />
          </a>
        </div>
      </article>

      <article className="projectCard__links">
        <div className="tagsContainer">{techLangauges}</div>
        {/* <div className="github">
          <a href={data.Live} target="_blank">
            <MdLiveTv color="white" size={50} />
          </a>
          <a href={data.Repo} target="_blank">
            <AiFillGithub color="white" size={50} />
          </a>
        </div> */}
      </article>
      <Parallax scaleX={[0, 1]} opacity={[0, 7]}>
        <div className="line">se</div>
      </Parallax>
    </main>
  );
};

export default ProjectsCards;
