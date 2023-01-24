import data from "../projects";
import ProjectCards from "../components/common/ProjectCards";

export default function Projects() {
  let projectData = data.map((info: any) => {
    return (
      <main className="projectsPage">
        <ProjectCards data={info} />
      </main>
    );
  });

  return <div>{projectData}</div>;
}
