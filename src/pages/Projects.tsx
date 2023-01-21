import data from "../projects";
import ProjectCards from "../components/common/ProjectCards";

export default function Projects() {
  let projectData = data.map((info: any) => {
    return (
      <div>
        <ProjectCards data={info} />
      </div>
    );
  });

  return <div>{projectData}</div>;
}
