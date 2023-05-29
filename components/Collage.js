"use client";
import { useState, useRef } from "react";
import Zoom from "./Zoom";
import AnimatedCursor from "react-animated-cursor";

import useMouse from "@/hooks/use-mouse";
import useSizes from "@/hooks/use-sizes";
import { Popover } from "antd";

export default function Collage({ collage, onSelect }) {
  const [showPopover, setShowPopover] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const { src: image } = collage;
  const collageRef = useRef(null);

  const [mouse, handleMouseMove] = useMouse();
  const sizes = useSizes(collageRef);

  const handleZoomOpen = () => {
    setIsZooming(true);
  };

  const handleZoomClose = () => {
    setIsZooming(false);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setIsZooming((prev) => !prev);
  };

  const handleClick = (e) => {
    setPopoverPosition({ x: mouse.x, y: mouse.y });
    setShowPopover(!showPopover);
  };

  const handleSelectCharacter = (character) => {
    onSelect(
      character,
      popoverPosition.x,
      popoverPosition.y,
      collageRef.current.width,
      collageRef.current.height
    );
    setShowPopover(false);
  };

  return (
    <div className="relative cursor-crosshair bg-black">
      <img
        src={image}
        draggable="false"
        className={`block transition-all ${
          isZooming ? "opacity-70" : "opacity-100"
        }`}
        ref={collageRef}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      />
      <Zoom
        src={image}
        {...mouse}
        {...sizes}
        isZooming={isZooming}
        onOpen={handleZoomOpen}
        onClose={handleZoomClose}
        className="fixed bottom-0 right-0"
      />
      {showPopover && (
        <div
          className="absolute bg-white text-red-600 rounded-xl py-2 shadow-lg"
          style={{ top: popoverPosition.y, left: popoverPosition.x }}
        >
          {collage.characters.map((character) => {
            if (character.discovered) return null;
            return (
              <p
                key={character.name}
                className="px-4 py-1 hover:bg-slate-200 cursor-pointer"
                onClick={() => handleSelectCharacter(character.name)}
              >
                {character.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
