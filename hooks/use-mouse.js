import { useState, useCallback } from "react";

export default function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    // Calcula la posición del mouse DENTRO DEL COMPONENTE.
    const x = Math.floor(e.clientX - e.target.x);
    const y = Math.floor(e.clientY - e.target.y);
    setMouse({ x, y });
  }, []);

  return [mouse, handleMouseMove];
}
