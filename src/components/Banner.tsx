import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <main>
      <div className="bannerContainer">
        <h1 id="name">Arun Sharma</h1>
        <h2 id="title">Software Engineer.</h2>
        {/* <h2></h2> */}
      </div>
      <article className="buttons">
        {/* <a href="/projects">Projects</a> */}
        <a href="/projects" id="button__projects">
          Projects
        </a>

        <a
          href="https://docs.google.com/document/d/1Scd7oXRZB8bhTdyp_XoLaKTOb8cVaW1NM04H6bnsTlc/edit"
          target="_blank"
          className="button__cv"
        >
          CV
        </a>
      </article>
    </main>
  );
}
