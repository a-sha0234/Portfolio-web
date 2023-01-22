import { useState, useEffect, useRef } from "react";
import ConfettiEffect from "../components/Confetti";
import { useInView } from "react-intersection-observer";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import { Parallax } from "react-scroll-parallax";
// import images

export default function Home() {
  const { ref: myRef, inView: isElementVisable } = useInView();

  return (
    <>
      <ConfettiEffect />
      <main>
        <Parallax speed={-15} easing="easeInQuad">
          <div className="box" id="box1"></div>
        </Parallax>
        <Parallax speed={-15} easing="easeInQuad">
          <div className="box" id="box2"></div>
        </Parallax>
        <Parallax speed={-50}>
          <div className="box" id="box3"></div>
        </Parallax>
        <Parallax speed={-10}>
          <div className="box" id="box4"></div>
        </Parallax>
        <section
          ref={myRef}
          id="banner"
          className={isElementVisable ? "animateBanner" : ""}
        >
          <Banner />
          <Parallax speed={-10}>
            <div className="box" id="box5"></div>
          </Parallax>
          <Parallax speed={-10}>
            <div className="box" id="box6"></div>
          </Parallax>
          <Parallax speed={-10}>
            <div className="box" id="box7"></div>
          </Parallax>
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
    </>
  );
}
