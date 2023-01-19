import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";

export default function ConfettiEffect() {
  const [confetti, setConfetti] = useState(300);

  const [width, height] = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setConfetti(0);
    }, 1000);
  }, []);

  return (
    <div>
      {" "}
      <Confetti width={width} height={height} numberOfPieces={confetti} />
    </div>
  );
}
