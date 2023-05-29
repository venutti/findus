export default function EndGame({ time, onReset }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-auto backdrop-blur-sm backdrop-brightness-75 z-20 grid place-items-center">
      <div className="flex max-w-2xl bg-slate-200 rounded-3xl shadow-xl">
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl text-slate-900 font-bold">¡Felicidades!</h1>
          <p className="text-2xl text-slate-900 font-bold">
            Has encontrado a todos los personajes
          </p>
          <p className="text-2xl text-slate-900 font-bold">
            en {time} segundos
          </p>
          <button
            className="mt-8 px-4 py-2 bg-slate-900 text-slate-100 rounded-lg shadow-lg hover:bg-slate-800"
            onClick={onReset}
          >
            Volver a jugar
          </button>
        </div>
      </div>
    </div>
  );
}
