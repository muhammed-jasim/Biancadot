"use client";

import { ContactItem } from "./contact-item";
import { SocialLinks } from "../social-links";
import type { InfoFragment } from "@/lib/basehub";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

interface FooterContentProps {
  info: InfoFragment;
}

export function FooterContent({ info }: FooterContentProps) {
  return (
    <footer className="px-sides flex flex-col lg:grid grid-cols-12 gap-6 lg:gap-gap py-12">
      <RevealOnScroll direction="left" className="col-span-3">
        <SocialLinks
          links={info.socialLinks.items}
          className="text-base lg:text-lg space-y-2"
        />
      </RevealOnScroll>

      <RevealOnScroll
        direction="right"
        className="col-span-9"
      >
        <div className="flex flex-col space-y-6 lg:space-y-2 text-sm sm:text-base">
          <RevealOnScroll direction="up" delay={40}>
            <ContactItem
              label="Email"
              value={info.email}
              href={`mailto:${info.email}`}
              ariaLabel="Email link"
            />
          </RevealOnScroll>

          {info.phone && (
            <RevealOnScroll direction="up" delay={160}>
              <ContactItem
                label="Phone"
                value={info.phone}
                href={`tel:${info.phone}`}
                ariaLabel="Phone link"
              />
            </RevealOnScroll>
          )}

          <RevealOnScroll direction="up" delay={280}>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold opacity-30 mt-8">
              © 2025. All rights reserved.
            </p>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>
    </footer>
  );
}

