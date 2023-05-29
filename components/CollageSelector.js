"use client";
import {
  BsChevronCompactLeft as LeftIcon,
  BsChevronCompactRight as RightIcon,
} from "react-icons/bs";
import CharacterData from "./CharacterData";

import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: (direction) => {
    return {
      x: direction * 200,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export default function CollageSelector({
  collages,
  collageIndex,
  onSelect,
  onPrev,
  onNext,
}) {
  const collage = collages[collageIndex];
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    onPrev();
  };

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-auto backdrop-blur-sm backdrop-brightness-75 z-20 grid place-items-center">
      <LeftIcon
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-8xl text-slate-200 hover:text-slate-100 cursor-pointer"
        onClick={handlePrev}
      />

      <motion.div
        variants={variants}
        animate="animate"
        initial="initial"
        key={collage.id}
        custom={direction}
        className="flex max-w-2xl bg-slate-200 rounded-3xl shadow-xl"
      >
        <img
          className="flex-1 block w-full rounded-s-xl object-cover object-center"
          src={collage.src}
          alt={collage.name}
        />
        <div className="flex-1 flex flex-col items-center p-10">
          <h2 className="font-bold text-3xl leading-6 text-center">
            {collage.name}
            <br />
            <span className="text-lg font-normal">
              Creado por {collage.author}
            </span>
          </h2>

          <div className="mt-4">
            {collage.characters.map((character, i) => (
              <CharacterData key={i} character={character} />
            ))}
          </div>

          <button
            className="mt-4 px-8 py-2 rounded-full uppercase bg-cyan-500 text-2xl transition-all hover:shadow-lg focus:shadow-lg"
            onClick={onSelect}
          >
            Jugar
          </button>
        </div>
      </motion.div>

      <RightIcon
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-8xl text-slate-200 hover:text-slate-100 cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
