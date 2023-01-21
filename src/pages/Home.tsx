import { useState, useEffect, useRef } from "react";
import ConfettiEffect from "../components/Confetti";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer/InView";
import Banner from "../components/Banner";
// import images
import css from "../technologies/css.png";
import sass from "../technologies/sass.png";
import javascript from "../technologies/javascript.png";
import typescript from "../technologies/TypeScript.png";
import react from "../technologies/Reactsvg.png";
import redux from "../technologies/Redux.png";
import next from "../technologies/nextjs.png";
import node from "../technologies/node.png";
import mongodb from "../technologies/mongodb.png";
import chartjs from "../technologies/chartjs.png";

export default function Home() {
  const { ref: myRef, inView: isElementVisable } = useInView();

  return (
    <>
      <ConfettiEffect />
      <main>
        <section ref={myRef} id="banner">
          <Banner />
        </section>
        <section id="skills">
          <article>
            <h1>Skills</h1>
            <div className="skills__labels">
              <img src={css} alt="css"></img>
              <img src={sass}></img>
              <img src={javascript}></img>
              <img src={typescript}></img>
              <img src={react}></img>
              <img src={redux}></img>
              <img src={next}></img>
              <img src={node}></img>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
