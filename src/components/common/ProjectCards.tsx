import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { CgReadme } from "react-icons/cg";
import TechTags from "./technologyTags";
import { Parallax } from "react-scroll-parallax";

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
        <h1>{data.ProjectName}</h1>
        <img src={data.screenshots} />
      </article>

      <article className="projectCard__description">
        <h1>{data.description} </h1>
      </article>

      <article className="projectCard__links">
        <div>{techLangauges}</div>
        <a href={data.readMeLink}>
          <CgReadme />
        </a>
        <a href={data.Live}>
          <MdLiveTv />
        </a>
        <a href={data.Repo}>
          <AiFillGithub />
        </a>
      </article>
    </main>
  );
};

export default ProjectsCards;
