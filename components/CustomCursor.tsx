"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add("has-custom-cursor");

    return () => {
      body.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const down = () => setIsActive(true);
    const up = () => setIsActive(false);

    // Prefer pointer events for broader device support; fall back to mouse
    const moveEvent = "onpointermove" in window ? "pointermove" : "mousemove";
    const downEvent = "onpointerdown" in window ? "pointerdown" : "mousedown";
    const upEvent = "onpointerup" in window ? "pointerup" : "mouseup";

    window.addEventListener(moveEvent as any, move as any, { passive: true });
    window.addEventListener(downEvent as any, down as any, { passive: true });
    window.addEventListener(upEvent as any, up as any, { passive: true });

    return () => {
      window.removeEventListener(moveEvent as any, move as any);
      window.removeEventListener(downEvent as any, down as any);
      window.removeEventListener(upEvent as any, up as any);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isActive ? "active" : ""}`}
    />
  );
}
