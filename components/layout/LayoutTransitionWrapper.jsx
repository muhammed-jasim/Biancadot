"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function LayoutTransitionWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!document.startViewTransition) return;

    // optional: add custom transition logic here
  }, [pathname]);

  return <>{children}</>;
}
