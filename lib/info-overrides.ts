import { InfoFragment } from "@/lib/basehub";

const BRAND_NAME = "biancadotstudio";
const EMAIL = "biancadotstudio@gmail.com";

const SOCIAL_LINKS: InfoFragment["socialLinks"]["items"] = [
  {
    _title: "Behance",
    link: "https://www.behance.net/biancadotstudio",
  },
  {
    _title: "Instagram",
    link: "https://www.instagram.com/biancadotstudio",
  },
  {
    _title: "Email",
    link: `mailto:${EMAIL}`,
  },
];

const replaceName = (value: string | null | undefined) =>
  value ? value.replace(/jules\s+acme/gi, BRAND_NAME) : value;

export const applyInfoOverrides = (info: InfoFragment): InfoFragment => {
  return {
    ...info,
    title: BRAND_NAME,
    subtitle: replaceName(info.subtitle),
    heading: replaceName(info.heading) ?? info.heading,
    email: EMAIL,
    socialLinks: {
      ...info.socialLinks,
      items: SOCIAL_LINKS,
    },
  };
};

