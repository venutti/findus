"use client";
import { useRef } from "react";
import Zoom from "./Zoom";
import AnimatedCursor from "react-animated-cursor";

import useMouse from "@/hooks/use-mouse";
import useSizes from "@/hooks/use-sizes";

const image = "/collages/universe-113.jpg";

export default function Collage() {
  const collageRef = useRef(null);

  const [mouse, handleMouseMove] = useMouse();
  const sizes = useSizes(collageRef);

  return (
    <div className="relative overflow-auto cursor-crosshair">
      <img
        src={image}
        className="block brightness-90"
        onMouseMove={handleMouseMove}
        ref={collageRef}
        draggable="false"
      />
      <Zoom
        src={image}
        {...mouse}
        {...sizes}
        className="fixed bottom-0 right-0"
      />
    </div>
  );
}
