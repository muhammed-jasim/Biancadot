import { infoFragment } from "@/lib/basehub";
import { basehub } from "basehub";
import React from "react";
import { applyInfoOverrides } from "@/lib/info-overrides";
import { FooterContent } from "./footer-content";

export const Footer = async () => {
  const { info } = await basehub().query({
    info: infoFragment,
  });

  const overriddenInfo = applyInfoOverrides(info);

  return <FooterContent info={overriddenInfo} />;
};
