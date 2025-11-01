import Link from "next/link";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
  ariaLabel?: string;
}

export function ContactItem({
  label,
  value,
  href,
  ariaLabel,
}: ContactItemProps) {
  return (
    <div className="flex flex-col lg:grid grid-cols-9 lg:gap-gap place-items-baseline gap-2">
      <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold opacity-50">
        {label}
      </span>
      <Link
        aria-label={ariaLabel || `${label} link`}
        title={ariaLabel || `${label} link`}
        rel="noopener noreferrer"
        className="contact-link text-lg sm:text-xl lg:text-2xl font-semibold col-span-8"
        href={href}
      >
        {value}
      </Link>
    </div>
  );
}
