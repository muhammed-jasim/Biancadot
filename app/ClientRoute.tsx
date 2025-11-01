"use client"; // must be a client component

import React from "react";
import { CustomCursor } from "@/components/CustomCursor";

export const ClientRootWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
};
