import Collage from "@/components/Collage";

export default function Home() {
  return (
    <div className="relative overflow-auto">
      <nav className="bg-slate-800 text-white p-4">
        <h2 className="text-2xl">Findus</h2>
      </nav>
      <Collage />
      <div className="h-10 bg-emerald-600"></div>
    </div>
  );
}
