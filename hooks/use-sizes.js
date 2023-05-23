import { useState, useEffect } from "react";

export default function useSizes(ref) {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect();
    setSizes({ width, height });
  }, [ref]);

  // Cambia el width y el heigth cuando el tamaño de la ventana cambia
  useEffect(() => {
    const handleResize = () => {
      const { width, height } = ref.current.getBoundingClientRect();
      setSizes({ width, height });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return sizes;
}
