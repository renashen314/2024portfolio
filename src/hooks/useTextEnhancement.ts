import { useCallback } from "react";

export const useTextEnhancement = () => {
  const rand = useCallback(
    (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
    []
  );

  const enhance = useCallback(
    (element: HTMLElement) => {
      const text = element.innerText.split("");
      element.innerText = "";

      text.forEach((letter, index) => {
        const outer = document.createElement("span");
        outer.className = "outer";

        const inner = document.createElement("span");
        inner.className = "inner";
        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        span.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(span);
        outer.appendChild(inner);
        element.appendChild(outer);
      });
    },
    [rand]
  );

  return enhance;
};