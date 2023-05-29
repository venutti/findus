"use client";
import { useState } from "react";

import { Popover } from "antd";
import CharacterData from "./CharacterData";

export default function CharactersRemain({ characters }) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (visible) => {
    setOpen(visible);
  };

  return (
    <Popover
      content={characters.map((character) => (
        <CharacterData key={character.name} character={character} />
      ))}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <button className="bg-red-600 text-white px-4 py-2 font-bold rounded-full">
        {characters.filter((c) => !c.discovered).length}
      </button>
    </Popover>
  );
}
