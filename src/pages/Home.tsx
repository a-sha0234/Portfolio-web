import { useState, useEffect, useRef } from "react";
import ConfettiEffect from "../components/Confetti";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer/InView";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
// import images

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
          <Skills />
        </section>
      </main>
    </>
  );
}
