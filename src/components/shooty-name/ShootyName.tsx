"use client";

import React from "react";
import { shootyLetters } from "./shooty-letters";

export default function ShootyName() {
  const canvasRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    shootyLetters({
      container: canvasRef.current,
      w: 126,
      h: 76,
      text: "RD",
      xPos: 40,
      yPos: 20,
      size: 6,
      gap: 6,
      color: "16,185,129",
    });
  }, []);

  return (
    <>
      <div ref={canvasRef}></div>
    </>
  );
}
