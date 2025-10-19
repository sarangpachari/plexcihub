import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.15; // trailing speed

    // ✅ Get computed effective style color under cursor
    const getEffectiveColor = (el, x, y) => {
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el);

        // 🎨 Step 1: If text is present under pointer → use text color
        if (el.textContent?.trim().length > 0) {
          const range = document.createRange();
          const textNode = el.firstChild;
          if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            range.setStart(textNode, 0);
            range.setEnd(textNode, textNode.textContent.length);
            const rects = range.getClientRects();
            for (let rect of rects) {
              if (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
              ) {
                return style.color; // text color wins
              }
            }
          }
        }

        // 🎨 Step 2: Check background (not transparent)
        const bg = style.backgroundColor;
        if (
          bg &&
          bg !== "transparent" &&
          bg !== "rgba(0, 0, 0, 0)" &&
          !bg.includes("gradient")
        ) {
          return bg;
        }

        // 🎨 Step 3: climb up DOM if transparent
        el = el.parentElement;
      }

      // 🎨 Step 4: fallback → body bg
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      if (
        bodyBg &&
        bodyBg !== "transparent" &&
        bodyBg !== "rgba(0, 0, 0, 0)"
      ) {
        return bodyBg;
      }

      return "white";
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX - 3}px, ${
          mouseY - 3
        }px, 0)`;
      }

      const el = document.elementFromPoint(mouseX, mouseY);
      if (el) {
        const color = getEffectiveColor(el, mouseX, mouseY);
        const rgb = color.match(/\d+/g);

        if (rgb) {
          const brightness =
            (parseInt(rgb[0]) * 299 +
              parseInt(rgb[1]) * 587 +
              parseInt(rgb[2]) * 114) /
            1000;

          if (brightness > 125) {
            // Light → dark cursor
            outerRef.current.style.borderColor = "black";
            innerRef.current.style.backgroundColor = "black";
          } else {
            // Dark → light cursor
            outerRef.current.style.borderColor = "white";
            innerRef.current.style.backgroundColor = "white";
          }
        }
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${
          currentX - 20
        }px, ${currentY - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed rounded-full border-2 border-black transition-colors duration-200 ease-linear w-10 h-10 z-[9999]"
      ></div>

      {/* Inner Dot */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed rounded-full bg-black w-1.5 h-1.5 z-[9999]"
      ></div>
    </>
  );
};

export default CustomCursor;
