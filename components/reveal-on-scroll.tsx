"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, HTMLAttributes } from "react";
import { useEffect, useRef } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

interface RevealOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  direction?: RevealDirection;
  delay?: number;
  once?: boolean;
}

export function RevealOnScroll({
  direction = "up",
  delay = 0,
  once = true,
  className,
  style,
  children,
  ...props
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const mergedStyle = {
    ...((style as CSSProperties) ?? {}),
    ["--reveal-delay" as string]: `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-direction={direction}
      className={cn("reveal", className)}
      style={mergedStyle}
      {...props}
    >
      {children}
    </div>
  );
}

