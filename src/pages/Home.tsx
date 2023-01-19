import { useState, useEffect, useRef } from "react";
import ConfettiEffect from "../components/Confetti";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isElementVisable, setIsElementVisable] = useState<boolean>();
  // const { ref: myRef, inView: isElementVisable, entry } = useInView(options);

  const myRef: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsElementVisable(entry.isIntersecting);
      console.log(isElementVisable);
    });

    observer.observe(myRef.current);

    console.log(myRef.current);
  }, [isElementVisable]);

  return (
    <>
      <ConfettiEffect />
      <main>
        <section ref={myRef}></section>
        <section></section>
      </main>
    </>
  );
}
