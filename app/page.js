"use client";
import { useState, useEffect } from "react";
import useTimer from "@/hooks/use-timer";

import CollageSelector from "@/components/CollageSelector";
import Collage from "@/components/Collage";
import Menu from "@/components/Menu";
import EndGame from "@/components/EndGame";
import { message } from "antd";

import { collages } from "@/seedCollages";
import { isCharacterInUbication } from "@/characterUbications";

export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const { time, start, pause, reset } = useTimer();

  const [collageIndex, setCollageIndex] = useState(0);
  const [collage, setCollage] = useState(collages[collageIndex]);

  const [isInGame, setIsInGame] = useState(false);

  useEffect(() => {
    if (collage.characters.filter((c) => !c.discovered).length === 0) {
      pause();
    }
  }, [collage]);

  const handleSelectCollage = (collage) => {
    setIsInGame(true);
    start();
  };

  const handlePrevCollage = () => {
    if (collageIndex === 0) {
      setCollageIndex(collages.length - 1);
      setCollage(collages[collages.length - 1]);
    } else {
      setCollageIndex(collageIndex - 1);
      setCollage(collages[collageIndex - 1]);
    }
  };

  const handleNextCollage = () => {
    if (collageIndex === collages.length - 1) {
      setCollageIndex(0);
      setCollage(collages[0]);
    } else {
      setCollageIndex(collageIndex + 1);
      setCollage(collages[collageIndex + 1]);
    }
  };

  const handleSelectCharacter = (
    character,
    positionX,
    positionY,
    width,
    height
  ) => {
    if (
      isCharacterInUbication(
        character,
        collage.id,
        positionX / width,
        positionY / height
      )
    ) {
      // change discover state of character
      const newCollage = {
        ...collage,
        characters: collage.characters.map((c) => {
          if (c.name === character) {
            return {
              ...c,
              discovered: true,
            };
          }
          return c;
        }),
      };
      setCollage(newCollage);
      messageApi.success(`¡Encontraste a ${character}!`);
    } else {
      messageApi.error(`¡Ups! Ese no es ${character}`);
    }
  };

  const handleReset = () => {
    setCollage(collages[collageIndex]);
    setIsInGame(false);
    reset();
  };

  return (
    <>
      {contextHolder}
      <Menu time={time} characters={collage.characters} />
      <Collage collage={collage} onSelect={handleSelectCharacter} />
      {!isInGame && (
        <CollageSelector
          collages={collages}
          collageIndex={collageIndex}
          onPrev={handlePrevCollage}
          onNext={handleNextCollage}
          onSelect={handleSelectCollage}
        />
      )}
      {collage.characters.filter((c) => !c.discovered).length === 0 && (
        <EndGame time={time} onReset={handleReset} />
      )}
    </>
  );
}
