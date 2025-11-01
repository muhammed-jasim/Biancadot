"use client";

import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { type ReactNode, useEffect, useRef } from "react";
import { type AnimationVariant, createViewTransition } from "@/lib/animations";

interface TransitionTriggerProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  onClick?: () => void;
}

export function TransitionTrigger({
  href,
  children,
  className,
  variant = "up",
  onClick,
}: TransitionTriggerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // IntersectionObserver to prefetch links
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let hasPrefetched = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPrefetched) {
            router.prefetch(href);
            hasPrefetched = true;
          }
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    observer.observe(button);

    return () => {
      observer.unobserve(button);
    };
  }, [href, router]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClick) onClick();

    // If already on the page, do nothing
    if (pathname === href) return;

    // Native Next.js view transition
    if (document.startViewTransition) {
      document.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }

    // Optional animation hook
    createViewTransition?.(variant);
  };

  return (
    <button ref={buttonRef} onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
