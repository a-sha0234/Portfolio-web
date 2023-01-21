import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { CgReadme } from "react-icons/cg";

interface Props {
  data: any;
}

const ProjectsCards: React.FC<Props> = ({ data }) => {
  console.log(data);

  let techImages = data.languageImages.map((path: string) => {
    return <img src={path} height={100} width={100} />;
  });

  return (
    <main className="projectCard">
      <h1>{data.ProjectName}</h1>
      <article className="">
        <img src={data.screenshots} />
      </article>
      <article>{techImages} </article>
      <article>
        <h1>{data.description} </h1>
      </article>
      <article>
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
