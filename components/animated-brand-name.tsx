"use client";

interface AnimatedBrandNameProps {
  text: string;
  className?: string;
}

export function AnimatedBrandName({ text, className }: AnimatedBrandNameProps) {
  return (
    <span className={`brand-anim ${className ?? ""}`} aria-label={text}>
      <span aria-hidden>{text}</span>
      <span aria-hidden>{text}</span>
    </span>
  );
}

