// Este componente renderiza el zoom de una imágen.
// Debe recibir como props:
// - src: la ruta de la imágen a mostrar.
// - width: el ancho de la imágen.
// - height: el alto de la imágen.
// - zoom: el nivel de zoom.
// - x: la posición horizontal del mouse.
// - y: la posición vertical del mouse.

export default function Zoom({
  src,
  width,
  height,
  zoom = 1.8,
  x,
  y,
  className,
}) {
  const containerWidth = 224;
  const containerHeight = 288;

  return (
    <div
      className={`w-[${containerWidth}px] h-[${containerHeight}px] border backdrop-blur overflow-hidden ${className}`}
    >
      <img
        src={src}
        className="block absolute max-w-none"
        style={{
          width: width * zoom,
          height: height * zoom,
          left: -x * zoom + containerWidth / 2,
          top: -y * zoom + containerHeight / 2,
        }}
        draggable="false"
      />
      {/* DIANA */}
      <div
        className="absolute w-20 h-20 rounded-full border-4 border-dashed border-white -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,.2)]"
        style={{
          left: containerWidth / 2,
          top: containerHeight / 2,
        }}
      />
      <div
        className="absolute w-2 h-2 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: containerWidth / 2,
          top: containerHeight / 2,
        }}
      ></div>
    </div>
  );
}
