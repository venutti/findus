// Este componente renderiza el zoom de una imágen.
// Debe recibir como props:
// - src: la ruta de la imágen a mostrar.
// - width: el ancho de la imágen.
// - height: el alto de la imágen.
// - zoom: el nivel de zoom.
// - x: la posición horizontal del mouse.
// - y: la posición vertical del mouse.
import { BsZoomIn as ZoomInIcon } from "react-icons/bs";
import { BsZoomOut as ZoomOutIcon } from "react-icons/bs";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Zoom({
  src,
  width,
  height,
  zoom = 1.8,
  x,
  y,
  isZooming,
  onOpen,
  onClose,
  className,
}) {
  if (!isZooming) {
    return (
      <motion.button
        initial="hidden"
        animate="visible"
        variants={variants}
        className={`m-4 p-5 rounded-full cursor-pointer bg-cyan-600 opacity-75 hover:opacity-100 ${className}`}
        onClick={onOpen}
      >
        <ZoomInIcon className="text-3xl text-white" />
      </motion.button>
    );
  }

  const containerWidth = 224; // w-56
  const containerHeight = 288; // h-72

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`w-56 h-72 cursor-default border-2 border-cyan-600 backdrop-blur overflow-hidden ${className}`}
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
      {/* CLOSE */}
      <button
        className="absolute top-0 right-0 m-2 cursor-pointer"
        onClick={onClose}
      >
        <ZoomOutIcon className="text-3xl text-white" />
      </button>
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
    </motion.div>
  );
}
