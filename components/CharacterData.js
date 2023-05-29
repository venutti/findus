const difficultyClasses = {
  Fácil: "inline-block text-green-600 font-bold lowercase",
  Medio: "inline-block text-yellow-600 font-bold lowercase",
  Difícil: "inline-block text-red-600 font-bold lowercase",
};

export default function CharacterData({ character }) {
  if (!character) return null;
  return (
    <div className="flex gap-2 my-4">
      <img
        className={`block w-20 ${
          character.discovered ? "opacity-70 brightness-50" : "opacity-100"
        }`}
        src={character.src}
        alt={character.name}
      />

      <div>
        <span className={difficultyClasses[character.difficulty]}>
          {character.difficulty}
        </span>
        <h4 className="font-semibold text-lg leading-5 mt-2">
          {character.name}
          <br />
          <span className="text-sm font-normal text-slate-700">
            {character.franchise}
          </span>
        </h4>
      </div>
    </div>
  );
}
