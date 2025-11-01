"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InfoFragment } from "@/lib/basehub";
import { Separator } from "@/components/ui/separator";

interface ContactProps {
  info: InfoFragment;
  children: React.ReactNode;
}

export const Contact = ({ info, children }: ContactProps) => {
  const socials = info.socialLinks.items.filter(Boolean);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-2xl border border-border/40 bg-gradient-to-br from-background/95 to-background/75 backdrop-blur-2xl p-10 flex flex-col gap-10 items-center text-center rounded-[28px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] z-50 duration-300 data-[state=open]:animate-contact-slide-in data-[state=closed]:animate-contact-slide-out"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Contact Information</DialogTitle>

        {/* Name and Title */}
        <div className="space-y-3 max-w-lg">
          <p className="text-[0.6rem] uppercase tracking-[0.35em] font-semibold text-foreground/50">
            Let&apos;s collaborate
          </p>
          <h2 className="text-[2.75rem] sm:text-[3rem] font-semibold uppercase leading-tight">
            {info.title}
          </h2>
          {info.subtitle && (
            <p className="text-sm sm:text-base text-foreground/60">
              {info.subtitle}
            </p>
          )}
        </div>

        <Separator />

        {/* Contact Information */}
        <div className="grid gap-6 w-full max-w-xl">
          {info.email && (
            <div className="grid gap-1 justify-items-center">
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-foreground/50">
                Email
              </span>
              <a
                href={`mailto:${info.email}`}
                className="contact-link text-base sm:text-lg"
              >
                {info.email}
              </a>
            </div>
          )}

          {info.phone && (
            <div className="grid gap-1 justify-items-center">
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-foreground/50">
                Phone
              </span>
              <a
                href={`tel:${info.phone}`}
                className="contact-link text-base sm:text-lg"
              >
                {info.phone}
              </a>
            </div>
          )}

          {info.address && (
            <div className="grid gap-1 justify-items-center">
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-foreground/50">
                Studio
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  info.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link text-sm sm:text-base"
              >
                {info.address}
              </a>
            </div>
          )}
        </div>

        {socials.length > 0 && (
          <div className="pt-4 space-y-4 w-full max-w-xl">
            <span className="text-xs uppercase tracking-[0.35em] font-semibold text-foreground/50">
              Elsewhere
            </span>
            <ul className="flex flex-wrap justify-center gap-3">
              {socials.map((item) => (
                <li key={item._title}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-chip"
                  >
                    {item._title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
