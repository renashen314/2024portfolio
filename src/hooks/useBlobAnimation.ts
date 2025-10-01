import { useEffect } from "react";

export const useBlobAnimation = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
};