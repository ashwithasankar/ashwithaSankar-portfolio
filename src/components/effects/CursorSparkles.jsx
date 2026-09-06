import { useEffect } from "react";
import "./CursorSparkles.css";

const CursorSparkles = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const sparkle = document.createElement("span");

      sparkle.className = "cursor-sparkle";

      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      const size = Math.random() * 5 + 3;

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      sparkle.style.setProperty(
        "--x",
        `${(Math.random() - 0.5) * 45}px`
      );

      sparkle.style.setProperty(
        "--y",
        `${(Math.random() - 0.5) * 45}px`
      );

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorSparkles;