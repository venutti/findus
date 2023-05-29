import Timer from "./Timer";
import CharactersRemain from "./CharactersRemain";

export default function Menu({ time, characters }) {
  return (
    <nav className="sticky top-0 w-full z-10 bg-slate-800 text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h2 className="text-2xl">
          find<span className="font-bold text-red-600">US</span>
        </h2>
        <Timer time={time} />
        <CharactersRemain characters={characters} />
      </div>
    </nav>
  );
}
