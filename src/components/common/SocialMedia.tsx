import Link from "next/link";
import { InstagramLogo, FacebookLogo, YoutubeLogo } from "phosphor-react";

const socialMedia = [
  {
    media: "instagram",
    username: "@ipfiladelfia",
    url: "https://www.instagram.com/ipfiladelfia/",
    icon: InstagramLogo,
  },
  {
    media: "facebook",
    username: "@ipfiladelfiasorocaba",
    url: "https://www.facebook.com/ipfiladelfiasorocaba",
    icon: FacebookLogo,
  },
  {
    media: "youtube",
    username: "@IPFILADÉLFIA1",
    url: "https://www.youtube.com/c/IPFILAD%C3%89LFIA1",
    icon: YoutubeLogo,
  },
];

export const SocialMedia = () => {
  return (
    <ul className="flex gap-4">
      {socialMedia.map((item) => (
        <li key={item.username}>
          <Link target="_blank" href={item.url}>
            <item.icon size={28} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
